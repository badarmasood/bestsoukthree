import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import {
  SafeAreaView,
  Text,
  TextInput,
  View,
  StyleSheet,
  Image,
  TouchableOpacity,
} from "react-native";

//import Card
import { Card } from "react-native-paper";
import COLORS from "../../consts/colors";

const Signup = ({ navigation }) => {
  return (
    <SafeAreaView style={styles.container}>
      <Card
        style={{
          borderRadius: 30,
          justifyContent: "center",
          alignItems: "center",
          backgroundColor: COLORS.primary,
        }}
      >
        <Image
          source={require("../../assets/milk.png")}
          style={{ width: 170, height: 170 }}
        />
      </Card>

      <View style={{ borderRadius: 20, marginTop: 20, padding: 20 }}>
        <Text style={styles.paragraph}> Sign Up</Text>

        <TextInput style={styles.input} placeholder="Name" />
        <TextInput style={styles.input} placeholder="Email" />
        <TextInput style={styles.input} placeholder="Password" />

        <TouchableOpacity activeOpacity={0.8}>
          <View
            style={{
              ...styles.btnContainer,
              backgroundColor: COLORS.primary,
            }}
          >
            <Text style={{ ...styles.title, color: COLORS.white }}>
              SIGN UP
            </Text>
          </View>
        </TouchableOpacity>

        <View style={styles.row}>
          <Text>Already have an account? </Text>
          <TouchableOpacity onPress={() => navigation.navigate("Login")}>
            <Text style={styles.link}>Login</Text>
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  );
};

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
    fontSize: 24,
    fontWeight: "bold",
    textAlign: "center",
    marginVertical: 20,
    color: "black",
  },
  row: {
    flexDirection: "row",
    marginTop: 10,
    justifyContent: "center",
  },
  link: {
    fontWeight: "bold",
    color: COLORS.primary,
  },
  title: { color: COLORS.white, fontWeight: "bold", fontSize: 18 },

  btnContainer: {
    backgroundColor: COLORS.primary,
    height: 60,
    borderRadius: 10,
    marginTop:12,
    justifyContent: "center",
    alignItems: "center",
  },
});

export default Signup;
