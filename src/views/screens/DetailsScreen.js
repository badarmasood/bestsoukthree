import React from "react";
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
  ScrollView,
  Button,
  Alert,
} from "react-native";

import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import CartScreen from "./CartScreen";

import Icon from "react-native-vector-icons/MaterialIcons";
import COLORS from "../../consts/colors";
import Milk from "../../assets/milk.png";
import Eggs from "../../assets/eggs.png";

function ProductDetails(props) {
  return (
    <SafeAreaView style={{ backgroundColor: COLORS.white }}>
      <View style={style.header}>
        <Icon
          name="arrow-back-ios"
          size={28}
          onPress={() => props.navigation.goBack()}
        />
        <Text style={{ fontSize: 20, fontWeight: "bold" }}>Details</Text>
      </View>

      <ScrollView showsVerticalScrollIndicator={false}>
        <View
          style={{
            justifyContent: "center",
            alignItems: "center",
            height: 280,
          }}
        >
          <Image source={props.image} style={{ height: 170, width: 200 }} />
        </View>

        <View style={style.details}>
          <View
            style={{
              justifyContent: "space-between",
            }}
          >
            <Text
              style={{ fontSize: 25, fontWeight: "bold", color: COLORS.white }}
            >
              {props.title}
            </Text>
            <Text
              style={{ fontSize: 16, fontWeight: "500", color: COLORS.white }}
            >
              {props.price}
            </Text>
          </View>

          <Text style={style.detailsText}>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley. orem
            Ipsum has been the industry's standard dummy text ever since the
            1500s, when an unknown printer took a galley.
          </Text>
          <View style={{ marginTop: 60, marginBottom: 60 }}>
            <TouchableOpacity
              activeOpacity={0.8}
              onPress={() => AddtoCart(props.title, props.price, props.image)}
            >
              <View
                style={{
                  ...style.btnContainer,
                  backgroundColor: COLORS.white,
                }}
              >
                <Text style={{ ...style.title, color: COLORS.primary }}>
                  Add To Cart
                </Text>
              </View>
            </TouchableOpacity>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

function AddtoCart(name, price, image) {
  var obj = { name: name, price: price, image: image };

  // console.log(obj);

  // Alert.alert('"Product Added to the Cart");"
  alert("Product added to Cart");
  cart_Array.push(obj);
  console.log(cart_Array);
}

function DetailsScreen({ route, navigation }) {
  // console.log(route.params.title);
  return (
    <View style={{ marginTop: 20 }}>
      <ProductDetails
        title={route.params.title}
        price={route.params.price}
        image={route.params.image}
        navigation={navigation}
      />
    </View>
  );
}

const style = StyleSheet.create({
  header: {
    paddingVertical: 20,
    flexDirection: "row",
    alignItems: "center",
    marginHorizontal: 20,
  },
  details: {
    paddingHorizontal: 20,
    paddingTop: 40,
    paddingBottom: 60,
    backgroundColor: COLORS.primary,
    borderTopRightRadius: 40,
    borderTopLeftRadius: 40,
  },

  detailsText: {
    marginVertical: 25,
    lineHeight: 24,
    fontSize: 16,
    color: COLORS.white,
  },
  title: { color: COLORS.white, fontWeight: "bold", fontSize: 18 },

  btnContainer: {
    backgroundColor: COLORS.primary,
    height: 60,
    borderRadius: 30,
    justifyContent: "center",
    alignItems: "center",
  },
});
export default DetailsScreen;
