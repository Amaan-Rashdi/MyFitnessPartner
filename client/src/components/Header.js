/** @format */

import React from "react";
import { View, Text, StyleSheet } from "react-native";
const Header = (props) => {
	return (
		<View style={styles.header}>
			<Text style={styles.title}>{props.title}</Text>
		</View>
	);
};

const styles = StyleSheet.create({
	header: {
		width: "100%",
		height: 95,
		paddingTop: 40,
		backgroundColor: "#9932cc",
		alignItems: "center",
		justifyContent: "center",
	},
	title: {
		color: "black",
		fontWeight: "900",
		fontSize: 25,
	},
});

export default Header;
