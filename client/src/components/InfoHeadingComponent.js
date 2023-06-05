/** @format */

import { StyleSheet, Text, View } from "react-native";
import React from "react";
// import Icon from "react-native-vector-icons/MaterialCommunityIcons";
import Icon from "react-native-vector-icons/Ionicons";
const InfoHeadingComponent = (props) => {
	return (
		<View style={styles.row}>
			<Icon name={props.iconName} color='#777777' size={20} />
			<Text style={{ color: "#777777", marginLeft: 20, fontWeight: "bold" }}>
				{props.headingLine}
			</Text>
		</View>
	);
};

export default InfoHeadingComponent;

const styles = StyleSheet.create({
	row: {
		flexDirection: "row",
		marginBottom: 11,
	},
});
