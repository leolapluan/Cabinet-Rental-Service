import { Button, View, Text } from "react-native";
import * as React from "react";
import { useSelector } from "react-redux";
import axios from "axios";

export default function Unlock({ navigation }) {
  const size = useSelector((state) => state.size);
  const phoneNum = useSelector((state) => state.phoneNum);
  console.log(size, phoneNum, "from payment");
  function HandleConfirm() {
    let feedKey = "rc-servo-590-number-1";
    let bodyParameter = {
      value: 0,
    };

    const config = {
      headers: {
        "X-AIO-Key": "aio_YSxh54X6nv3Q4a2Cq5PB13fpwOa3",
      },
    };
    axios
      .post(
        `https://io.adafruit.com/api/v2/Leo1601/feeds/${feedKey}/data`,
        bodyParameter,
        config
      )
      .then((res) => {
        console.log(res.data, "unlock cabinet successful");
      })
      .catch((err) => console.log(err));
  }
  return (
    <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
      <Text>Open door</Text>
      <Button title="Confirm" onPress={() => HandleConfirm()} />
    </View>
  );
}
