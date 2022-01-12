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
      <View style={{ marginTop: 60, alignItems: "center" }}>
        <Image
          source={require("../../assets/Edairy.png")}
          style={{ width: 200, height: 200 }}
        />
      </View>

      <View style={{ borderRadius: 20, marginTop: 0, padding: 20 }}>
        <Text style={styles.paragraph}> LOG IN</Text>

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
          onPress={async () => {
            const response = await axios.post(
              `https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=${project_key}`,
              { email: email, password: password, returnSecureToken: true }
            );

            const parsedData = response.data;
            const localId = parsedData.localId;

            const userData = await axios.get(
              `${database_key}users/${localId}.json`
            );
            const parsedUserData = userData.data;

            console.log(userData.data);

            var userName = "";

            for (var key in parsedUserData) {
              // console.log(userData[key]);
              userName = parsedUserData[key].name;
            }

            await AsyncStorage.setItem(
              "userData",
              JSON.stringify({
                name: userName,
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
    fontSize: 30,
    fontWeight: "600",
    textAlign: "center",
    marginVertical: 15,
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
    marginTop: 12,
    borderRadius: 10,
    justifyContent: "center",
    alignItems: "center",
  },
});
