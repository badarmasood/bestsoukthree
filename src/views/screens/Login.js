// React Native Card View for Android and IOS
// https://aboutreact.com/react-native-card-view/

// import React in our code
import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
// import all the components we are going to use
import {
  SafeAreaView,
  Text,
  TextInput,
  View,
  StyleSheet,
  Image,
  TouchableOpacity,
  Header,
} from "react-native";

//import Card
import { Card } from "react-native-paper";
import COLORS from "../../consts/colors";

const LoginApp = ({ navigation }) => {
  return (
    <SafeAreaView style={styles.container}>
      <View
        style={{
          borderRadius: 30,
          justifyContent: "center",
          alignItems: "center",
          marginHorizontal:10,
          backgroundColor: COLORS.primary,
        }}
      >
        <Image
          source={require("../../assets/milk.png")}
          style={{ width: 170, height: 170 }}
        />
      </View>

      <View style={{ borderRadius: 20, marginTop: 20, padding: 20 }}>
        <Text style={styles.paragraph}> E DAIRY</Text>

        <TextInput style={styles.input} placeholder="Enter Email" />
        <TextInput style={styles.input} placeholder="Enter Password" />

        <TouchableOpacity
          activeOpacity={0.8}
          onPress={() => navigation.navigate("Home")}
        >
          <View
            style={{
              ...styles.btnContainer,
              backgroundColor: COLORS.primary,
            }}
          >
            <Text style={{ ...styles.title, color: COLORS.white }}>
              L O G I N
            </Text>
          </View>
        </TouchableOpacity>
        <View style={styles.row}>
          <Text>Dont have an account? </Text>
          <TouchableOpacity onPress={() => navigation.navigate("SignUp")}>
            <Text style={styles.link}>Sign up</Text>
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default LoginApp;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 5,
    backgroundColor: "#fff",
  },

  input: {
    height: 60,
    marginVertical: 12,
    borderWidth: 2,
    borderRadius: 10,
    padding: 10,
    borderColor: COLORS.primary,
  },

  paragraph: {
    fontSize: 32,
    fontWeight: "bold",
    textAlign: "center",
    marginVertical: 20,
    color: "black",
  },
  row: {
    flexDirection: "row",
    marginTop: 10,
  },
  link: {
    fontWeight: "bold",
    color: COLORS.primary,
  },
  title: { color: COLORS.white, fontWeight: "bold", fontSize: 18 },

  btnContainer: {
    backgroundColor: COLORS.primary,
    height: 60,
    marginTop:12,
    borderRadius: 10,
    justifyContent: "center",
    alignItems: "center",
  },
});
