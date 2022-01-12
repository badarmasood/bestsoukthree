import * as React from "react";
import { StatusBar } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { Text, View } from "react-native";
import COLORS from "./src/consts/colors.js";

import DetailsScreen from "./src/views/screens/DetailsScreen.js";

import BottomNavigator from "./src/views/navigation/BottomNavigator";
import HomeScreen from "./src/views/screens/HomeScreen.js";

import Signup from "./src/views/screens/SignUp.js";
import LoginApp from "./src/views/screens/Login.js";

const Stack = createNativeStackNavigator();

// var cart_Array = [{}];
// var x = 10;

global.cart_Array = [];

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerShown: false,
        }}
      >
        <Stack.Screen name="Login" component={LoginApp} />
        <Stack.Screen name="SignUp" component={Signup} />
        <Stack.Screen name="Home" component={BottomNavigator} />
        <Stack.Screen name="DetailScreen" component={DetailsScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
