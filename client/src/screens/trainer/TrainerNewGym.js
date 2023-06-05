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
import { useSelector, useDispatch } from "react-redux";
import { getAllGymsApi } from "../../redux/gyms/gyms.api";
import { loadAllGymsAction } from "../../redux/gyms/gyms.actions";
import { updateGymTrainerApi } from "../../redux/gyms/gyms.api";
import { getAllTrainersGymsApi } from "../../redux/trainers/trainers.api";
import { trainerLoadGymsAction } from "../../redux/trainers/trainers.actions";

const TrainerNewGym = ({ navigation }) => {
  const [allGyms, setAllGyms] = useState([]);
  const dispatch = useDispatch();
  const [gymName, setGymName] = useState("");
  const { currentUser } = useSelector((store) => store.user);

  useEffect(() => {
    fetchAllGyms();
  }, []);

  const fetchAllGyms = async () => {
    try {
      const { data } = await getAllGymsApi();
      setAllGyms(data.data);
      dispatch(loadAllGymsAction(data.data));
    } catch (error) {
      Alert.alert("Something went wrong", error.message, [{ text: "Okay" }]);
    }
  };

  const handleAddGym = async () => {
    try {
      let foundGymId = null;

      allGyms.map((item) => {
        if (item.gymname === gymName) {
          foundGymId = item.gymid;
        }
      });

      if (!foundGymId) {
        Alert.alert("GYM not found", `No such gym with this name ${gymName}`, [
          { text: "Okay" },
        ]);
      } else {
        //Update Gym
        await updateGymTrainerApi(foundGymId, currentUser.Trainerid);
        Alert.alert("Success", `Successfully added gym with name ${gymName}`, [
          { text: "Okay" },
        ]);

        const gyms = await getAllTrainersGymsApi(currentUser.Trainerid);
        dispatch(trainerLoadGymsAction(gyms.data.data));

        fetchAllGyms();
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
          Please type gym name{"\n\n"}
          <Text style={{ fontSize: 14 }}>
            if the gym is registered in our app, we'll add that gym to your
            list.
          </Text>
        </Text>
      </View>

      <View>
        <TextInput
          label="Email"
          style={styles.input}
          placeholder="Gym name"
          placeholderTextColor="#9932cc"
          keyboardType="email-address"
          onChangeText={(val) => setGymName(val)}
          value={gymName}
        />
      </View>
      <View style={{ width: "170%", alignItems: "center" }}>
        <TouchableOpacity style={styles.button} onPress={handleAddGym}>
          <Text style={styles.repair}>Add</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

export default TrainerNewGym;

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
