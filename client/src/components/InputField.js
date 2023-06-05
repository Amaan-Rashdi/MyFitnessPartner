/** @format */

import { StyleSheet, Text, View, TextInput } from "react-native";
import React from "react";
import Feather from "react-native-vector-icons/Feather";

const InputField = (props) => {
	return (
		<View style={styles.action}>
			<Feather name={props.logoname} color='#05375a' size={20} />
			<TextInput
				placeholder={props.placeholder}
				style={styles.textInput}
				autoCapitalize='none'
				onChangeText={props.onChangeText}
			/>
		</View>
	);
};

export default InputField;

const styles = StyleSheet.create({
	action: {
		flexDirection: "row",
		marginTop: 10,
		borderBottomWidth: 1,
		borderBottomColor: "#9932cc",
		paddingBottom: 5,
	},
	textInput: {
		flex: 1,
		marginTop: Platform.OS === "ios" ? 0 : -12,
		paddingLeft: 10,
		color: "#05375a",
	},
});
