import React, { useCallback } from "react";
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity,
  Linking,
  Button,
} from "react-native";

export default function PaymentOption({ navigation }) {
  // function PaymentOption() {
  //   Linking.openURL("whatsapp://app");
  // }
  // const OpenSettingsButton = ({ children }) => {
  //   const handlePress = useCallback(async () => {
  //     // Open the custom settings if the app has one
  //     await Linking.openURL("whatsapp://app");
  //   }, []);

  //   return <Button title={children} onPress={handlePress} />;
  // };
  const handleDirection = () => {
    navigation.navigate("Payment");
  };
  return (
    <View style={styles.container} onPress={() => PaymentOption()}>
      <Text style={styles.logo}>PAYMENT</Text>

      <TouchableOpacity
        style={styles.airpayBtn}
        onPress={() => handleDirection()}
      >
        <Text style={styles.loginText}>MOMO</Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={styles.airpayBtn}
        onPress={() => handleDirection()}
      >
        <Text style={styles.loginText}>STRIPE</Text>
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
