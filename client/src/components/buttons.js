/** @format */

import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
import React from "react";

const ButtonPress = (props) => {
  // console.log(props);
  return (
    <TouchableOpacity
      style={[styles.button, { ...props }]}
      onPress={() => props.navigation.navigate(props.to, { ...props.data })}
    >
      <Text style={styles.repair}>{props.title}</Text>
    </TouchableOpacity>
  );
};

export default ButtonPress;

const styles = StyleSheet.create({
  button: {
    alignItems: "center",
    marginTop: 20,
    backgroundColor: "#9932cc",
    borderRadius: 10,
    padding: 20,
  },
  repair: {
    textAlign: "justify", // <-- the magic
    fontWeight: "bold",
    fontSize: 18,
    color: "#fff",
  },
});
