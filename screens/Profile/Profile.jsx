import React, { useEffect } from "react";
import { View } from "react-native";
import { Button, Text } from "react-native-paper";
import { useDispatch, useSelector } from "react-redux";
import { isSignedIn } from "../../redux/actions";

function Profile({ navigation }) {
  const dispatch = useDispatch();
  let fullname = useSelector((state) => state.fullname);
  let phonenumUser = useSelector((state) => state.phonenumUser);
  function HandleLogOut() {
    console.log("logout run");
    dispatch(isSignedIn(false, "", ""));
  }
  return (
    <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
      <Text>Customer Name: {fullname}</Text>
      <Text>Customer Phone Number: {phonenumUser}</Text>
      <Button title="Log Out" onPress={() => HandleLogOut()} />
    </View>
  );
}

export default Profile;
