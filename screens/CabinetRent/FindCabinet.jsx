import { Button, View, Text } from "react-native";
import * as React from "react";
import { RadioButton } from "react-native-paper";
import { useDispatch } from "react-redux";
import { storeCabinetSize } from "../../redux/actions";
import axios from "axios";

export default function FindCabinet({ navigation }) {
  const dispatch = useDispatch();
  const [checked, setChecked] = React.useState("20");
  const [cabinetReady, setCabinetReady] = React.useState([]);
  const [cabinets20, setCabinets20] = React.useState([]);
  const [cabinets30, setCabinets30] = React.useState([]);
  const [cabinets40, setCabinets40] = React.useState([]);
  React.useEffect(() => {
    console.log(checked);
    dispatch(storeCabinetSize(checked));
  }, [checked]);

  function HandleConfirm() {
    navigation.navigate("ReceiverPhoneNumber");
  }
  React.useEffect(() => {
    axios
      .get(`http://192.168.1.11:3001/findCabinet`)
      .then((res) => {
        setCabinetReady(res.data);
      })
      .then(() => {
        setCabinets20(
          cabinetReady.filter((x) => x.state == "ready" && x.size == 20)
        );
        setCabinets30(
          cabinetReady.filter((x) => x.state == "ready" && x.size == 20)
        );
        setCabinets40(
          cabinetReady.filter((x) => x.state == "ready" && x.size == 20)
        );
        console.log(cabinets20, cabinets30, cabinets40);
      })
      .catch((err) => console.log(err));
  }, []);

  return (
    <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
      <RadioButton
        value="20"
        status={checked === "20" ? "checked" : "unchecked"}
        onPress={() => setChecked("20")}
      />
      <Text>20x20cm Quantity: {cabinets20.length}</Text>
      <RadioButton
        value="30"
        status={checked === "30" ? "checked" : "unchecked"}
        onPress={() => setChecked("30")}
      />
      <Text>30x30cm Quantity: {cabinets30.length}</Text>
      <RadioButton
        value="40"
        status={checked === "40" ? "checked" : "unchecked"}
        onPress={() => setChecked("40")}
      />
      <Text>40x40cm Quantity: {cabinets40.length}</Text>
      {/* <Button title="Confirm" onPress={() => navigation.navigate("Payment")} /> */}
      <Button title="Confirm" onPress={() => HandleConfirm()} />
    </View>
  );
}
