import { Button, View, Text } from "react-native";
import * as React from "react";
import axios from "axios";
import { useSelector } from "react-redux";
import { showMessage, hideMessage } from "react-native-flash-message";

export default function NotifyResult({ navigation }) {
  const [feedKey, setFeedKey] = React.useState("");
  let id = useSelector((state) => state.cabinet); //cell selected
  let phoneNumSender = useSelector((state) => state.phoneNumSender);
  let phoneNumReceiver = useSelector((state) => state.phoneNumReceiver);
  let userId = useSelector((state) => state.userId);
  let bodyParameter = {
    value: "{\"id\":\"17\",\"name\":\"SERVO\",\"data\":\"180\",\"unit\":\"degree\"}",
  };
  let bodyServer = {
    state: "in_progress",
    id: id,
  };
  console.log(bodyServer);
  const config = {
    headers: {
      "X-AIO-Key": "aio_MLVC146cvrHg9rticUITyTBTwGgy",
    },
  };
  React.useEffect(() => {
    async function getCabinet() {
      const response = await axios
        .post(`http://192.168.1.4:3001/getCabinet`, { id: id })
        .then((res) => {
          setFeedKey(res.data[0].feedkey);
        })
        .catch((err) => console.log(err));
    }
    getCabinet();
  }, [id]);
  function HandleLockDoor() {
    axios
      .post(
        `https://io.adafruit.com/api/v2/Leo1601/feeds/${feedKey}/data`,
        bodyParameter,
        config
      )
      .then((res) => {
        console.log(res.data, "lock cabinet successful");
        showMessage({
          message: "Lock cabinet successful",
          type: "success",
          icon:"success",
        });
      })
      .catch((err) => console.log(err));
    axios
      .post(`http://192.168.1.4:3001/ChangeCabinetState`, bodyServer)
      .then((res) => {
        console.log(res.data, "update state cabinet server successful");
      });
    axios
      .post(`http://192.168.1.4:3001/AddTransactionInProgress`, {
        PhoneNumSender: phoneNumSender,
        PhoneNumReceiver: phoneNumReceiver,
        CabinetID: id,
        UserID: userId,
      })
      .then((res) => {
        console.log(res.data, "New transaction has been created");
      });
  }
  return (
    <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
      <Text>Payment successful. Your cabinet is ready!!!</Text>
      <Button color="#9579d1" title="Lock Door" onPress={() => HandleLockDoor()} />
    </View>
  );
}
