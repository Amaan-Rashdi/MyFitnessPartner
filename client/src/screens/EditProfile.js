/** @format */

import { StyleSheet, Text, View } from "react-native";
import React from "react";

const EditProfile = (props) => {
  var whose = props.route.params.name;

  return (
    <View>
      {whose == "trainer" ? (
        <View>
          <Text>EditProfile</Text>
        </View>
      ) : (
        <View></View>
      )}
    </View>
  );
};

export default EditProfile;

const styles = StyleSheet.create({});
