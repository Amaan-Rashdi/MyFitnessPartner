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
import React, { useEffect, useState } from "react";
import { CircleButton } from "../../components/Button";
import left from "./../../../assets/icons/left.png";
import Icon from "react-native-vector-icons/Ionicons";
import {
  getAllUsersApi,
  updateUserTrainerApi,
} from "../../redux/user/user.api";
import { useSelector, useDispatch } from "react-redux";
import { getAllTrainersStudentsAPi } from "../../redux/trainers/trainers.api";
import { trainerLoadStudentsAction } from "../../redux/trainers/trainers.actions";

const TrainerAddStudent = ({ navigation }) => {
  const [allStudents, setAllStudents] = useState([]);
  const [email, setEmail] = useState("");
  const { currentUser } = useSelector((store) => store.user);
  const dispatch = useDispatch();

  useEffect(() => {
    fetchAllStudents();
  }, []);

  const fetchAllStudents = async () => {
    try {
      const { data } = await getAllUsersApi();
      setAllStudents(data.data);
    } catch (error) {
      Alert.alert("Something went wrong", error.message, [{ text: "Okay" }]);
    }
  };

  const handleAddStudent = async () => {
    try {
      let foundStudentId = null;

      allStudents.map((item) => {
        if (item.email === email) {
          foundStudentId = item.userid;
        }
      });

      if (!foundStudentId) {
        Alert.alert(
          "Student not found",
          `No such student with this email ${email}`,
          [{ text: "Okay" }]
        );
      } else {
        //Update Student's Trainer
        await updateUserTrainerApi(foundStudentId, currentUser.Trainerid);
        Alert.alert("Success", `Successfully added student`, [
          { text: "Okay" },
        ]);
        setEmail("");
        const students = await getAllTrainersStudentsAPi(currentUser.Trainerid);
        dispatch(trainerLoadStudentsAction(students.data.data));
      }
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
          Please type student's email address.{"\n\n"}
          <Text style={{ fontSize: 14 }}>
            if the student is registered in our app, we'll add that student to
            your list.
          </Text>
        </Text>
      </View>

      <View>
        <TextInput
          label="Email"
          style={styles.input}
          placeholder="Student Email Address"
          placeholderTextColor="#9932cc"
          keyboardType="email-address"
          value={email}
          onChangeText={(val) => setEmail(val)}
        />
      </View>
      <View style={{ width: "170%", alignItems: "center" }}>
        <TouchableOpacity style={styles.button} onPress={handleAddStudent}>
          <Text style={styles.repair}>Add</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

export default TrainerAddStudent;

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
