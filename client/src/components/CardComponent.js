/** @format */

import { StyleSheet, Text, View } from "react-native";
import React from "react";
import Icon from "react-native-vector-icons/Ionicons";
import { TouchableRipple, Title } from "react-native-paper";
import { LinearGradient } from "expo-linear-gradient";
const CardComponent = (props) => {
  console.log("88");
  console.log(props.data);
  return (
    // 	}}>
    <TouchableRipple
      onPress={() =>
        props.navigation.navigate(props.ScreenName, {
          name: props.name,
          userType: props.userType,
          data: props.data,
          comingFrom: props.comingFrom,
        })
      }
      style={[
        styles.infoBox,
        {
          backgroundColor: "#9932cc",
          borderRightColor: "#fff",
          borderRightWidth: 3,
          marginRight: 20,
        },
      ]}
    >
      <Title style={{ color: "white", fontSize: 15 }}>
        {" "}
        {
          <Icon name="body-outline" style={{ fontSize: 20 }}>
            {" "}
          </Icon>
        }
        {props.title}
      </Title>
    </TouchableRipple>
    // </LinearGradient>
  );
};

export default CardComponent;

const styles = StyleSheet.create({
  infoBox: {
    borderRadius: 20,
    width: "50%",
    alignItems: "center",
    justifyContent: "center",
  },
});
