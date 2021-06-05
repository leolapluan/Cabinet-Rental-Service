import React from 'react';
import { StyleSheet, Text, View, TextInput, TouchableOpacity } from 'react-native';

export default function Signup()  {
//export default class App extends React.Component {
  state={
    username:"",
    password:"",
    phone:"",
    nhaplaipassword:""
  }
  //render(){
    return (
      <View style={styles.container}>
      <Text style={styles.logo}>Thông tin đăng ký</Text>
      <View style={styles.inputView} >
        <TextInput  
          style={styles.inputText}
          placeholder="UserName..." 
          placeholderTextColor="#003f5c"
          onChangeText={text => this.setState({username:text})}/>
      </View>
       <View style={styles.inputView} >
        <TextInput  
          secureTextEntry
          style={styles.inputText}
          placeholder="Phone..." 
          placeholderTextColor="#003f5c"
          onChangeText={text => this.setState({phone:text})}/>
      </View>
      <View style={styles.inputView} >
        <TextInput  
          secureTextEntry
          style={styles.inputText}
          placeholder="Password..." 
          placeholderTextColor="#003f5c"
          onChangeText={text => this.setState({password:text})}/>
      </View>
      <View style={styles.inputView} >
        <TextInput  
          secureTextEntry
          style={styles.inputText}
          placeholder="re-enter Password..." 
          placeholderTextColor="#003f5c"
          onChangeText={text => this.setState({nhaplaipassword:text})}/>
      </View>
      <TouchableOpacity style={styles.signupBtn}>
        <Text style={styles.signupText}>Confirm </Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.signupBtn}>
        <Text style={styles.signupText}>Back </Text>
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