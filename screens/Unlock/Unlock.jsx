import { Button, View, Text } from "react-native";
import * as React from "react";
import { useSelector } from "react-redux";
import axios from "axios";
import { DataTable } from "react-native-paper";

export default function Unlock({ navigation }) {
  const userId = useSelector((state) => state.userId);
  const [transactionInfo, setTransactionInfo] = React.useState({});
  const [cabinetInfo, setCabinetInfo] = React.useState({});
  //get Transaction by user
  async function getTransaction() {
    await axios
      .post(`http://localhost:3001/getCabinetByUser`, { userID: userId })
      .then((res) => {
        setTransactionInfo({ ...res.data[0] });
      })
      .catch((err) => console.log(err));
  }
  getTransaction();
  //get cabinet info by id
  async function getCabinet() {
    await axios
      .post(`http://localhost:3001/getCabinet`, {
        id: transactionInfo.Cabinet_ID,
      })
      .then((res) => setCabinetInfo({ ...res.data[0] }))
      // .then((res) => console.log("cabinet info", res.data[0]))
      .catch((err) => console.log(err));
  }
  getCabinet();
  function HandleConfirm(feedKey, cabinetID) {
    console.log("feedKey", feedKey);
    let bodyParameter = {
      value: 0,
    };
    let bodyServer = {
      state: "ready",
      id: cabinetID,
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
      })
      .catch((err) => console.log(err));
    //add to history trade
    axios
      .post(`http://localhost:3001/AddHistoryTrade`, {
        Time_Arrive: transactionInfo.Time_Arrive,
        PhoneNumSender: transactionInfo.PhoneNum_Sender,
        PhoneNumReceiver: transactionInfo.PhoneNumReceiver,
        User_ID: transactionInfo.UserID,
        Cabinet_ID: transactionInfo.Cabinet_ID,
      })
      .then((res) => console.log(res.data, "New history trade created"))
      .catch((err) => console.log(err));
  }
  return (
    <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
      <DataTable>
        <DataTable.Header>
          <DataTable.Title>Number of cell</DataTable.Title>
          <DataTable.Title>Status</DataTable.Title>
          <DataTable.Title>Time Arrive</DataTable.Title>
          <DataTable.Title>Phone Number Of Sender</DataTable.Title>
          <DataTable.Title>Phone Number Of Receiver</DataTable.Title>
        </DataTable.Header>

        <DataTable.Row>
          <DataTable.Cell>{transactionInfo.Cabinet_ID}</DataTable.Cell>
          <DataTable.Cell>Locked</DataTable.Cell>
          <DataTable.Cell>{transactionInfo.Time_Arrive}</DataTable.Cell>
          <DataTable.Cell>{transactionInfo.PhoneNum_Sender}</DataTable.Cell>
          <DataTable.Cell>{transactionInfo.PhoneNumReceiver}</DataTable.Cell>
        </DataTable.Row>
      </DataTable>
      <Button
        title="Unlock door"
        onPress={() =>
          HandleConfirm(cabinetInfo.feedkey, transactionInfo.Cabinet_ID)
        }
      />
    </View>
  );
}
