import * as React from "react";
import { StatusBar } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { Text, View } from "react-native";
import COLORS from "./src/consts/colors.js";
import DetailsScreen from "./src/views/screens/DetailsScreen.js";

import BottomNavigator from "./src/views/navigation/BottomNavigator";
import HomeScreen from "./src/views/screens/HomeScreen.js";

const Stack = createNativeStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={BottomNavigator} />
        <Stack.Screen name="DetailScreen" component={DetailsScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
