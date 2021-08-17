import React from "react";
import { View, Button } from "react-native";
import { TextInput } from "react-native-paper";
import { useDispatch, useSelector } from "react-redux";
import { storeRegisterPhoneNum } from "../../redux/actions";

function RegisterPhoneNumber({ navigation }) {
  const dispatch = useDispatch();
  const [phoneNumSender, setPhoneNumSender] = React.useState(
    useSelector((state) => state.phonenumUser)
  );
  const [phoneNumReceiver, setPhoneNumReceiver] = React.useState("");
  function HandleConfirm() {
    dispatch(storeRegisterPhoneNum(phoneNumSender, phoneNumReceiver));
    navigation.navigate("PaymentMethod");
  }
  return (
    <View>
      <TextInput
        label="Phone number sender"
        value={phoneNumSender}
        onChangeText={(phoneNumSender) => setPhoneNumSender(phoneNumSender)}
      />
      <TextInput
        label="Phone number receiver"
        value={phoneNumReceiver}
        onChangeText={(phoneNumReceiver) =>
          setPhoneNumReceiver(phoneNumReceiver)
        }
      />
      <Button color="#9579d1" title="Confirm" onPress={() => HandleConfirm()} />
    </View>
  );
}

export default RegisterPhoneNumber;
