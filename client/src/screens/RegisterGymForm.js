/** @format */

import React from "react";
import {
	View,
	Text,
	TouchableOpacity,
	TextInput,
	Platform,
	StyleSheet,
	ScrollView,
	StatusBar,
	Alert,
} from "react-native";
import FontAwesome from "react-native-vector-icons/FontAwesome";
import Feather from "react-native-vector-icons/Feather";

//components
import InputField from "../components/InputField";
const RegisterGymForm = ({ navigation }) => {
	const RegisterConfirm = () =>
		Alert.alert("Congratulations !!!", "your gym has been listed.", [
			{
				text: "Edit",
				onPress: () => console.log("Edit "),
				style: "cancel",
			},
			{ text: "Great", onPress: () => navigation.goBack() },
		]);

	return (
		<View style={styles.container}>
			<StatusBar backgroundColor='#9932cc' barStyle='light-content' />
			<View style={styles.header}>
				<Text style={styles.text_header}>Register your Gym Now!</Text>
			</View>
			<View style={styles.footer}>
				<ScrollView>
					<Text style={styles.text_footer}>Gym Name</Text>
					<View style={styles.action}>
						<FontAwesome name='globe' color='#05375a' size={20} />
						<TextInput
							placeholder='Your Username'
							style={styles.textInput}
							autoCapitalize='none'
						/>
					</View>

					<Text
						style={[
							styles.text_footer,
							{
								marginTop: 35,
							},
						]}>
						Gym address
					</Text>
					<InputField logoname='map-pin' placeholder='Address' />

					<Text
						style={[
							styles.text_footer,
							{
								marginTop: 35,
							},
						]}>
						Email Address
					</Text>
					<InputField logoname='mail' placeholder='Gym email address' />

					<Text
						style={[
							styles.text_footer,
							{
								marginTop: 35,
							},
						]}>
						Phone Number
					</Text>
					<View style={styles.action}>
						<Feather name='phone' color='#05375a' size={20} />
						<TextInput
							placeholder='Gym contact number'
							style={styles.textInput}
							autoCapitalize='none'
						/>
					</View>

					<Text
						style={[
							styles.text_footer,
							{
								marginTop: 35,
							},
						]}>
						Website
					</Text>
					<View style={styles.action}>
						<Feather name='globe' color='#05375a' size={20} />
						<TextInput
							placeholder='www.yourgymname.com'
							style={styles.textInput}
							autoCapitalize='none'
						/>
					</View>
					<Text
						style={[
							styles.text_footer,
							{
								marginTop: 35,
							},
						]}>
						Start Time
					</Text>
					<View style={styles.action}>
						<Feather name='globe' color='#05375a' size={20} />
						<TextInput
							placeholder='00:00 AM'
							style={styles.textInput}
							autoCapitalize='none'
						/>
					</View>
					<Text
						style={[
							styles.text_footer,
							{
								marginTop: 35,
							},
						]}>
						Close Time
					</Text>
					<View style={styles.action}>
						<Feather name='globe' color='#05375a' size={20} />
						<TextInput
							placeholder='12:00 PM'
							style={styles.textInput}
							autoCapitalize='none'
						/>
					</View>
					<Text
						style={[
							styles.text_footer,
							{
								marginTop: 35,
							},
						]}>
						Registeration Fee
					</Text>
					<View style={styles.action}>
						<Feather name='globe' color='#05375a' size={20} />
						<TextInput
							placeholder='Amount in PKR'
							style={styles.textInput}
							autoCapitalize='none'
						/>
					</View>
					<Text
						style={[
							styles.text_footer,
							{
								marginTop: 35,
							},
						]}>
						Monthly Fee
					</Text>
					<View style={styles.action}>
						<Feather name='globe' color='#05375a' size={20} />
						<TextInput
							placeholder='Amount in PKR'
							style={styles.textInput}
							autoCapitalize='none'
						/>
					</View>

					<View style={styles.textPrivate}>
						<Text style={styles.color_textPrivate}>
							By signing up you agree to our
						</Text>
						<Text style={[styles.color_textPrivate, { fontWeight: "bold" }]}>
							{" "}
							Terms of service
						</Text>
						<Text style={styles.color_textPrivate}> and</Text>
						<Text style={[styles.color_textPrivate, { fontWeight: "bold" }]}>
							{" "}
							Privacy policy
						</Text>
					</View>
					<View style={styles.button}>
						<TouchableOpacity
							style={[
								styles.signIn,
								{
									borderColor: "#9932cc",
									borderWidth: 1,
									marginTop: 15,
								},
							]}
							onPress={() => {
								RegisterConfirm();
							}}>
							<Text
								style={[
									styles.textSign,
									{
										color: "#9932cc",
									},
								]}>
								Register
							</Text>
						</TouchableOpacity>
						<TouchableOpacity
							onPress={() => navigation.goBack()}
							style={[
								styles.signIn,
								{
									backgroundColor: "#9932cc",
									borderColor: "#9932cc",
									borderWidth: 1,
									marginTop: 15,
								},
							]}>
							<Text
								style={[
									styles.textSign,
									{
										color: "#fff",
									},
								]}>
								<Feather name='arrow-left' size={20} /> Go Back
							</Text>
						</TouchableOpacity>
					</View>
				</ScrollView>
			</View>
		</View>
	);
};

export default RegisterGymForm;

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: "#9932cc",
	},
	header: {
		flex: 1,
		justifyContent: "flex-end",
		paddingHorizontal: 20,
		paddingBottom: 50,
	},
	footer: {
		flex: Platform.OS === "ios" ? 6 : 11,
		backgroundColor: "#fff",
		borderTopLeftRadius: 30,
		borderTopRightRadius: 30,
		paddingHorizontal: 20,
		paddingVertical: 30,
	},
	text_header: {
		color: "#fff",
		fontWeight: "bold",
		fontSize: 30,
	},
	text_footer: {
		color: "#9932cc",
		fontSize: 18,
	},
	action: {
		flexDirection: "row",
		marginTop: 10,
		borderBottomWidth: 1,
		borderBottomColor: "#9932cc",
		paddingBottom: 5,
	},
	textInput: {
		flex: 1,
		marginTop: Platform.OS === "ios" ? 0 : -10,
		paddingLeft: 10,
		color: "#05375a",
	},
	button: {
		alignItems: "center",
		marginTop: Platform.OS === "ios" ? 100 : 20,
	},
	signIn: {
		width: "100%",
		height: 50,
		justifyContent: "center",
		alignItems: "center",
		borderRadius: 10,
	},
	textSign: {
		fontSize: 18,
		fontWeight: "bold",
	},
	textPrivate: {
		flexDirection: "row",
		flexWrap: "wrap",
		marginTop: 20,
	},
	color_textPrivate: {
		color: "grey",
	},
});
