import { View, Text, Image, TouchableOpacity } from "react-native";
import React from "react";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";

export default function ResturantItem() {
  return (
    <View>
      <ResturantImage />
      {/* ResturantInfo */}
    </View>
  );
}

const ResturantImage = () => (
  <>
    <Image
      source={{
        uri: "https://img.freepik.com/premium-photo/cozy-restaurant-with-people-waiter_175935-230.jpg?w=2000",
      }}
      style={{ width: "100%", height: 180 }}
    />
    <TouchableOpacity style={{ position: "absolute", right: 20, top: 20 }}>
      <MaterialCommunityIcons
        name="heart-outline"
        size={25}
        color="#ffffff"
      ></MaterialCommunityIcons>
    </TouchableOpacity>
  </>
);
