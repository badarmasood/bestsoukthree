import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { database_key, project_key } from "../../consts/keys";
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
import axios from "axios";
import AsyncStorage from "@react-native-async-storage/async-storage";

const Signup = ({ navigation }) => {
  const [name, setName] = React.useState();
  const [email, setEmail] = React.useState();
  const [password, setPassword] = React.useState();
  return (
    <SafeAreaView style={styles.container}>
      <View style={{marginTop:60, alignItems:"center"}}>
      <Image
          source={require("../../assets/Edairy.png")}
          style={{ width: 200, height: 200 }}
        />
      </View>

      <View style={{ borderRadius: 20, marginTop: 0, padding: 20 }}>
        <Text style={styles.paragraph}> SIGN UP</Text>
        <TextInput
          style={styles.input}
          placeholder="Name"
          onChangeText={(value) => {
            setName(value);
          }}
          value={name}
        />
        <TextInput
          style={styles.input}
          placeholder="Email"
          onChangeText={(value) => {
            setEmail(value);
          }}
          value={email}
        />
        <TextInput
          style={styles.input}
          placeholder="Password"
          secureTextEntry
          onChangeText={(value) => {
            setPassword(value);
          }}
          value={password}
        />

        <TouchableOpacity
          activeOpacity={0.8}
          onPress={async () => {
            const response = await axios.post(
              `https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=${project_key}`,
              {
                email: email,
                password: password,
                returnSecureToken: true,
              }
            );

            const parsedData = response.data;
            const localId = parsedData.localId;

            await axios.post(`${database_key}users/${localId}.json`, {
              name: name,
              email: email,
            });

            await AsyncStorage.setItem(
              "userData",
              JSON.stringify({
                name: name,
                localId: localId,
              })
            );

            navigation.replace("Home");
          }}
        >
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
          <TouchableOpacity onPress={() => navigation.navigate("Home")}>
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
    marginTop: 0,
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
    fontSize:30,
    fontWeight: "600",
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
    marginTop: 12,
    justifyContent: "center",
    alignItems: "center",
  },
});

export default Signup;
