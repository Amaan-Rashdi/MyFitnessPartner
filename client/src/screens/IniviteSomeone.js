/** @format */

import {
	StyleSheet,
	Text,
	StatusBar,
	TextInput,
	TouchableOpacity,
	View,
	SafeAreaView,
	Platform,
	Button,
} from "react-native";
import React from "react";
import { CircleButton } from "../components/Button";
import left from "./../../assets/icons/left.png";
// import Clipboard from "@react-native-clipboard/clipboard";
import * as Clipboard from "expo-clipboard";
const InviteSomeone = ({ navigation }) => {
	const copyToClipboard = async () => {
		await Clipboard.setStringAsync("hello world");
		// console.log("cop");
	};

	return (
		<SafeAreaView style={styles.container}>
			<View
				style={{
					width: "100%",
					height: 100,
					borderBottomLeftRadius: 20,
					borderBottomRightRadius: 20,
					position: "relative",
				}}>
				<CircleButton
					imgUrl={left}
					handlePress={() => navigation.goBack()}
					left={15}
					top={StatusBar.currentHeight + 10}
				/>
			</View>
			<View style={styles.header}>
				<Text style={styles.text_header}>
					Please share our app with your friends if you like{"\n\n"}
					<Text style={{ fontSize: 14 }}>
						we really appreciate your little efforts.
					</Text>
				</Text>
			</View>

			<View>
				<View style={styles.input}>
					<Text
						style={{
							color: "#9932cc",
							fontSize: 24,
							textAlign: "center",
							margin: 5,
						}}>
						https://www.myFitnessPartner
					</Text>
				</View>
			</View>
			<View style={{ width: "150%", alignItems: "center" }}>
				<TouchableOpacity
					style={styles.button}
					onPress={() => {
						copyToClipboard;
					}}>
					<Text style={styles.repair}>Copy Link</Text>
				</TouchableOpacity>
				{/* <Button title='d' onPress={copyToClipboard} /> */}
			</View>
		</SafeAreaView>
	);
};

export default InviteSomeone;

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: "#9932cc",
	},
	input: {
		height: 60,
		margin: 12,
		backgroundColor: "#fff",
		borderWidth: 0,
		color: "#9932cc",
		fontWeight: "200",
		fontSize: 18,
		borderRadius: 5,
		padding: 11,
	},
	header: {
		justifyContent: "flex-end",
		padding: 30,
		paddingBottom: 50,
	},
	text_header: {
		color: "#FFF",
		fontWeight: "bold",
		fontSize: 27,
	},
	button: {
		alignItems: "center",
		marginTop: 20,
		backgroundColor: "#fff",
		borderRadius: 10,
		padding: 20,
	},
	repair: {
		textAlign: "justify", // <-- the magic
		fontWeight: "bold",
		fontSize: 18,
		color: "#9932cc",
	},
});
