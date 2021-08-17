import React from "react";
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity,
} from "react-native";

export default function Home({ navigation }) {
  function FindCabinet() {
    navigation.navigate("FindCabinet");
  }
  function ReceiveThings() {
    navigation.navigate("UnlockCabinet");
  }
  //export default class App extends React.Component {
  //render(){
  return (
    <View style={styles.container}>
      <Text style={styles.logo}>BOX</Text>
      <TouchableOpacity style={styles.guidoBtn} onPress={() => FindCabinet()}>
        <Text style={styles.loginText}>RENT A CELL</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.nhandoBtn}
        onPress={() => ReceiveThings()}
      >
        <Text style={styles.loginText}>RECEIVE THINGS</Text>
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
    fontSize: 50,
    color: "#9579d1",
    marginBottom: 40,
  },

  guidoBtn: {
    width: "80%",
    backgroundColor: "#9579d1",
    borderRadius: 25,
    height: 50,
    alignItems: "center",
    justifyContent: "center",
    marginTop: 90,
    marginBottom: 10,
  },
  nhandoBtn: {
    width: "80%",
    backgroundColor: "#9579d1",
    borderRadius: 25,
    height: 50,
    alignItems: "center",
    justifyContent: "center",
    marginTop: 40,
    marginBottom: 10,
  },
  loginText: {
    color: "white",
  },
});
