import { Button, View, Text } from "react-native";
import * as React from "react";
import { useSelector } from "react-redux";

export default function PaymentScreen({ navigation }) {
  const size = useSelector((state) => state.size);
  console.log(size);
  return (
    <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
      <Text>Choose Payment Method</Text>
    </View>
  );
}
