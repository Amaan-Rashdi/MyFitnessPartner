/** @format */

import {
  StyleSheet,
  Text,
  StatusBar,
  TouchableOpacity,
  View,
  SafeAreaView,
  Alert,
} from "react-native";
import React, { useState } from "react";
import { CircleButton } from "../components/Button";
import * as DocumentPicker from "expo-document-picker";
import left from "./../../assets/icons/left.png";
import { APIURL } from "../../config";
import { useSelector } from "react-redux";
import axios from "axios";

const UploadVid = ({ navigation, route }) => {
  const { currentUser } = useSelector((store) => store.user);
  const [doc, setDoc] = useState(null);

  const pickDocument = async () => {
    try {
      let result = await DocumentPicker.getDocumentAsync({
        type: "video/*",
        copyToCacheDirectory: true,
      });

      if (result) {
        let { name, size, uri } = result;

        let nameParts = name.split(".");
        let fileType = nameParts[nameParts.length - 1];
        var fileToUpload = {
          name: `#${currentUser.userid}#` + name || "No file",
          size: size || null,
          uri: uri || null,
          type: "application/" + fileType,
        };
        setDoc(fileToUpload);
      }
    } catch (error) {
      console.log(error);
    }
  };

  const postDocument = async () => {
    try {
      if (doc) {
        const url = `${APIURL}/videos/Trainer/${currentUser.trainerid}`;
        const formData = new FormData();
        formData.append("video", doc);

        const options = {
          method: "post",
          data: formData,
          url,
          headers: {
            Accept: "application/json",
            "Content-Type": "multipart/form-data",
          },
        };
        await axios(options);

        //   // Navigating To Success Payment Page
        Alert.alert("Video Uploaded", "Task video is uploaded successfully", [
          { text: "Okay" },
        ]);
        navigation.goBack();
      } else {
        Alert.alert("Video not found", "Video is required to complete task", [
          { text: "Okay" },
        ]);
      }
    } catch (error) {
      Alert.alert("Something went wrong!", error.message, [{ text: "Okay" }]);
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
          Upload task video to get verified from trainer
          <Text style={{ fontSize: 18 }}>
            {" "}
            or if exersice was being done in supervision of trainer physically
            you can skip video and mark task as done.
          </Text>
        </Text>
      </View>
      <View style={{ display: "flex", flexDirection: "row", margin: 15 }}>
        <View style={{ width: "50%", alignItems: "center" }}>
          <TouchableOpacity style={styles.button} onPress={pickDocument}>
            <Text style={styles.repair}>Upload Video</Text>
            {doc && <Text>Filename: {doc.name} </Text>}
          </TouchableOpacity>
        </View>

        <View style={{ width: "50%", alignItems: "center" }}>
          <TouchableOpacity style={styles.button} onPress={postDocument}>
            <Text style={styles.repair}>Mark task as done</Text>
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default UploadVid;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#9932cc",
  },
  header: {
    justifyContent: "flex-end",
    padding: 30,
    paddingBottom: 50,
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
