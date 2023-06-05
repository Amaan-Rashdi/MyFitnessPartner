/** @format */

import { StyleSheet, Text, View } from "react-native";
import React from "react";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";

const GenderCard = (props) => {
	return (
		<View
			style={{
				width: 130,
				margin: 20,
				padding: 20,
				borderRadius: 15,
				height: 150,
				backgroundColor: "#9932CC",
			}}>
			<Icon name={props.logoname} size={100} />
			<Text>{props.gender}</Text>
		</View>
	);
};

export default GenderCard;

const styles = StyleSheet.create({});
