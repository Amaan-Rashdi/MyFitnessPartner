/** @format */
/** @format */

import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  TouchableOpacity,
} from "react-native";

import React from "react";
import SettingComponent from "../../components/SettingComponent";
const Settings = (props) => {
  // console.log(props);

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.text_header}>Menu</Text>
      </View>
      <View>
        <SettingComponent
          settingName="Add new gym"
          iconName="add"
          toScreen="TrainerNewGym"
          navigation={props.navigation}
          name="trainer"
        />
        <SettingComponent
          settingName="Add Student"
          iconName="person-add"
          toScreen="TrainerAddStudent"
          navigation={props.navigation}
          name=""
        />
        <SettingComponent
          settingName="New Annoucement "
          iconName="add-circle"
          toScreen="NewAnnoucement"
          navigation={props.navigation}
          name=""
        />
        <SettingComponent
          settingName="Logout"
          iconName="log-out"
          toScreen="SplashScreen"
          navigation={props.navigation}
          name=""
        />
      </View>
    </SafeAreaView>
  );
};

export default Settings;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  header: {
    justifyContent: "flex-end",
    paddingHorizontal: 30,
    paddingTop: 30,
    paddingBottom: 20,
  },
  text_header: {
    color: "#9233cc",
    fontWeight: "bold",
    fontSize: 27,
  },
});
