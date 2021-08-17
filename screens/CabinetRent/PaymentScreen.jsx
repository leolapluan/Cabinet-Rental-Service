import { Button, View, Text,Image, StyleSheet } from "react-native";
import * as React from "react";
import { useSelector } from "react-redux";
import { marginTop } from "styled-system";

export default function PaymentScreen({ navigation }) {
  const cabinet = useSelector((state) => state.cabinet);
  const phoneNum = useSelector((state) => state.phoneNum);
  console.log(cabinet, phoneNum, "from payment");
  function HandleConfirm() {
    navigation.navigate("NotifyResult");
  }
  return (
    <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
      <Text>Số tiền thanh toán: 5000VND</Text>
      <Image
        style={styles.logo}
        source={{
          uri: 'https://is4-ssl.mzstatic.com/image/thumb/Purple123/v4/60/19/06/6019065e-3023-2217-ab41-fadff8c2cc4a/AppIcon-0-0-1x_U007emarketing-0-0-0-5-0-0-85-220.png/1024x1024bb.png',
        }}
      />
      <Button color="#9579d1" title="Confirm" onPress={() => HandleConfirm()} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingTop: 50,
  },
  tinyLogo: {
    width: 50,
    height: 50,
  },
  logo: {
    width: 200,
    height: 200,
    marginBottom:50,
    marginTop:25
  },
});