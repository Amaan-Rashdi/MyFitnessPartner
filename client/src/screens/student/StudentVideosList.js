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
import {
  downloadVideos,
  getAllVideos,
  downloadUrl,
} from "../../redux/videos/videos.api";
// import the module
import * as WebBrowser from "expo-web-browser";
import axios from "axios";
import { APIURL } from "../../../config";
import { useSelector } from "react-redux";

export default function StudentVideosList() {
  const { currentUser } = useSelector((store) => store.user);
  const [videos, setVideos] = useState([]);
  useEffect(() => {
    fetchVideos();
  }, []);

  const fetchVideos = async () => {
    try {
      const { data } = await axios.get(
        `${APIURL}/videos/Student/${currentUser.userid}`
      );
      if (data.success) {
        setVideos(data.videos);
      }
    } catch (error) {
      Alert.alert("Something went wrong!", error.message, [{ text: "Okay" }]);
    }
  };

  const downloadVideo = async (filename) => {
    try {
      await WebBrowser.openBrowserAsync(
        `${APIURL}/download/Student/${currentUser.userid}/` + filename
      );
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
