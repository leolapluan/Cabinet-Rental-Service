import { Button, View, Text } from "react-native";
import * as React from "react";
import { RadioButton } from "react-native-paper";
import { useDispatch } from "react-redux";
import { storeCabinetSize } from "../../redux/actions";

export default function FindCabinet({ navigation }) {
  const dispatch = useDispatch();
  const [checked, setChecked] = React.useState("20");
  React.useEffect(() => {
    console.log(checked);
    dispatch(storeCabinetSize(checked));
  }, [checked]);

  function HandleConfirm() {
    navigation.navigate("ReceiverPhoneNumber");
  }
  console.log("hello world");
  return (
    <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
      <RadioButton
        value="20"
        status={checked === "20" ? "checked" : "unchecked"}
        onPress={() => setChecked("20")}
      />
      <Text>20x20cm</Text>
      <RadioButton
        value="30"
        status={checked === "30" ? "checked" : "unchecked"}
        onPress={() => setChecked("30")}
      />
      <Text>30x30cm</Text>
      <RadioButton
        value="40"
        status={checked === "40" ? "checked" : "unchecked"}
        onPress={() => setChecked("40")}
      />
      <Text>40x40cm</Text>
      {/* <Button title="Confirm" onPress={() => navigation.navigate("Payment")} /> */}
      <Button title="Confirm" onPress={() => HandleConfirm()} />
    </View>
  );
}
