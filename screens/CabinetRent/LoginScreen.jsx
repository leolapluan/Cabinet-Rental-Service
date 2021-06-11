import * as React from "react";
import { StyleSheet, Text, View, TextInput, TouchableOpacity } from 'react-native';

export default function Login({ navigation })  {
//export default class App extends React.Component {
state={
    username:"",
    password:""
  }
  function HandleConfirm() {
    navigation.navigate("Trangchu");
  }
  function HandleConfirm2() {
    navigation.navigate("Signup");
  }
  //render(){
    return (
      <View style={styles.container}>
        <Text style={styles.logo}>BOX</Text>
        <View style={styles.inputView} >
          <TextInput  
            style={styles.inputText}
            placeholder="User Name..." 
            placeholderTextColor="#003f5c"
            onChangeText={text => this.setState({username:text})}/>
        </View>
        <View style={styles.inputView} >
          <TextInput  
            secureTextEntry
            style={styles.inputText}
            placeholder="Password..." 
            placeholderTextColor="#003f5c"
            onChangeText={text => this.setState({password:text})}/>
        </View>
        <TouchableOpacity onPress={() => HandleConfirm()}>
          <Text style={styles.forgot}>Forgot Password?</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.loginBtn} onPress={() => HandleConfirm()} >
          <Text style={styles.loginText} >LOGIN</Text>
        </TouchableOpacity>
        <TouchableOpacity  onPress={() => HandleConfirm2()} >
          <Text style={styles.loginText}  >Signup</Text>
        </TouchableOpacity> 
      </View>
    );
    
  //}
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
    fontSize:50,
    color:"#fb5b5a",
    marginBottom:40
  },
  inputView:{
    width:"80%",
    backgroundColor:'rgb(227, 235, 236)',
    borderRadius:25,
    height:50,
    marginBottom:20,
    justifyContent:"center",
    padding:20
  },
  inputText:{
    height:50,
    color:"black"
  },
  forgot:{
    color:"black",
    fontSize:11
  },
  loginBtn:{
    width:"80%",
    backgroundColor:"#fb5b5a",
    borderRadius:25,
    height:50,
    alignItems:"center",
    justifyContent:"center",
    marginTop:40,
    marginBottom:10
    
  },
  loginText:{
    color:"black"
  }
});