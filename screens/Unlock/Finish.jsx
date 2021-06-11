import { Button, View, Text } from "react-native";
import * as React from "react";
import { useSelector } from "react-redux";
import axios from "axios";

function HandleEndService() {}
function HandleLockDoor() {
  const cabinet = useSelector((state) => state.cabinet);
  let bodyParameter = {
    value: 180,
  };
  let bodyServer = {
    state: "in_progress",
    id: cabinet,
  };
  console.log(bodyServer);
  axios
    .post(
      `https://io.adafruit.com/api/v2/Leo1601/feeds/${feedKey}/data`,
      bodyParameter,
      config
    )
    .then((res) => {
      console.log(res.data, "lock cabinet successful");
    })
    .catch((err) => console.log(err));
  axios
    .post(`http://192.168.1.11:3001/ChangeCabinetState`, bodyServer)
    .then((res) => {
      console.log(res.data, "update state cabinet server successful");
    });
}

export default function Finish({ navigation }) {
  return (
    <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
      <Text>Finish?</Text>
      <Button title="End Service" onPress={() => HandleEndService()} />
      <Text>Lock door</Text>
      <Button
        title="Lock Door"
        onPress={() => {
          HandleLockDoor;
        }}
      ></Button>
    </View>
  );
}
