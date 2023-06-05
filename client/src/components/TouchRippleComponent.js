/** @format */

import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { TouchableRipple } from "react-native-paper";
import Icon from "react-native-vector-icons/Ionicons";
import GymsList from "../screens/GymsList";

const TouchRippleComponent = (props) => {
	return (
		<TouchableRipple onPress={() => props.navigation.navigate(props.to)}>
			<View style={styles.menuItem}>
				<Icon name={props.iconName} color='#9932cc' size={25} />
				<Text style={styles.menuItemText}>{props.displayLine}</Text>
			</View>
		</TouchableRipple>
	);
};

export default TouchRippleComponent;

const styles = StyleSheet.create({
	menuItem: {
		flexDirection: "row",
		paddingVertical: 15,
		paddingHorizontal: 30,
	},
	menuItemText: {
		color: "black",
		marginLeft: 20,
		fontWeight: "600",
		fontSize: 15,
		lineHeight: 26,
	},
});
