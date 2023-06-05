import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  SafeAreaView,
  Keyboard,
  ScrollView,
  Alert,
} from "react-native";
import React, { useEffect, useState } from "react";

// import the module
import * as WebBrowser from "expo-web-browser";
import axios from "axios";

import { useSelector } from "react-redux";
import { APIURL } from "../../../config";

export default function TrainerVideosList() {
  const { currentUser } = useSelector((store) => store.user);
  const { selectedStudent } = useSelector((store) => store.trainer);

  const [videos, setVideos] = useState([]);
  useEffect(() => {
    fetchVideos();
  }, []);

  const fetchVideos = async () => {
    try {
      const { data } = await axios.get(
        `${APIURL}/videos/Trainer/${currentUser.Trainerid}`
      );
      if (data.success) {
        let filteredVideos = data.videos.filter((item) =>
          item.includes(`#${selectedStudent.userid}#`)
        );

        setVideos(filteredVideos);
      }
    } catch (error) {
      Alert.alert("Something went wrong!", error.message, [{ text: "Okay" }]);
    }
  };

  const downloadVideo = async (filename) => {
    try {
      var path = `${APIURL}/download/Trainer/${currentUser.Trainerid}/${filename}`;
      await WebBrowser.openBrowserAsync(path);
    } catch (error) {
      Alert.alert("Something went wrong!", error.message, [{ text: "Okay" }]);
    }
  };

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.header}>Download Videos</Text>
      {videos.map((item) => (
        <TouchableOpacity
          style={styles.video}
          key={item}
          onPress={() => {
            downloadVideo(item);
          }}
        >
          <Text style={styles.videoText}>{item}</Text>
        </TouchableOpacity>
      ))}

      {videos.length == 0 && <Text style={styles.noVideo}>No video found</Text>}
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#E8EAED",
    alignItems: "center",
  },
  header: {
    color: "#9932cc",
    fontSize: 25,
    textAlign: "center",
    marginVertical: 10,
    fontWeight: "bold",
  },
  noVideo: {
    color: "#000",
    fontSize: 20,
    textAlign: "center",
    marginTop: 300,
    fontWeight: "bold",
  },

  video: {
    backgroundColor: "#9932cc",
    color: "white",
    height: 60,
    textAlign: "center",
    marginVertical: 10,
    width: 320,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },

  videoText: {
    fontSize: 20,
    color: "white",
  },
  sectionTitle: {
    paddingTop: 15,
    textAlign: "center",
    padding: 10,
    color: "#9932cc",
    fontSize: 24,
    fontWeight: "bold",
    // fontStyle: "italic",
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
