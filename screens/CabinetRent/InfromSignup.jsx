import React from 'react';
import { StyleSheet, Text, View, TextInput, TouchableOpacity } from 'react-native';

export default function InfromSignup({navigation})  {

    function Login() {
        navigation.navigate("Login");
      }
//export default class App extends React.Component {
  //render(){
    return (
        <View style={styles.container}>
        <Text style={styles.logo}>ĐĂNG KÝ THÀNH CÔNG !</Text> 
        <TouchableOpacity style={styles.homeBtn} onPress={() => Login()}>
          <Text style={styles.loginText}>HOME</Text>
        </TouchableOpacity>
      </View>
    );
  }

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'rgb(166, 233, 241)',
    alignItems: 'center',
    justifyContent: 'center',
  },
  logo:{
    fontWeight:"bold",
    fontSize:35,
    color:"#fb5b5a",
    marginBottom:40
  },
  
  homeBtn:{
    width:"50%",
    backgroundColor:"#fb5b5a",
    borderRadius:25,
    height:50,
    alignItems:"center",
    justifyContent:"center",
    marginTop:50,
    marginBottom:10
  },

  loginText:{
    color:"black"
  }
  
});
