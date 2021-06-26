import React from "react";
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity,
  Linking,
} from "react-native";

export default function PaymentOption({ navigation }) {
  function PaymentOption() {
    Linking.openURL("whatsapp://app");
  }
  //export default class App extends React.Component {
  //render(){
  return (
    <View style={styles.container} onPress={() => PaymentOption()}>
      <Text style={styles.logo}>PAYMENT</Text>
      <TouchableOpacity style={styles.momoBtn} onPress={() => PaymentOption()}>
        <Text style={styles.loginText}>MOMO</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.airpayBtn}
        onPress={() => PaymentOption()}
      >
        <Text style={styles.loginText}>AIRPAY</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "rgb(166, 233, 241)",
    alignItems: "center",
    justifyContent: "center",
  },
  logo: {
    fontWeight: "bold",
    fontSize: 50,
    color: "#fb5b5a",
    marginBottom: 40,
  },

  momoBtn: {
    width: "80%",
    backgroundColor: "#fb5b5a",
    borderRadius: 25,
    height: 50,
    alignItems: "center",
    justifyContent: "center",
    marginTop: 90,
    marginBottom: 10,
  },
  airpayBtn: {
    width: "80%",
    backgroundColor: "#fb5b5a",
    borderRadius: 25,
    height: 50,
    alignItems: "center",
    justifyContent: "center",
    marginTop: 40,
    marginBottom: 10,
  },
  loginText: {
    color: "black",
  },
});
