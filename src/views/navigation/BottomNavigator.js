import * as React from "react";
import { Text, View } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

import COLORS from "../../consts/colors";

import Ionicons from "react-native-vector-icons/Ionicons";

import Icon from "react-native-vector-icons/MaterialIcons";


import HomeScreen from "../screens/HomeScreen";
import DetailsScreen from "../screens/DetailsScreen";
import CartScreen from "../screens/CartScreen";
import SignUp from "../screens/SignUp";
import Login from "../screens/Login";
import Pressable from "react-native/Libraries/Components/Pressable/Pressable";
import AsyncStorage from "@react-native-async-storage/async-storage";

const Tab = createBottomTabNavigator();

function BottomNavigator() {
  return (
    <Tab.Navigator
      tabBarOptions={{
        style: {
          height: 55,
          borderTopWidth: 0,
          elevation: 0,
        },
        showLabel: true,
        activeTintColor: "#37b34e",
      }}
    >
      <Tab.Screen
        name="HomeScreen"
        component={HomeScreen}
        options={({ navigation }) => {
          return {
            tabBarIcon: ({ color }) => (
              <Icon name="home-filled" color={color} size={28} />
            ),
            headerRight: () => {
              return (
                <Pressable
                  onPress={async () => {
                    await AsyncStorage.removeItem("userData");
                    navigation.replace("Login");
                  }}
                >
                  <Icon name="logout"  size={28} style={{padding:10}} />
                </Pressable>
              );
            },
          };
        }}
      />
      {/*
      <Tab.Screen
        name="Search"
        component={HomeScreen}
        options={{
          tabBarIcon: ({color}) => (
            <View
              style={{
                height: 60,
                width: 60,
                justifyContent: 'center',
                alignItems: 'center',
                backgroundColor: COLORS.white,
                borderColor: COLORS.primary,
                borderWidth: 2,
                borderRadius: 30,
                top: -25,
                elevation: 5,
              }}>
              <Icon name="search" color={COLORS.primary} size={28} />
            </View>
          ),
        }}
      />
      <Tab.Screen
        name="Favorite"
        component={HomeScreen}
        options={{
          tabBarIcon: ({color}) => (
            <Icon name="favorite" color={color} size={28} />
          ),
        }}
      />
      */}
      <Tab.Screen
        name="Cart_Screen"
        component={CartScreen}
        options={{
          tabBarIcon: ({ color }) => (
            <Icon name="shopping-cart" color={color} size={28} />
          ),
        }}
      />
      <Tab.Screen
        name="Signup"
        component={SignUp}
        options={{
          tabBarIcon: ({ color }) => (
            <Icon name="shopping-cart" color={color} size={28} />
          ),
        }}
      />
      
    </Tab.Navigator>
  );
}
export default BottomNavigator;
