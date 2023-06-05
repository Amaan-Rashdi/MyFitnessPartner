/** @format */

import { StyleSheet, Text, View } from "react-native";
import React from "react";

import { useTheme } from "@react-navigation/native";
const HeadingText = (props) => {
	const { colors } = useTheme();
	return (
		<Text
			style={[
				styles.title,

				{
					color: colors.text,
					// ...props,
				},
			]}>
			{props.heading}
		</Text>
	);
};

export default HeadingText;

const styles = StyleSheet.create({
	title: {
		margin: 10,
		padding: 5,
		color: "#05375a",
		fontSize: 20,
		fontWeight: "bold",
	},
});
