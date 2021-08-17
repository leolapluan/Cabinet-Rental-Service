import React from "react";
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity,
} from "react-native";
import { alignContent } from "styled-system";

export default function NotifySignup({ navigation }) {
  function Login() {
    navigation.navigate("Login");
  }
  //export default class App extends React.Component {
  //render(){
  return (
    <View style={styles.container}>
      <Text style={styles.logo}>REGISTER SUCCESSFUL !</Text>
      <TouchableOpacity style={styles.homeBtn} onPress={() => Login()}>
        <Text style={styles.loginText}>HOME</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#ffffff",
    alignItems: "center",
    justifyContent: "center",
  },
  logo: {
    fontWeight: "bold",
    fontSize: 35,
    color: "#9579d1",
    marginBottom: 40,
    marginLeft:30,
},

  homeBtn: {
    width: "50%",
    backgroundColor: "#9579d1",
    borderRadius: 25,
    height: 50,
    alignItems: "center",
    justifyContent: "center",
    marginTop: 50,
    marginBottom: 10,
  },

  loginText: {
    color: "black",
  },
});
