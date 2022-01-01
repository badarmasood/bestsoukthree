import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
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

const Signup = ({ navigation }) => {
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
      <Card style={{ borderRadius: 20, marginTop: 30 }}>
        <Text style={styles.paragraph}> Register Now</Text>
        <TextInput
          style={styles.texInput2}
          placeholder="Enter Email"
          placeholderTextColor="black"
        />
        <TextInput
          style={styles.texInput2}
          placeholder="Enter Name"
          placeholderTextColor="black"
        />
        <TextInput
          style={styles.texInput2}
          placeholder="Enter Password"
          placeholderTextColor="black"
        />
        
        <TextInput
          style={styles.texInput2}
          placeholder="Enter Gender"
          placeholderTextColor="black"
        />
      </Card>
      <TouchableOpacity
        style={styles.button}
        onPress={() => navigation.navigate('LoginScreen')}>
        <Text style={{ color: 'black', fontWeight: 'bold', fontSize: 18 }}>
          Sign Up{' '}
        </Text>
      </TouchableOpacity>

      <TouchableOpacity>
        <Text
          style={{
            color: 'white',
            fontWeight: 'bold',
            fontSize: 18,
            textAlign: 'center',
          }}>
          Already Registered{' '}
        </Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
};

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
    margin: 10,
  },
  texInput2: {
    borderWidth: 1,
    borderRadius: 25,
    color: 'black',
    margin: 10,
    padding:10,
  },
  paragraph: {
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
    padding: 8,
    color: 'black',
    fontStyle: 'italic',
  },
  button: {
    marginTop: 30,
    alignItems: 'center',
    backgroundColor: '#DDDDDD',
    padding: 10,
    marginBottom: 10,
  },
});

export default Signup;
