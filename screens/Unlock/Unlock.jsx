import { Button, View, Text } from "react-native";
import * as React from "react";
import { useSelector } from "react-redux";
import axios from "axios";
import { DataTable } from "react-native-paper";
import { showMessage, hideMessage } from "react-native-flash-message";
import { ScrollView } from "react-native";

const config = {
  headers: {
    "X-AIO-Key": "aio_MLVC146cvrHg9rticUITyTBTwGgy",
  },
};
function handleConfirm(feedKey, cabinetID,setIsFinished,transactionInfo) {
  setIsFinished(1);
  let bodyParameter = {
    value: ""{\"id\":\"17\",\"name\":\"SERVO\",\"data\":\"0\",\"unit\":\"degree\"}",
  };
  let bodyServer = {
    state: "ready",
    id: cabinetID,
  };
  //unlock iot device
  axios
    .post(
      `https://io.adafruit.com/api/v2/Leo1601/feeds/${feedKey}/data`,
      bodyParameter,
      config
    )
    .then((res) => {
      console.log(res.data, "unlock cabinet successful");
      showMessage({
        message: "Unlock cabinet successful",
        type: "success",
        icon:"success",
      });
    })
    .catch((err) => console.log(err));
  //change cabinet state in cabinet
  axios
    .post(`http://192.168.1.4:3001/ChangeCabinetState`, bodyServer)
    .then((res) => {
      console.log(res.data, "update state cabinet server successful");
    })
    .catch((err) => console.log(err));
  //add to history trade
  axios
    .post(`http://192.168.1.4:3001/AddHistoryTrade`, {
      Time_Arrive: transactionInfo.Time_Arrive,
      PhoneNumSender: transactionInfo.PhoneNum_Sender,
      PhoneNumReceiver: transactionInfo.PhoneNumReceiver,
      User_ID: transactionInfo.UserID,
      Cabinet_ID: transactionInfo.Cabinet_ID,
    })
    .then((res) => console.log(res.data, "New history trade created"))
    .catch((err) => console.log(err));
  //delete transaction
  axios
    .post(`http://192.168.1.4:3001/deleteTransaction`, {
      Cabinet_ID: cabinetID,
    })
    .then((res) => console.log("Delete successful", res))
    .catch((err) => console.log(err));
}

const ViewScreen = (props) => {
  let transactionInfo=props.transactionInfo;
  let cabinetInfo=props.cabinetInfo;
  let stateDevice=props.stateDevice;
  let setIsFinished=props.setIsFinished;

  return <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
  {transactionInfo.Cabinet_ID ? (
    <ScrollView style={{flex:1}} horizontal={true}>
    <DataTable>
      <DataTable.Header>
        <DataTable.Title>Number of cell</DataTable.Title>
        <DataTable.Title>Status</DataTable.Title>
        <DataTable.Title>Time Arrive</DataTable.Title>
        <DataTable.Title>Phone Number Of Sender</DataTable.Title>
        <DataTable.Title>Phone Number Of Receiver</DataTable.Title>
        <DataTable.Title>Action</DataTable.Title>
      </DataTable.Header>

      <DataTable.Row>
        <DataTable.Cell>{transactionInfo.Cabinet_ID}</DataTable.Cell>
        <DataTable.Cell>
          {stateDevice == "180" ? "Locked" : "Open"}
        </DataTable.Cell>
        <DataTable.Cell>{transactionInfo.Time_Arrive}</DataTable.Cell>
        <DataTable.Cell>{transactionInfo.PhoneNum_Sender}</DataTable.Cell>
        <DataTable.Cell>{transactionInfo.PhoneNumReceiver}</DataTable.Cell>
        <DataTable.Cell>
          <Button
            title="Unlock door"
            onPress={() =>
              handleConfirm(cabinetInfo.feedkey, transactionInfo.Cabinet_ID,setIsFinished,transactionInfo)
            }
          />
        </DataTable.Cell>
      </DataTable.Row>
    </DataTable>
    </ScrollView>
  ) : (
    <Text>Thank you for using our service</Text>
  )}
</View>
}

export default function Unlock({ navigation }) {
  const userId = useSelector((state) => state.userId);
  const [transactionInfo, setTransactionInfo] = React.useState([]);
  const [cabinetInfo, setCabinetInfo] = React.useState({});
  const [stateDevice, setStateDevice] = React.useState("");
  const [isFinished, setIsFinished] = React.useState(0);

  //get Transaction by user
  React.useEffect(() => {
    async function getTransaction() {
      const response = await axios
        // .post(`http://192.168.1.4:3001/getCabinetByUser`, { userID: userId })
        .get(`http://192.168.1.4:3001/getCabinetByUser?userId=${userId}`)
        .then((res) => {
          setTransactionInfo(res.data[0]?res.data[0]:{});
        })
        .catch((err) => console.log(err));
    }
    getTransaction();
  }, [transactionInfo]);
  //get cabinet info by id
  React.useEffect(() => {
    async function getCabinet() {
      const response = await axios
        .post(`http://192.168.1.4:3001/getCabinet`, {
          id: transactionInfo.Cabinet_ID,
        })
        .then((res) => {
          console.log("Cabinet:", res.data[0]);
          setCabinetInfo({ ...res.data[0] });
        })
        // .then((res) => console.log("cabinet info", res.data[0]))
        .catch((err) => console.log(err));
    }
    getCabinet();
  }, [transactionInfo.Cabinet_ID]);

  //get state iot device from adafruit
  React.useEffect(() => {
    async function getStateDevice() {
      const response = await axios
        .get(
          `https://io.adafruit.com/api/v2/Leo1601/feeds/${cabinetInfo.feedkey}/data/last`,
          config
        )
        .then((res) => {
          console.log("iot device state:", res.data.value);
          setStateDevice(res.data.value);
        })
        .catch((err) => console.log(err));
    }
    getStateDevice();
  }, [cabinetInfo.feedkey, isFinished]);

  return (
    <ViewScreen transactionInfo={transactionInfo} cabinetInfo={cabinetInfo} stateDevice={stateDevice} setIsFinished={setIsFinished}/>
  );
}
