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
import axios from "axios";
import { database_key, project_key } from "../../consts/keys";
import AsyncStorage from "@react-native-async-storage/async-storage";

const LoginApp = ({ route, navigation }) => {
  const [email, setEmail] = React.useState();
  const [password, setPassword] = React.useState();

  React.useEffect(async () => {
    const dataExist = await AsyncStorage.getItem("userData");
    if (dataExist) {
      navigation.replace("Home");
    }
  }, []);
  return (
    <SafeAreaView style={styles.container}>
      <View style={{ marginTop: 80, marginBottom: -20, alignItems: "center" }}>
        <Image
          source={require("../../assets/Edairy.png")}
          style={{ width: 200, height: 200 }}
        />
      </View>

      <View style={{ borderRadius: 20, marginTop: 20, padding: 20 }}>
        <Text style={styles.paragraph}>Login to your account</Text>

        <TextInput
          style={styles.input}
          placeholder="Enter Email"
          onChangeText={(val) => {
            setEmail(val);
          }}
          value={email}
        />
        <TextInput
          style={styles.input}
          placeholder="Enter Password"
          onChangeText={(val) => {
            setPassword(val);
          }}
          value={password}
          secureTextEntry
        />

        <TouchableOpacity
          activeOpacity={0.8}
          onPress={() => {
            navigation.replace("FirstScreen");
          }}
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
    fontSize: 16,
    fontWeight: "bold",
    marginVertical: 10,
    color: COLORS.primary,
    marginLeft: 5,
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
    marginTop: 12,
    borderRadius: 10,
    justifyContent: "center",
    alignItems: "center",
  },
});
