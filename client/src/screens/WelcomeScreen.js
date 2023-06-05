/** @format */

import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Image,
  Button,
  StatusBar,
  Dimensions,
  Platform,
} from "react-native";
import React from "react";
import { useTheme } from "@react-navigation/native";
import Icon from "react-native-vector-icons/Ionicons";
////////////// Imports
import ButtonPress from "../components/buttons";
import { useSelector } from "react-redux";
////////////////////////////////////////////////////

const WelcomeScreen = (props) => {
  const { colors } = useTheme();
  //   const store = useSelector((store) => store);
  //   console.log("-------------Redux Store at beginning-----------");
  //   console.log(store);

  return (
    <View style={styles.container}>
      <StatusBar backgroundColor="#9932cc" barStyle="light-content" />
      <TouchableOpacity
        onPress={() => {
          props.navigation.navigate("MainScreenSkip");
        }}
      >
        <Text
          style={{
            color: colors.text,
            textAlign: "right",
            color: "#fff",
            fontSize: 24,
            padding: 5,
            marginTop: Platform.OS == "ios" ? 50 : 10,
            fontWeight: "bold",
          }}
        >
          Skip
          <Icon name="arrow-forward" size={20} />
        </Text>
      </TouchableOpacity>
      {/* <Button title='Skip' /> */}
      <View style={styles.header}>
        <Image
          source={require("../../assets/logo1.png")}
          style={styles.logo}
          resizeMode="stretch"
        />
      </View>
      <View
        style={[
          styles.footer,
          {
            backgroundColor: colors.background,
          },
        ]}
      >
        <Text
          style={[
            styles.title,
            {
              color: colors.text,
            },
          ]}
        >
          Stay Fit and connected with everyone!
        </Text>
        <Text style={styles.text}>
          Sign in / Sign Up with account to get Started
        </Text>

        <View>
          <ButtonPress
            title="Sign In"
            navigation={props.navigation}
            to="LoginScreen"
          />
          {/* <View style={styles.space} /> */}

          <ButtonPress
            title="Sign Up"
            navigation={props.navigation}
            to="ChooseUser"
            // to='SuggestDiet'
          />
        </View>
        {/* <RadioButton /> */}
      </View>
    </View>
  );
};

const { height } = Dimensions.get("screen");

const height_logo = height * 0.28;
// console.log(height_logo + height);
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#9932cc",
  },
  header: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  footer: {
    flex: 1,
    backgroundColor: "#fff",
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    paddingVertical: 70,
    paddingHorizontal: 30,
  },
  logo: {
    width: 250,
    height: 250,
  },
  title: {
    color: "#05375a",
    fontSize: 30,
    fontWeight: "bold",
  },
  space: {
    width: 0, // or whatever size you need
    height: 0,
  },
  text: {
    color: "grey",
    marginTop: 5,
  },
  repair: {
    textAlign: "justify", // <-- the magic
    fontWeight: "bold",
    fontSize: 18,
  },
  button: {
    alignItems: "center",
    marginTop: 30,
    backgroundColor: "#9932cc",

    padding: 10,
  },
  signIn: {
    width: 150,
    height: 40,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 50,
    flexDirection: "row",
  },
  textSign: {
    color: "black",
    fontWeight: "bold",
  },
});
export default WelcomeScreen;
{
  /* <TouchableOpacity
						style={styles.button}
						onPress={() => props.navigation.navigate("SignUp1")}>
						<Text style={styles.repair}>Login</Text>
					</TouchableOpacity> */
}
