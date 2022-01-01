// React Native Card View for Android and IOS
// https://aboutreact.com/react-native-card-view/

// import React in our code
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
// import all the components we are going to use
import {
  SafeAreaView,
  Text,
  TextInput,
  View,
  StyleSheet,
  Image,
  TouchableOpacity,
} from 'react-native';

//import Card
import { Card } from 'react-native-paper';

const LoginApp = ({ navigation }) => {
  return (
    <SafeAreaView style={styles.container}>
      <Card
        style={{
          borderRadius: 100,
          justifyContent: 'center',
          alignItems: 'center',
        }}>
        <Image
          source={require('../../assets/milk.png')}
          style={{ width: 170, height: 170 }}
        />
      </Card>
      <Card style={{ borderRadius: 20, marginTop: 20 , padding:20}}>
        <Text style={styles.paragraph}> Login</Text>
        <TextInput
          style={styles.texInput2}
          placeholder="Enter Email"
          placeholderTextColor="black"
        />
       
        <TextInput
          style={styles.texInput2}
          placeholder="Enter Password"
          placeholderTextColor="black"
        />


      </Card>

      <TouchableOpacity
        style={styles.button}
        onPress={() => navigation.navigate('MyHome')}>
        <Text style={{ color: 'black', fontWeight: 'bold', fontSize: 18 }}>
          {' '}
          LOG IN{' '}
        </Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
};

export default LoginApp;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
    backgroundColor: '#007500',
  },

  tex: {
    fontSize: 16,
    fontWeight: 'bold',
    color: 'black',
    padding: 5,
  },
  texInput: {
    borderWidth: 1,
    borderRadius: 25,
    color: 'black',
    padding: 5,
  },
  texInput2: {
    borderWidth: 2,
    borderRadius: 25,
    marginTop: 20,
    marginBottom: 20,
    color: 'black',
    padding: 10,
  },
  paragraph: {
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
    padding: 20,
    color: 'black',
  },
  button: {
    marginTop: 30,
    alignItems: 'center',
    backgroundColor: '#DDDDDD',
    padding: 10,
    marginBottom: 10,
  },
});
