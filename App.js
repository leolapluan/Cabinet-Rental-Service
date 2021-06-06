import * as React from "react";
import { Button, View, Text } from "react-native";
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
                name="Signup"
                component={Signup}
              />
              <SettingsStack.Screen
                name="Trang chủ "
                component={Trangchu}
              />
              
              <SettingsStack.Screen
                name="Payment by momo"
                component={Paymentbymomo}
              />
              
              
              <SettingsStack.Screen
                name="Inform"
                component={Infrom}
              />
              
              <SettingsStack.Screen
                name="Choose cabinet size"
                component={FindCabinet}
              />
              <SettingsStack.Screen
                name="ReceiverPhoneNumber"
                component={ReceiverPhoneNumber}
                options={{ title: "Receiver Phone Number" }}
              />
              <SettingsStack.Screen name="Payment" component={PaymentScreen} />
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
