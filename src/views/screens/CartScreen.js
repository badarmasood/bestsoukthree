import React from 'react';
import {
  Dimensions,
  Image,
  SafeAreaView,
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity,
  TouchableHighlight,
  FlatList,
  Button,
} from 'react-native';

import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import Icon from 'react-native-vector-icons/MaterialIcons';
import COLORS from '../../consts/colors';
import Milk from '../../assets/milk.png';
import Eggs from '../../assets/eggs.png';

function CartCard() {
  return (<View style={style.cartCard}>
        <Image source={Milk} style={{height: 80, width: 80}} />
        <View
          style={{
            height: 100,
            marginLeft: 10,
            paddingVertical: 20,
            flex: 1,
          }}>
          <Text style={{fontWeight: 'bold', fontSize: 20}}>Milk</Text>
          <Text style={{fontSize: 16,fontWeight: 'bold', color: "black",marginTop:15}}>
            15$
          </Text>
          
        </View>
        <View style={{marginRight: 20, alignItems: 'center'}}>
          <Text style={{fontWeight: 'bold', fontSize: 18,marginVertical:5}}>3</Text>

          <TouchableOpacity>
          <View style={style.actionBtn}>
            <Icon name="delete" size={25} color={COLORS.white} />
          </View>

          </TouchableOpacity>
        </View>
      </View>
  )
}

function CartScreen() {
  return (
    <View>
      <CartCard />
    </View>
  );
}

const style = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
    cartCard: {
    height: 100,
    elevation: 15,
    borderRadius: 10,
    backgroundColor: COLORS.white,
    marginVertical: 10,
    marginHorizontal: 20,
    paddingHorizontal: 10,
    flexDirection: 'row',
    alignItems: 'center',
  },
   actionBtn: {
    width: 60,
    height: 30,
    
    backgroundColor: COLORS.primary,
    borderRadius: 30,
    paddingHorizontal: 5,
    flexDirection: 'row',
    justifyContent: 'center',
    alignContent: 'center',
  },

  
});

export default CartScreen;
