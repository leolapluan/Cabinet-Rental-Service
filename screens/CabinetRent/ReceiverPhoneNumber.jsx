import React from "react";
import { View, Button } from "react-native";
import { TextInput } from "react-native-paper";

function ReceiverPhoneNumber({ navigation }) {
  const [number, setNumber] = React.useState("");
  function HandleConfirm() {
    navigation.navigate("Payment");
  }
  return (
    <View>
      {/* Phone number */}
      <TextInput
        label="Phone number"
        value={number}
        onChangeText={(number) => setNumber(number)}
      />
      <Button title="Confirm" onPress={() => HandleConfirm()} />
    </View>
  );
}

export default ReceiverPhoneNumber;
