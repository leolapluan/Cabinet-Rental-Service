import { Button, View, Text } from "react-native";
import * as React from "react";
import axios from "axios";
import { useSelector } from "react-redux";

export default function NotifyResult({ navigation }) {
  let feedKey = "rc-servo-590-number-1";
  let id = useSelector((state) => state.cabinet);
  let bodyParameter = {
    value: 180,
  };
  let bodyServer = {
    state: "in_progress",
    id: id,
  };
  console.log(bodyServer);
  const config = {
    headers: {
      "X-AIO-Key": "aio_YSxh54X6nv3Q4a2Cq5PB13fpwOa3",
    },
  };

  function HandleLockDoor() {
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
  return (
    <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
      <Text>Payment successful. Your cabinet is ready!!!</Text>
      <Text>
        Have you put your things into the cell yet? Then lock the door now!
      </Text>
      <Button title="Lock Door" onPress={() => HandleLockDoor()} />
    </View>
  );
}
