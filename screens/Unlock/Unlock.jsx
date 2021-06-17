import { Button, View, Text } from "react-native";
import * as React from "react";
import { useSelector } from "react-redux";
import axios from "axios";
import { DataTable } from "react-native-paper";

export default function Unlock({ navigation }) {
  const cabinet = useSelector((state) => state.cabinet);
  const phoneNum = useSelector((state) => state.phoneNum);
  console.log(cabinet, phoneNum, "from payment");
  function HandleConfirm() {
    let feedKey = "rc-servo-590-number-1";
    let bodyParameter = {
      value: 0,
    };
    let bodyServer = {
      state: "ready",
      id: cabinet,
    };
    console.log(bodyServer);
    const config = {
      headers: {
        "X-AIO-Key": "aio_XYOl388NsVcahTof32jXRcGWJbVi",
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
    axios
      .post(`http://localhost:3001/ChangeCabinetState`, bodyServer)
      .then((res) => {
        console.log(res.data, "update state cabinet server successful");
      });
    navigation.navigate("Finish");
  }
  return (
    <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
      <DataTable>
        <DataTable.Header>
          <DataTable.Title>Số tủ</DataTable.Title>
          <DataTable.Title>Trạng thái</DataTable.Title>
        </DataTable.Header>

        <DataTable.Row>
          <DataTable.Cell></DataTable.Cell>
          <DataTable.Cell></DataTable.Cell>
        </DataTable.Row>
      </DataTable>
      <Button title="Unlock door" onPress={() => HandleConfirm()} />
    </View>
  );
}
