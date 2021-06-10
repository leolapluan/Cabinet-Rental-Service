import * as React from "react";
import { Button, View, Text,Navigator } from "react-native";
import { NavigationContainer, useFocusEffect } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import FindCabinet from "./screens/CabinetRent/FindCabinet";
import PaymentScreen from "./screens/CabinetRent/PaymentScreen";
import ReceiverPhoneNumber from "./screens/CabinetRent/ReceiverPhoneNumber";
import Login from "./screens/CabinetRent/LoginScreen";
import Signup from "./screens/CabinetRent/SignupScreen";
import Trangchu from "./screens/CabinetRent/Trangchu";
import Paymentbymomo from "./screens/CabinetRent/Paymentbymomo";
import Infrom from "./screens/CabinetRent/Inform";
import InfromSignup  from "./screens/CabinetRent/InfromSignup";
import RecipientPhonenumber  from "./screens/CabinetRent/RecipientPhonenumber";
import OTP  from "./screens/CabinetRent/OTP";
import InfromNhando  from "./screens/CabinetRent/InfromNhando";






// export default class App extends Component {
//   renderScene(route, _navigator){
//     switch(route.name){
//       case 'Login': return(
//         <Login/>
//       );
//       case 'Signup' : return(
//         <Signup/>
//       )
//     }
//   }
//   render() {
//     return(
//       <Navigator
//         initialRoute = {{name:'Login'}} 
//         renderScene = {this.renderScene} 
//         /> 
//     );
//   }
// }

function ProfileScreen({ navigation }) {
  useFocusEffect(
    React.useCallback(() => {
      alert("Screen was focused");
      // Do something when the screen is focused
      return () => {
        alert("Screen was unfocused");
        // Do something when the screen is unfocused
        // Useful for cleanup functions
      };
    }, [])
  );

  return (
    <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
      <Text>Profile Screen</Text>
      <Button
        title="Go to Settings"
        onPress={() => navigation.navigate("Settings")}
      />
    </View>
  );
}

function HomeScreen({ navigation }) {
  return (
    <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
      <Text>Home Screen</Text>
      <Button
        title="Go to Details"
        onPress={() => navigation.navigate("Details")}
      />
    </View>
  );
}

function DetailsScreen({ navigation }) {
  return (
    <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
      <Text>Details Screen</Text>
      <Button
        title="Go to Details... again"
        onPress={() => navigation.push("Details")}
      />
    </View>
  );
}
const Tab = createBottomTabNavigator();
const SettingsStack = createStackNavigator();
const HomeStack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator>
        <Tab.Screen name="Find a cabinet">
          {() => (
            <SettingsStack.Navigator>
              <SettingsStack.Screen
                name="Login"
                component={Login}
              />
              <SettingsStack.Screen
                name="Trangchu"
                component={Trangchu}
              />
              <SettingsStack.Screen
                name="FindCabinet"
                component={FindCabinet}
              />
              <SettingsStack.Screen
                name="RecipientPhonenumber"
                component={RecipientPhonenumber}
              />
              
              <SettingsStack.Screen
                name="Signup"
                component={Signup}
              />
               <SettingsStack.Screen
                name="InfromSignup"
                component={InfromSignup}
              />
              <SettingsStack.Screen
                name="InfromNhando"
                component={InfromNhando}
              />
              <SettingsStack.Screen
                name="Paymentbymomo"
                component={Paymentbymomo}
              />
              <SettingsStack.Screen
                name="OTP"
                component={OTP}
              />
              
              <SettingsStack.Screen
                name="Inform"
                component={Infrom}
              />
              
              <SettingsStack.Screen
                name="ReceiverPhoneNumber"
                component={ReceiverPhoneNumber}
                options={{ title: "Receiver Phone Number" }}
              />
              <SettingsStack.Screen 
              name="Payment" 
              component={PaymentScreen} 
              />

            </SettingsStack.Navigator>
          )}
        </Tab.Screen>
        <Tab.Screen name="History">
          {() => (
            <HomeStack.Navigator>
              <HomeStack.Screen name="Home" component={HomeScreen} />
              <HomeStack.Screen name="Details" component={DetailsScreen} />
            </HomeStack.Navigator>
          )}
        </Tab.Screen>
        <Tab.Screen name="Profile">
          {() => (
            <HomeStack.Navigator>
              <HomeStack.Screen name="Home" component={HomeScreen} />
              <HomeStack.Screen name="Details" component={DetailsScreen} />
            </HomeStack.Navigator>
          )}
        </Tab.Screen>
      </Tab.Navigator>
    </NavigationContainer>
  );
}
