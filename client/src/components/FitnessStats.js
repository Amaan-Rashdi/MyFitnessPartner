/** @format */

import React from "react";
import { View, Text, StyleSheet, TouchableOpacity, Button } from "react-native";

const FitnessStats = (props) => {
	// console.log(props);

	return (
		<View style={{ padding: 15 }}>
			<View style={styles.item}>
				<View style={styles.itemLeft}>
					<View style={styles.square}></View>

					<Text style={styles.itemText}>{props.index}</Text>
				</View>
				<Text style={styles.itemText}>{props.value * 1}%</Text>
			</View>
		</View>
	);
};

const styles = StyleSheet.create({
	item: {
		backgroundColor: "#9932cc",
		padding: 15,
		borderRadius: 10,
		flexDirection: "row",
		alignItems: "center",
		justifyContent: "space-between",
		marginBottom: -10,
	},
	itemLeft: {
		flexDirection: "row",
		alignItems: "center",
		flexWrap: "wrap",
	},
	square: {
		width: 24,
		height: 24,
		backgroundColor: "#FFF",
		zIndex: 1,
		opacity: 0.4,
		borderRadius: 5,
		marginRight: 15,
	},
	itemText: {
		color: "#FFF",
		fontSize: 19,
		maxWidth: "80%",
	},
	circular: {
		width: 12,
		height: 12,
		borderColor: "#FFF",
		borderWidth: 2,
		borderRadius: 5,
	},
});

export default FitnessStats;
