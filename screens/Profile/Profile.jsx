import React from "react";
import { View } from "react-native";
import { Button, Text } from "react-native-paper";
import { useSelector } from "react-redux";

function Profile({ naivgation }) {
  let fullname = useSelector((state) => state.fullname);
  let phonenumUser = useSelector((state) => state.phonenumUser);
  return (
    <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
      <Text>Customer Name: {fullname}</Text>
      <Text>Customer Phone Number: {phonenumUser}</Text>
      <Button title="Log Out" onPress={() => HandleConfirm()} />
    </View>
  );
}

export default Profile;
