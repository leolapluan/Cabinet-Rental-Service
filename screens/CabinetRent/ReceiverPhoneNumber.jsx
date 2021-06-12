import React from "react";
import { View, Button } from "react-native";
import { TextInput } from "react-native-paper";
import { useDispatch } from "react-redux";
import { storeReceiverPhoneNum } from "../../redux/actions";

function ReceiverPhoneNumber({ navigation }) {
  const dispatch = useDispatch();
  const [phoneNum, setPhoneNum] = React.useState("");
  React.useEffect(() => {
    dispatch(storeReceiverPhoneNum(phoneNum));
  }, [phoneNum]);
  function HandleConfirm() {
    navigation.navigate("Payment");
  }
  return (
    <View>
      <TextInput
        label="Phone number receiver"
        value={phoneNum}
        onChangeText={(phoneNum) => setPhoneNum(phoneNum)}
      />
      <Button title="Confirm" onPress={() => HandleConfirm()} />
    </View>
  );
}

export default ReceiverPhoneNumber;
