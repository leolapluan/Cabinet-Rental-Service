import * as React from "react";
import { Button, View, Text, Navigator } from "react-native";
import { NavigationContainer, useFocusEffect } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";

import FindCabinet from "./screens/CabinetRent/FindCabinet";
import PaymentScreen from "./screens/CabinetRent/PaymentScreen";
import ReceiverPhoneNumber from "./screens/CabinetRent/RegisterPhoneNumber";
import NotifyResult from "./screens/CabinetRent/NotifyResult";
import Transactions from "./screens/Transactions/Transactions";
import Unlock from "./screens/Unlock/Unlock";
import Login from "./screens/Authentification/LoginScreen";
import Signup from "./screens/Authentification/SignupScreen";
import Home from "./screens/CabinetRent/Home";
import Infrom from "./screens/CabinetRent/Inform";
import InfromSignup from "./screens/Authentification/NotifySignup";
import RegisterPhoneNumber from "./screens/CabinetRent/RegisterPhoneNumber";
import OTP from "./screens/CabinetRent/OTP";
import InfromNhando from "./screens/CabinetRent/InfromNhando";
import NotifySignup from "./screens/Authentification/NotifySignup";
import { useSelector } from "react-redux";
import Profile from "./screens/Profile/Profile";
import PaymentOption from "./screens/CabinetRent/PaymentOption";

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

export default function App() {
  const LoginStack = createStackNavigator();
  const Tab = createBottomTabNavigator();
  const AppStack = createStackNavigator();
  const SettingsStack = createStackNavigator();
  const TransactionsStack = createStackNavigator();
  const UnlockStack = createStackNavigator();
  const ProfileStack = createStackNavigator();
  let isSignedIn = useSelector((state) => state.isSignedIn);
  console.log(isSignedIn);
  return (
    <NavigationContainer>
      {!isSignedIn ? (
        <>
          <LoginStack.Navigator>
            <LoginStack.Screen name="Login" component={Login} />
            <LoginStack.Screen name="Signup" component={Signup} />
            <LoginStack.Screen name="NotifySignup" component={NotifySignup} />
          </LoginStack.Navigator>
        </>
      ) : (
        <>
          <Tab.Navigator
            tabBarOptions={{
              activeTintColor: "tomato",
              inactiveTintColor: "gray",
            }}
          >
            <Tab.Screen
              name="Find a cabinet"
              options={{
                tabBarLabel: "Find a cabinet",
                tabBarIcon: ({ color }) => (
                  <MaterialCommunityIcons
                    name="file-cabinet"
                    color={color}
                    size={26}
                  />
                ),
              }}
            >
              {() => (
                <SettingsStack.Navigator>
                  <SettingsStack.Screen name="Home" component={Home} />
                  <SettingsStack.Screen
                    name="FindCabinet"
                    component={FindCabinet}
                  />
                  <SettingsStack.Screen
                    name="RegisterPhoneNumber"
                    component={RegisterPhoneNumber}
                  />
                  <SettingsStack.Screen
                    name="InfromSignup"
                    component={InfromSignup}
                  />
                  <SettingsStack.Screen
                    name="InfromNhando"
                    component={InfromNhando}
                  />
                  <SettingsStack.Screen name="OTP" component={OTP} />
                  <SettingsStack.Screen name="Inform" component={Infrom} />
                  <SettingsStack.Screen
                    name="ReceiverPhoneNumber"
                    component={ReceiverPhoneNumber}
                    options={{ title: "Receiver Phone Number" }}
                  />
                  <SettingsStack.Screen
                    name="PaymentMethod"
                    component={PaymentOption}
                  />
                  <SettingsStack.Screen
                    name="Payment"
                    component={PaymentScreen}
                  />
                  <SettingsStack.Screen
                    name="NotifyResult"
                    component={NotifyResult}
                  />
                </SettingsStack.Navigator>
              )}
            </Tab.Screen>
            <Tab.Screen
              name="UnlockCabinet"
              options={{
                tabBarLabel: "Unlock Cabinet",
                tabBarIcon: ({ color }) => (
                  <MaterialCommunityIcons
                    name="lock-open-variant-outline"
                    color={color}
                    size={26}
                  />
                ),
              }}
            >
              {() => (
                <UnlockStack.Navigator>
                  <UnlockStack.Screen name="Unlock" component={Unlock} />
                </UnlockStack.Navigator>
              )}
            </Tab.Screen>
            <Tab.Screen
              name="Transactions"
              options={{
                tabBarLabel: "Transactions",
                tabBarIcon: ({ color }) => (
                  <MaterialCommunityIcons
                    name="file-document-outline"
                    color={color}
                    size={26}
                  />
                ),
              }}
            >
              {() => (
                <TransactionsStack.Navigator>
                  <TransactionsStack.Screen
                    name="Transactions"
                    component={Transactions}
                  />
                </TransactionsStack.Navigator>
              )}
            </Tab.Screen>
            <Tab.Screen
              name="Profile"
              options={{
                tabBarLabel: "Profile",
                tabBarIcon: ({ color }) => (
                  <MaterialCommunityIcons
                    name="human-male"
                    color={color}
                    size={26}
                  />
                ),
              }}
            >
              {() => (
                <ProfileStack.Navigator>
                  <ProfileStack.Screen name="Profile" component={Profile} />
                </ProfileStack.Navigator>
              )}
            </Tab.Screen>
          </Tab.Navigator>
        </>
      )}
    </NavigationContainer>
  );
}
