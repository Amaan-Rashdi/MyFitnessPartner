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
  TouchableOpacity,
  Alert,
} from "react-native";
import avatar from "../../../assets/avatar.png";
import { FAB } from "react-native-paper";
import CandidateProfile from "../CandidateProfile";
import { useDispatch, useSelector } from "react-redux";
import { trainerSelectedStudentAction } from "../../redux/trainers/trainers.actions";

const Item = ({ item, onPress, backgroundColor, textColor, navigation }) => {
  return (
    <TouchableOpacity
      onPress={onPress}
      style={[styles.container, backgroundColor]}
    >
      <View style={styles.HeaderLeftImageView}>
        <Image style={styles.HeaderLeftImage} source={avatar} size={80} />
      </View>
      <View style={{ flexDirection: "row", marginLeft: 10 }}>
        <View>
          <Text style={[styles.title, textColor]}>
            {item.firstname + " " + item.lastname || "N/A"}
          </Text>
          <View style={{ padding: 2 }}></View>
          <Text style={[styles.annoucementText, , textColor]}>
            {item.gymName || ""}
          </Text>
        </View>
      </View>
    </TouchableOpacity>
  );
};
const StudentList = ({ navigation }) => {
  const { students } = useSelector((store) => store.trainer);
  const [selectedId, setSelectedId] = useState(null);
  const dispatch = useDispatch();

  const renderItem = ({ item }) => {
    return (
      <Item
        item={item}
        onPress={() => {
          dispatch(trainerSelectedStudentAction(item));
          navigation.navigate("CandidateProfile", {
            userid: item.userid || "N/A",
            name: item.firstname + " " + item.lastname || "N/A",
            gymName: item.gymname || "Flex Gym",
            phoneNumber: item.contact,
            emailAddress: item.email || "Karachi",
            bmi: item.bmi || 19,
            bodyWeight: item.weight || 70,
            weightStatus: item.wightstatus ||"Overweight",
            bodyFat: item.bodyfat || 20.4,
            currentDietPlan: item.diet || "Paleo",
            caloriesTotal: item.calories || 200,
            feeStatus: item.feestatus || "paid",
          });
        }}
        navigation
        // backgroundColor={{ backgroundColor }}
        // textColor={{ color }}
      />
    );
  };

  return (
    <SafeAreaView style={styles.container}>
      <FlatList
        data={students}
        renderItem={renderItem}
        keyExtractor={(item) => item.userid}
        extraData={selectedId}
      />
      <FAB
        style={styles.fab}
        icon="plus"
        small="true"
        onPress={() => navigation.navigate("TrainerAddStudent")}
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
  fab: {
    position: "absolute",
    bottom: 30,
    right: 30,
    width: "12%",
    // height: "8%",

    backgroundColor: "#9932cc",
    alignItems: "center",
  },
});

export default StudentList;
