/** @format */

import {
	StyleSheet,
	Text,
	View,
	SafeAreaView,
	TouchableOpacity,
} from "react-native";

import React from "react";
import SettingComponent from "../components/SettingComponent";
const NewUserExplore = (props) => {
	// console.log(props);

	return (
		<SafeAreaView style={styles.container}>
			<View style={styles.header}>
				<Text style={styles.text_header}>Still Wondering ?</Text>
			</View>

			<View>
				<SettingComponent
					settingName='Sign Up'
					iconName='log-in-outline'
					toScreen='StudentSignUp'
					navigation={props.navigation}
					name=''
				/>
				<SettingComponent
					settingName='Register Your Gym'
					iconName='create'
					toScreen='RegisterGymForm'
					navigation={props.navigation}
					name=''
				/>
				<SettingComponent
					settingName='Blogs'
					iconName='chatbubbles-outline'
					toScreen='HomeScreen'
					navigation={props.navigation}
					name=''
				/>
				<SettingComponent
					settingName='Find Gym'
					iconName='search-outline'
					toScreen='Home'
					navigation={props.navigation}
					name=''
				/>
			</View>
		</SafeAreaView>
	);
};

export default NewUserExplore;

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: "#fff",
	},
	header: {
		justifyContent: "flex-end",
		paddingHorizontal: 30,
		paddingTop: 30,
		paddingBottom: 20,
	},
	text_header: {
		color: "#9233cc",
		fontWeight: "bold",
		fontSize: 27,
	},
});
