import React, { useEffect, useState } from "react";
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
  Touchable,
  ScrollView,
} from "react-native";

import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import DetailsScreen from "./DetailsScreen";

import Icon from "react-native-vector-icons/MaterialIcons";
import COLORS from "../../consts/colors";

import Milk from "../../assets/milk.png";
import Eggs from "../../assets/eggs.png";
import Yogurt from "../../assets/yogurt.png";
import Ghee from "../../assets/Ghee.png";

import ImageCard1 from "../../assets/card1.jpg";
import ImageCard2 from "../../assets/card2.jpg";
import ImageCard3 from "../../assets/card3.jpg";
import ImageCard4 from "../../assets/card4.jpg";

import fireDb from "../component/Firebase-config";

function Cards(props) {
  return <Image source={props.ImageCard} style={style.cardImage} />;
}

function Header() {
  {
    /*<View style={style.cardScroll}>
      <Image
        source={require("../../assets/card1.jpg")}
        style={{ padding: 10, width: 140, height: 150, resizeMode: "cover" }}
      />
    </View>
  */
  }
  return (
    <View style={{ backgroundColor: COLORS.white }}>
      <View style={style.header}>
        <View>
          <View style={{ flexDirection: "row", marginTop: 5 }}>
            <Text style={{ fontSize: 24 }}>Hello,</Text>
            <Text
              style={{
                fontSize: 24,
                fontWeight: "bold",
                marginLeft: 10,
                marginBottom: 10,
              }}
            >
              Badar
            </Text>
          </View>
          {/*<Text style={{ marginTop: 5, fontSize: 22, color: COLORS.grey }}>
            What do you want today
          </Text>
          */}
        </View>
      </View>

      <View
        style={{
          flexDirection: "row",
          padding: 5,
          marginTop: 0,
          marginBottom: 0,
          backgroundColor: "#e7f6f1",
        }}
      >
        <ScrollView
          horizontal={true}
          showsHorizontalScrollIndicator={false}
          style={{}}
        >
          <Cards ImageCard={ImageCard1} />
          <Cards ImageCard={ImageCard2} />
          <Cards ImageCard={ImageCard3} />
          <Cards ImageCard={ImageCard4} />
        </ScrollView>
      </View>

      {/*<View
        style={{
          marginTop: 10,
          flexDirection: "row",
          paddingHorizontal: 20,
        }}
      >
        <View style={style.inputContainer}>
          <Icon name="search" size={28} />
          <TextInput
            style={{ flex: 1, fontSize: 18 }}
            placeholder="Search for food"
          />
        </View>
        <View style={style.sortBtn}>
          <Icon name="tune" size={28} color={COLORS.white}/>
        </View>
      </View>*/}
    </View>
  );
}

{
  /*My Products Section*/
}

const MyProducts = (prop, { navigation }) => {
  return (
    <TouchableOpacity style={style.card} onPress={prop.click}>
      <View style={{ alignItems: "center", top: -60 }}>
        <Image source={prop.product} style={{ height: 120, width: 150 }} />

        <View style={{ marginHorizontal: 20, alignItems: "center" }}>
          <Text style={{ fontSize: 18, fontWeight: "bold" }}>
            {prop.tittle}
          </Text>
          <Text style={{ fontSize: 14, color: COLORS.grey, marginTop: 2 }}>
            {prop.quantity}
          </Text>
        </View>

        <View
          style={{
            marginTop: 5,
            marginHorizontal: 20,
            flexDirection: "row",
            justifyContent: "space-between",
          }}
        >
          <Text style={{ fontSize: 18, fontWeight: "bold", marginRight: 50 }}>
            {prop.price}
          </Text>
          <TouchableOpacity style={style.addToCartBtn}>
            <Icon name="add" size={20} color={COLORS.white} />
          </TouchableOpacity>
        </View>
      </View>
    </TouchableOpacity>
  );
};

function HomeScreen({ navigation }) {
  // Firebase

  const [data, setData] = useState({});
  useEffect(() => {
    fireDb.child("products").on("value", (snapshot) => {
      if (snapshot.val() !== null) {
        setData({ ...snapshot.val() });
      } else {
        setData({});
      }
    });
    return () => {
      setData({});
    };
  }, []);

  return (
    <View style={style.container}>
      <Header />

      <ScrollView
        contentContainerStyle={{
          flexDirection: "row",
          flexWrap: "wrap",
          paddingHorizontal: 10,
          marginTop: -10,
          paddingBottom: 10,
        }}
      >
        {Object.keys(data).map((id, index) => {
          const myproduct = "../../assets/" + data[id].title + ".png";

          return (
            <View style={{ width: "50%", flexDirection: "row" }}>
              <MyProducts
                product={Milk}
                tittle={data[id].title}
                quantity={data[id].Quantity + data[id].Unit}
                price={data[id].Price}
                click={() => {
                  navigation.navigate("DetailScreen", {
                    title: data[id].title,
                    price: data[id].Price,
                    image: Eggs,
                  });
                }}
              />
            </View>
          );
        })}

        {/*
          <MyProducts
            product={Eggs}
            tittle="Eggs"
            quantity="1 Dozen"
            price='10$'
            click={() => {
              navigation.navigate("DetailScreen", { title: "Eggs", image: Eggs });
            }}
          />
        </View>
        <View style={{ flexDirection: "row" }}>
          <MyProducts
            product={yogurt}
            tittle="Yogurt"
            quantity="1 kg"
            price='15$'
            click={() => {
              navigation.navigate("DetailScreen", { title: "Yogurt",image: yogurt });
            }}
          />
          <MyProducts
            product={Ghee}
            tittle="Desi Ghee"
            quantity="1 kg"
            price='30$'
            click={() => {
              navigation.navigate("DetailScreen", { title: "Ghee",image: Ghee });
            }}
          />
          */}
      </ScrollView>
    </View>
  );
}

const style = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 5,
    backgroundColor: "#e7f6f1",
  },
  header: {
    marginTop: 0,
    flexDirection: "row",
    justifyContent: "space-between",
    paddingHorizontal: 20,
    backgroundColor: "#e7f6f1",
  },
  cardImage: {
    padding: 10,
    height: 150,
    resizeMode: "cover",
    width: 300,
    borderRadius: 15,
    // backgroundColor: "white",
    //backgroundColor: COLORS.primary,
    marginHorizontal: 8,
    marginVertical: 0,

    overflow: "hidden",
    //Properties to setup your Shadow

    shadowOffset: { width: 10, height: 10 },
    shadowColor: "#000",
    shadowOpacity: 1,
  },
  inputContainer: {
    flex: 1,
    height: 50,
    borderRadius: 10,
    flexDirection: "row",
    backgroundColor: COLORS.light,
    alignItems: "center",
    paddingHorizontal: 20,
  },
  sortBtn: {
    width: 50,
    height: 50,
    marginLeft: 10,
    backgroundColor: COLORS.primary,
    borderRadius: 10,
    justifyContent: "center",
    alignItems: "center",
  },
  card: {
    height: 150,
    width: 160,
    marginHorizontal: 10,
    marginBottom: 20,
    marginTop: 90,
    borderRadius: 10,
    elevation: 10,
    backgroundColor: COLORS.white,
  },
  addToCartBtn: {
    height: 30,
    width: 30,
    borderRadius: 20,
    marginLeft: 10,
    backgroundColor: COLORS.primary,
    justifyContent: "center",
    alignItems: "center",
  },
});

export default HomeScreen;
