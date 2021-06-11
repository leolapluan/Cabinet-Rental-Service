import { Button, View, Text } from "react-native";
import * as React from "react";
import { useSelector } from "react-redux";

export default function PaymentScreen({ navigation }) {
  const cabinet = useSelector((state) => state.cabinet);
  const phoneNum = useSelector((state) => state.phoneNum);
  console.log(cabinet, phoneNum, "from payment");
  function HandleConfirm() {
    navigation.navigate("NotifyResult");
  }
  return (
    <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
      <Text>Số tiền thanh toán: 5000VND</Text>
      <Text>Hình thức thanh toán Momo</Text>
      <Button title="Confirm" onPress={() => HandleConfirm()} />
    </View>
  );
}
