/** @format */

import {
  StyleSheet,
  Text,
  StatusBar,
  TextInput,
  TouchableOpacity,
  View,
  SafeAreaView,
  Platform,
  Alert,
} from "react-native";
import React, { useState } from "react";
import { CircleButton } from "../components/Button";
import left from "./../../assets/icons/left.png";
import Icon from "react-native-vector-icons/Ionicons";
import { useSelector, useDispatch } from "react-redux";
import {
  createAnnouncementApi,
  getAnnouncementsByTrainerIdApi,
} from "../redux/anouncements/announcements.api";
import { trainerLoadAnnouncementsAction } from "../redux/trainers/trainers.actions";

const NewAnnoucement = ({ navigation }) => {
  const [announcementText, setAnnouncementText] = useState("");
  const { currentUser } = useSelector((store) => store.user);
  const dispatch = useDispatch();

  const handleNewAnnouncement = async () => {
    try {
      //Update Student's Trainer

      let payload = {
        name: currentUser.firstname + " " + currentUser.lastname + " - Trainer",
        announcementtext: announcementText,
        trainerid: currentUser.Trainerid,
      };
      await createAnnouncementApi(payload);

      const { data } = await getAnnouncementsByTrainerIdApi(
        currentUser.Trainerid
      );

      dispatch(trainerLoadAnnouncementsAction(data.data));

      Alert.alert("Success", `Successfully created Announcement`, [
        { text: "Okay" },
      ]);
      setAnnouncementText("");
      // fetchAllGyms();
    } catch (error) {
      Alert.alert("Something went wrong", error.message, [{ text: "Okay" }]);
    }
  };

  return (
    <SafeAreaView style={styles.container}>
      <View
        style={{
          width: "100%",
          height: 100,
          borderBottomLeftRadius: 20,
          borderBottomRightRadius: 20,
          position: "relative",
        }}
      >
        <CircleButton
          imgUrl={left}
          handlePress={() => navigation.goBack()}
          left={15}
          top={StatusBar.currentHeight + 10}
        />
      </View>
      <View style={styles.header}>
        <Text style={styles.text_header}>
          Add New Annoucement to Student{"\n\n"}
          <Text style={{ fontSize: 14 }}>
            Type Announcement all students will be notified immediately.
          </Text>
        </Text>
      </View>

      <View>
        <TextInput
          label="Annoucement-Text"
          style={styles.input}
          placeholder="Type Annoucement"
          placeholderTextColor="#9932cc"
          value={announcementText}
          onChangeText={(val) => setAnnouncementText(val)}
          // numberOfLines={5}
          // keyboardType='text'
        />
      </View>
      <View style={{ width: "150%", alignItems: "center" }}>
        <TouchableOpacity style={styles.button} onPress={handleNewAnnouncement}>
          <Text style={styles.repair}>Announce</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

export default NewAnnoucement;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#9932cc",
  },
  input: {
    height: 60,
    margin: 12,
    backgroundColor: "#fff",
    borderWidth: 0,
    color: "#9932cc",
    fontWeight: "200",
    fontSize: 18,
    borderRadius: 5,
    padding: 11,
  },
  header: {
    justifyContent: "flex-end",
    padding: 20,
    paddingBottom: 30,
  },
  text_header: {
    color: "#FFF",
    fontWeight: "bold",
    fontSize: 27,
  },
  button: {
    alignItems: "center",
    marginTop: 20,
    backgroundColor: "#fff",
    borderRadius: 10,
    padding: 20,
  },
  repair: {
    textAlign: "justify", // <-- the magic
    fontWeight: "bold",
    fontSize: 18,
    color: "#9932cc",
  },
});
