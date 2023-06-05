/** @format */

import { StyleSheet, Text, View } from "react-native";
import React from "react";
///////// imports
import ButtonPress from "../components/buttons";

const SignupNavigation = (props) => {
	return (
		<View style={[styles.container, {}]}>
			<ButtonPress
				title='Trainer'
				navigation={props.navigation}
				to='TrainerSignUp'
			/>
		</View>
	);
};

export default SignupNavigation;

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: "#9932cc",
	},
});
