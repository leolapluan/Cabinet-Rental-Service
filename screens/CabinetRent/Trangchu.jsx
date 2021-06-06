import React from 'react';
import { StyleSheet, Text, View, TextInput, TouchableOpacity } from 'react-native';

export default function Trangchu()  {
//export default class App extends React.Component {
  //render(){
    return (
        <View style={styles.container}>
        <Text style={styles.logo}>BOX</Text> 
        <TouchableOpacity style={styles.guidoBtn}>
          <Text style={styles.loginText}>GỬI ĐỒ</Text>
        </TouchableOpacity>
         <TouchableOpacity style={styles.nhandoBtn}>
          <Text style={styles.loginText}>NHẬN ĐỒ</Text>
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
    fontSize:50,
    color:"#fb5b5a",
    marginBottom:40
  },
  
  guidoBtn:{
    width:"80%",
    backgroundColor:"#fb5b5a",
    borderRadius:25,
    height:50,
    alignItems:"center",
    justifyContent:"center",
    marginTop:90,
    marginBottom:10
  },
  nhandoBtn:{
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