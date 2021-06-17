import { Button, View, Text } from "react-native";
import * as React from "react";
import { useSelector } from "react-redux";
import axios from "axios";

function HandleEndService() {}

export default function Finish({ navigation }) {
  const [feedKey, setFeedKey] = React.useState("");
  let id = useSelector((state) => state.cabinet); //cell selected
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
      "X-AIO-Key": "aio_XYOl388NsVcahTof32jXRcGWJbVi",
    },
  };
  React.useEffect(() => {
    async function getCabinet() {
      const response = await axios
        .post(`http://localhost:3001/getCabinet`, { id: id })
        .then((res) => {
          setFeedKey(res.data[0].feedkey);
        })
        .catch((err) => console.log(err));
    }
    getCabinet();
  }, [id]);
  return (
    <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
      <Text>Finish?</Text>
      <Button title="End Service" onPress={() => HandleEndService()} />
    </View>
  );
}
