import { Button, View, Text } from "react-native";
import * as React from "react";
import { RadioButton } from "react-native-paper";
import { useDispatch } from "react-redux";
import { storeCabinetSelect } from "../../redux/actions";
import axios from "axios";

export default function FindCabinet({ navigation }) {
  const dispatch = useDispatch();
  const [checked, setChecked] = React.useState("");
  const [cabinetSelect, setCabinetSelect] = React.useState("");
  const [cabinetReady, setCabinetReady] = React.useState([]);
  const [cabinets20, setCabinets20] = React.useState([]);
  const [cabinets30, setCabinets30] = React.useState([]);
  const [cabinets40, setCabinets40] = React.useState([]);
  React.useEffect(() => {
    if (checked == "20") setCabinetSelect("1");
    if (checked == "30") setCabinetSelect("2");
    if (checked == "40") setCabinetSelect("3");
    dispatch(storeCabinetSelect(cabinetSelect));
  }, [checked, cabinetSelect]);

  function HandleConfirm() {
    navigation.navigate("ReceiverPhoneNumber");
  }
  React.useEffect(() => {
    async function getCabinet() {
      const response = await axios
        .get(`http://192.168.1.3:3001/findCabinet`)
        .then((res) => {
          setCabinetReady(res.data);
        })
        .then(() => {
          setCabinets20(
            cabinetReady.filter((x) => x.state == "ready" && x.size == 20)
          );
          setCabinets30(
            cabinetReady.filter((x) => x.state == "ready" && x.size == 30)
          );
          setCabinets40(
            cabinetReady.filter((x) => x.state == "ready" && x.size == 40)
          );
        })
        .catch((err) => console.log(err));
    }
    getCabinet();
  }, [cabinetReady]);

  return (
    <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
      <RadioButton
        value="20"
        status={checked === "20" ? "checked" : "unchecked"}
        onPress={() => setChecked("20")}
        disabled={cabinets20.length == 0 ? true : false}
      />
      <Text>20x20cm Quantity: {cabinets20.length}</Text>
      <RadioButton
        value="30"
        status={checked === "30" ? "checked" : "unchecked"}
        onPress={() => setChecked("30")}
        disabled={cabinets30.length == 0 ? true : false}
      />
      <Text>30x30cm Quantity: {cabinets30.length}</Text>
      <RadioButton
        value="40"
        status={checked === "40" ? "checked" : "unchecked"}
        onPress={() => setChecked("40")}
        disabled={cabinets40.length == 0 ? true : false}
      />
      <Text>40x40cm Quantity: {cabinets40.length}</Text>
      {/* <Button title="Confirm" onPress={() => navigation.navigate("Payment")} /> */}
      <Button
        title="Confirm"
        onPress={() => HandleConfirm()}
        disabled={cabinetReady.length == 0 ? true : false}
      />
    </View>
  );
}
