import React from 'react';
import { StyleSheet, Text, View, TextInput, TouchableOpacity } from 'react-native';


export default function OTP({navigation})  {
//export default class App extends React.Component {
  state={
    username:"",
    password:"",
    phone:"",
    nhaplaipassword:""
  }
  function InfromNhando() {
    navigation.navigate("InfromNhando");
  }

  //render(){
    return (
      <View style={styles.container}>
      <Text style={styles.logo}>BOX</Text>
      <View style={styles.inputView} >
        <TextInput  
          style={styles.inputText}
          placeholder="Nhập mã OTP" 
          placeholderTextColor="#003f5c"
          onChangeText={text => this.setState({nhapmaOTP:text})}/>
        </View>
        
      
      <TouchableOpacity style={styles.signupBtn} onPress={() => InfromNhando()}>
        <Text style={styles.signupText}>Confirm </Text>
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

signupBtn:{
  width:"50%",
  backgroundColor:"#fb5b5a",
  borderRadius:25,
  height:50,
  alignItems:"center",
  justifyContent:"center",
  marginTop:20,
  marginBottom:10
},
signupText:{
  color:"black"
}
});