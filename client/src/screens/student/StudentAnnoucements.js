/** @format */

import React, { useEffect, useState } from "react";
import {
  FlatList,
  SafeAreaView,
  StatusBar,
  StyleSheet,
  Text,
  Image,
  View,
  Alert,
  TouchableOpacity,
  Platform,
} from "react-native";
import { useSelector } from "react-redux";

import avatar from "../../../assets/avatar.png";
import { getAnnouncementsByTrainerIdApi } from "../../redux/anouncements/announcements.api";

const notification = [
  {
    id: 1,
    name: "Trainer",
    annoucementText: "Fee Reminder",
    type: "fee",
  },
  {
    id: 2,
    name: "Trainer",
    annoucementText: "Cardio Task 4 sets ",
    type: "exersice",
  },
  {
    id: 3,
    name: "Trainer",
    annoucementText: " Biceps 3 sets",
    type: "exersice",
  },
];
const createTwoButtonAlert = () =>
  Alert.alert("Fee Status", "Please confirm wether you have paid fees or not", [
    {
      text: "Ask me later",
      onPress: () => console.log("Ask me later pressed"),
    },
    {
      text: "UnPaid",
      onPress: () => console.log("Cancel Pressed"),
      style: "cancel",
    },
    { text: "Paid", onPress: () => console.log("OK Pressed") },
  ]);

const Item = ({ item, onPress, backgroundColor, textColor }) => (
  <TouchableOpacity
    onPress={onPress}
    style={[styles.container, backgroundColor]}
  >
    <View style={styles.HeaderLeftImageView}>
      <Image style={styles.HeaderLeftImage} source={avatar} size={80} />
    </View>
    <View style={{ flexDirection: "row", marginLeft: 10 }}>
      <View>
        <Text style={[styles.title, textColor]}>{item.name}</Text>
        <View style={{ padding: 2 }}></View>
        <Text style={[styles.annoucementText, , textColor]}>
          {item.announcementtext}
        </Text>
      </View>
    </View>
  </TouchableOpacity>
);

const StudentAnnouncements = (props) => {
  const [announcements, setAnnouncements] = useState([]);

  const { currentUser } = useSelector((store) => store.user);
  useEffect(() => {
    fetchAnnouncements();
  }, []);

  const fetchAnnouncements = async () => {
    try {
      const { data } = await getAnnouncementsByTrainerIdApi(
        currentUser.trainerid
      );
      let Announcements = data.data;
      let arr = [];

      Announcements.map((item) => {
        if ("Fee Reminder" === item.announcementtext) {
          arr.push({
            ...item,
            type: "fee",
          });
        } else {
          arr.push({
            ...item,
            type: "exersice",
          });
        }
      });

      setAnnouncements(arr);
    } catch (error) {
      console.log("Error in Trainer Announcements");
      console.log(error);
    }
  };
  const [selectedId, setSelectedId] = useState(null);
  // console.log(selectedId);
  const renderItem = ({ item }) => {
    return (
      <Item
        item={item}
        onPress={() => {
          item.type == "exersice"
            ? props.navigation.navigate("UploadVid")
            : createTwoButtonAlert();
        }}
      />
    );
  };

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <View style={styles.header}>
        <Text style={styles.text_header}>
          Latest notifications from your trainer
        </Text>
      </View>
      <View style={styles.container}>
        <FlatList
          data={announcements}
          renderItem={renderItem}
          keyExtractor={(item) => item.id}
          extraData={selectedId}
        />
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: StatusBar.currentHeight / 5 || 14,
    width: "100%",
    height: "100%",
    flexDirection: "row",
    backgroundColor: "#fff",
    margin: 5,
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
  fab: {
    position: "absolute",
    bottom: 10,
    right: 10,
    width: "12%",
    backgroundColor: "#9932cc",
    alignItems: "center",
  },
  header: {
    justifyContent: "flex-end",
    paddingHorizontal: 20,
    paddingTop: Platform.OS == "ios" ? 15 : 10,
    paddingBottom: Platform.OS == "ios" ? 30 : 0,
  },
  text_header: {
    color: "#9233cc",
    fontWeight: "bold",
    fontSize: 22,
  },
});

export default StudentAnnouncements;
