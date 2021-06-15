import axios from "axios";
import React, { useEffect, useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity,
} from "react-native";
import NotifySignup from "../Authentification/NotifySignup";

export default function Signup({ navigation }) {
  //export default class App extends React.Component {
  const [fullname, setFullname] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [phonenum, setPhonenum] = useState("");
  function Login() {
    navigation.navigate("Login");
  }
  function NotifySignup() {
    axios
      .post(`http://localhost:3001/AddNewAccount`, {
        fullname: fullname,
        username: username,
        password: password,
        phonenum: phonenum,
      })
      .then((res) => {
        console.log(res);
      })
      .catch((err) => {
        console.log(err);
      });
    navigation.navigate("NotifySignup");
  }
  //render(){
  return (
    <View style={styles.container}>
      <Text style={styles.logo}>Thông tin đăng ký</Text>
      <View style={styles.inputView}>
        <TextInput
          style={styles.inputText}
          placeholder="Fullname"
          placeholderTextColor="#003f5c"
          onChangeText={(text) => setFullname(text)}
        />
      </View>
      <View style={styles.inputView}>
        <TextInput
          style={styles.inputText}
          placeholder="Username"
          placeholderTextColor="#003f5c"
          onChangeText={(text) => setUsername(text)}
        />
      </View>
      <View style={styles.inputView}>
        <TextInput
          secureTextEntry
          style={styles.inputText}
          placeholder="Password"
          placeholderTextColor="#003f5c"
          onChangeText={(text) => setPassword(text)}
        />
      </View>
      <View style={styles.inputView}>
        <TextInput
          style={styles.inputText}
          placeholder="Phone Number"
          placeholderTextColor="#003f5c"
          onChangeText={(text) => setPhonenum(text)}
        />
      </View>
      <TouchableOpacity style={styles.signupBtn} onPress={() => NotifySignup()}>
        <Text style={styles.signupText}>Confirm </Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.signupBtn} onPress={() => Login()}>
        <Text style={styles.signupText}>Back </Text>
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
    fontSize: 35,
    color: "#fb5b5a",
    marginBottom: 40,
  },
  inputView: {
    width: "80%",
    backgroundColor: "rgb(227, 235, 236)",
    borderRadius: 25,
    height: 50,
    marginBottom: 20,
    justifyContent: "center",
    padding: 20,
  },
  inputText: {
    height: 50,
    color: "black",
  },

  signupBtn: {
    width: "50%",
    backgroundColor: "#fb5b5a",
    borderRadius: 25,
    height: 50,
    alignItems: "center",
    justifyContent: "center",
    marginTop: 20,
    marginBottom: 10,
  },
  signupText: {
    color: "black",
  },
});
