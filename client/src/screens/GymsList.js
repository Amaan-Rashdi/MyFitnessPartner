/** @format */

import React, { useState } from "react";
import {
  FlatList,
  SafeAreaView,
  StatusBar,
  StyleSheet,
  Text,
  Image,
  Button,
  View,
  TouchableOpacity,
} from "react-native";

import Icon from "react-native-vector-icons/MaterialCommunityIcons";
import { useSelector } from "react-redux";
import gymicon from "../../assets/gymicon.png";
// import HeadingText from "../components/HeadingText";

const DATA = [
  {
    id: 1,
    gymName: "Flex Gym",
    gymAdress: "DHA PHASE 2",
    gymNumber: "+21-111-6573214",
    emailAddress: "flexgym@gym.com",
    monthlyFee: 6890,
    registrationFee: 8000,
    website: "wwww.flexgym.com",
    timings: "5:00 PM - 12:00 AM",
  },
  {
    id: 2,
    gymName: "Flex Gym",
    gymAdress: "DHA PHASE 2",
    gymNumber: "+21-111-6573214",
    emailAddress: "flexgym@gym.com",
    monthlyFee: 6890,
    registrationFee: 8000,
    website: "wwww.flexgym.com",
    timings: "5:00 PM - 12:00 AM",
  },
  {
    id: 3,
    gymName: "Flex Gym",
    gymAdress: "DHA PHASE 2",
    gymNumber: "+21-111-6573214",
    emailAddress: "flexgym@gym.com",
    monthlyFee: 6890,
    registrationFee: 8000,
    website: "wwww.flexgym.com",
    timings: "5:00 PM - 12:00 AM",
  },
  {
    id: 4,
    gymName: "Flex Gym",
    gymAdress: "DHA PHASE 2",
    gymNumber: "+21-111-6573214",
    emailAddress: "flexgym@gym.com",
    monthlyFee: 6890,
    registrationFee: 8000,
    website: "wwww.flexgym.com",
    timings: "5:00 PM - 12:00 AM",
  },
  {
    id: 5,
    gymName: "Flex Gym",
    gymAdress: "DHA PHASE 2",
    gymNumber: "+21-111-6573214",
    emailAddress: "flexgym@gym.com",
    monthlyFee: 6890,
    registrationFee: 8000,
    website: "wwww.flexgym.com",
    timings: "5:00 PM - 12:00 AM",
  },
  {
    id: 6,
    gymName: "Flex Gym",
    gymAdress: "DHA PHASE 2",
    gymNumber: "+21-111-6573214",
    emailAddress: "flexgym@gym.com",
    monthlyFee: 6890,
    registrationFee: 8000,
    website: "wwww.flexgym.com",
    timings: "5:00 PM - 12:00 AM",
  },
  {
    id: 7,
    gymName: "Flex Gym",
    gymAdress: "DHA PHASE 2",
    gymNumber: "+21-111-6573214",
    emailAddress: "flexgym@gym.com",
    monthlyFee: 6890,
    registrationFee: 8000,
    website: "wwww.flexgym.com",
    timings: "5:00 PM - 12:00 AM",
  },
  {
    id: 8,
    gymName: "Flex Gym",
    gymAdress: "DHA PHASE 2",
    gymNumber: "+21-111-6573214",
    emailAddress: "flexgym@gym.com",
    monthlyFee: 6890,
    registrationFee: 8000,
    website: "wwww.flexgym.com",
    timings: "5:00 PM - 12:00 AM",
  },
  {
    id: 9,
    gymName: "Flex Gym",
    gymAdress: "DHA PHASE 2",
    gymNumber: "+21-111-6573214",
    emailAddress: "flexgym@gym.com",
    monthlyFee: 6890,
    registrationFee: 8000,
    website: "wwww.flexgym.com",
    timings: "5:00 PM - 12:00 AM",
  },
  {
    id: 10,
    gymName: "Flex Gym",
    gymAdress: "DHA PHASE 2",
    gymNumber: "+21-111-6573214",
    emailAddress: "flexgym@gym.com",
    monthlyFee: 6890,
    registrationFee: 8000,
    website: "wwww.flexgym.com",
    timings: "5:00 PM - 12:00 AM",
  },
  {
    id: 11,
    gymName: "Flex Gym",
    gymAdress: "DHA PHASE 2",
    gymNumber: "+21-111-6573214",
    emailAddress: "flexgym@gym.com",
    monthlyFee: 6890,
    registrationFee: 8000,
    website: "wwww.flexgym.com",
    timings: "5:00 PM - 12:00 AM",
  },
  {
    id: 12,
    gymName: "Flex Gym",
    gymAdress: "DHA PHASE 2",
    gymNumber: "+21-111-6573214",
    emailAddress: "flexgym@gym.com",
    monthlyFee: 6890,
    registrationFee: 8000,
    website: "wwww.flexgym.com",
    timings: "5:00 PM - 12:00 AM",
  },
  {
    id: 13,
    gymName: "Flex Gym",
    gymNumber: "+21-111-6573214",
    gymAdress: "DHA PHASE 2",
    emailAddress: "flexgym@gym.com",
    monthlyFee: 6890,
    registrationFee: 8000,
    website: "wwww.flexgym.com",
    timings: "5:00 PM - 12:00 AM",
  },
  {
    id: 14,
    gymName: "Flex Gym",
    gymNumber: "+21-111-6573214",
    gymAdress: "DHA PHASE 2",
    emailAddress: "flexgym@gym.com",
    monthlyFee: 6890,
    registrationFee: 8000,
    website: "wwww.flexgym.com",
    timings: "5:00 PM - 12:00 AM",
  },
];

const Item = ({ item, onPress, backgroundColor, textColor, navigation }) => (
  <TouchableOpacity
    onPress={onPress}
    style={[styles.container, backgroundColor]}
  >
    <View style={styles.HeaderLeftImageView}>
      <Image style={styles.HeaderLeftImage} source={gymicon} size={80} />
    </View>
    <View style={{ flexDirection: "row", marginLeft: 10 }}>
      <View>
        <Text style={[styles.title, textColor]}>{item.gymname}</Text>
        <View style={{ padding: 2 }}></View>
        <Text style={[styles.annoucementText, , textColor]}>
          <Icon name="map-marker-radius" color="#777777" size={20} />
          {"  "}
          {item.address || "Karachi"}
        </Text>
      </View>
    </View>
  </TouchableOpacity>
);

const GymsList = ({ navigation }) => {
  const [selectedId, setSelectedId] = useState(null);
  const { gyms } = useSelector((store) => store.trainer);
  //   console.log("gyms");
  //   console.log(gyms);

  const renderItem = ({ item }) => {
    // const backgroundColor = item.id === selectedId ? "#9932cc" : "fff";
    // const color = item.id === selectedId ? "white" : "#9932cc";

    return (
      <Item
        item={item}
        onPress={() =>
          
          navigation.navigate("GymProfile", {
            name: item.gymname || "Unique Gym",
            gymName: item.gymname || "N/A",
            gymNumber: item.contact || "N/A",
            gymAdress: item.address || "N/A",
            registrationFee: item.registrationfee || "N/A",
            timings: (item.starttiming || "N/A") + ("-") + (item.endtiming || "N/A"),
            monthlyFee: item.monthlyfee || "N/A",
            emailAddress: item.email || "N/A",
            website: item.website || "N/A",
          })
        }
        navigation
        // backgroundColor={{ backgroundColor }}
        // textColor={{ color }}
      />
    );
  };

  return (
    <SafeAreaView style={styles.container}>
      <FlatList
        data={gyms}
        renderItem={renderItem}
        keyExtractor={(item) => item.gymid}
        extraData={selectedId}
      />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: StatusBar.currentHeight / 2 || 10,
    width: "100%",
    height: "100%",
    flexDirection: "row",
    backgroundColor: "#fff",
  },
  item: {
    padding: 15,
    marginVertical: 5,
    marginHorizontal: 18,
  },
  title: {
    color: "#9932cc",
    fontSize: 23,
  },
  annoucementText: {
    fontSize: 17,
    color: "black",
  },
  HeaderLeftImage: {
    width: "100%",
    height: "100%",
    borderRadius: 50,
  },
  HeaderLeftImageView: {
    marginVertical: 5,
    marginBottom: 15,
    marginHorizontal: 18,
    width: 40,
    height: 40,
    borderRadius: 40 / 2,
    marginLeft: 15,
  },
});

export default GymsList;
