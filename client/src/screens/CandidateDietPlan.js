/** @format */

import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  SafeAreaView,
  Keyboard,
  ScrollView,
  Alert,
} from "react-native";
import React, { useState } from "react";

import DietDropDown from "../components/DietDropDown";
import { useDispatch, useSelector } from "react-redux";
import { updateUserDietApi } from "../redux/user/user.api";
// Import Document Picker
// import DocumentPicker from "react-native-document-picker";
import * as DocumentPicker from "expo-document-picker";
import * as FileSystem from "expo-file-system";
import { APIURL } from "../../config";
import axios from "axios";

const CandidateDietPlan = ({ navigation, data }) => {
  const { selectedStudent } = useSelector((store) => store.trainer);

  const [diet, setDiet] = useState("");
  const [meal, setMeal] = useState("");
  const [doc, setDoc] = useState(null);

  const handleSuggest = async () => {
    try {
      const { data } = await updateUserDietApi(selectedStudent.userid, {
        diet,
        meal,
      });
      //Uploading Video
      postDocument();

      //Navigating To Success Payment Page
      navigation.navigate("PaymentSuccessfull", {
        title: "Suggestion Sent ",
        value: " ",
        backScreenName: "StudentList",
      });
    } catch (error) {
      console.log(error.message);
      Alert.alert("Something went wrong!", "Please Try Again.", [
        { text: "Okay" },
      ]);
    }
  };

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
          name: name || "No file",
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
      const url = `${APIURL}/videos/Student/${selectedStudent.userid}`;
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
      const { data } = await axios(options);
      console.log(data);

      await updateUserDietApi(selectedStudent.userid, {
        diet,
        meal,
      });

      // Navigating To Success Payment Page
      navigation.navigate("PaymentSuccessfull", {
        title: "Suggestion Sent ",
        value: " ",
        backScreenName: "StudentList",
      });

      setDoc(null);
    } catch (error) {
      Alert.alert("Something went wrong!", error.message, [{ text: "Okay" }]);
    }
  };

  return (
    <SafeAreaView style={styles.container}>
      <View>
        <DietDropDown
          navigation={navigation}
          meal={meal}
          setMeal={setMeal}
          diet={diet}
          setDiet={setDiet}
        />
      </View>
      <View style={{ width: "100%", alignItems: "center" }}>
        <TouchableOpacity style={styles.button} onPress={pickDocument}>
          <Text style={styles.repair}>Upload Video</Text>
        </TouchableOpacity>

        {doc?.name && <Text>File Name: {doc.name}</Text>}
      </View>
      <ScrollView>{/* <Text>CandidateDitPlan</Text> */}</ScrollView>
      <View
        style={{
          width: "100%",
          position: "absolute",
          bottom: 0,
          paddingVertical: 14,
          justifyContent: "center",
          alignItems: "center",
          backgroundColor: "#E8EAED",
          zIndex: 1,
        }}
      >
        <TouchableOpacity
          // onPress={navigation.navigate("PaymentSuccessfull")}
          onPress={postDocument}
          style={{
            backgroundColor: "#9932cc",
            padding: 12,
            borderRadius: 24,
            minWidth: 170,
          }}
        >
          <Text
            style={{
              fontSize: 18,
              color: "#fff",
              textAlign: "center",
            }}
          >
            Suggest
          </Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#E8EAED",
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
export default CandidateDietPlan;
