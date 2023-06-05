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
const Settings = (props) => {
	// console.log(props);

	return (
		<SafeAreaView style={styles.container}>
			<View style={styles.header}>
				<Text style={styles.text_header}>Menu</Text>
			</View>

			<View>
				<SettingComponent
					settingName='Invite a friend'
					iconName='add-circle'
					toScreen='InviteSomeone'
					navigation={props.navigation}
					name=''
				/>
				{/* <SettingComponent
					settingName='Edit Profile'
					iconName='create'
					toScreen=''
					navigation={props.navigation}
					name='student'
				/> */}
				<SettingComponent
					settingName='Rate Trainer'
					iconName='star-half'
					toScreen='TrainerRatings'
					navigation={props.navigation}
					name=''
				/>
				<SettingComponent
					settingName='Logout'
					iconName='log-out'
					toScreen='SplashScreen'
					navigation={props.navigation}
					name=''
				/>
			</View>
		</SafeAreaView>
	);
};

export default Settings;

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
