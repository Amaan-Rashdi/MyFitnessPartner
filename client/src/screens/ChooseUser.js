/** @format */

import {
	StyleSheet,
	Text,
	View,
	SafeAreaView,
	StatusBar,
	Image,
	TouchableOpacity,
} from "react-native";
import React, { useState } from "react";
import { CircleButton } from "../components/Button";
import left from "../../assets/icons/left.png";
import sign from "../../assets/icons/logo1.png";

import check from "../../assets/icons/purpletick.png";
import uncheck from "../../assets/icons/search.png";
import HeadingText from "../components/HeadingText";
import Feather from "react-native-vector-icons/Feather";

const ChooseUser = (props) => {
	const [checked, setChecked] = useState(0);
	var user = ["Trainer", "Student"];
	var nav = checked == 1 ? "StudentSignUp" : "TrainerSignUp";
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
					handlePress={() => props.navigation.goBack()}
					left={15}
					top={
						Platform.OS === "ios"
							? StatusBar.currentHeight
							: StatusBar.currentHeight - 20
					}
				/>
			</View>
			<View style={{ alignItems: "center" }}>
				<Image
					resizeMode='contain'
					style={{
						width: 80,
						height: 120,
					}}
					source={sign}
				/>
			</View>
			<HeadingText heading='Which one are you?' />
			<View
				style={{
					// width: "100%",
					display: "flex",
					flexDirection: "row",
					justifyContent: "space-around",
				}}>
				<View style={styles.btn}>
					{user.map((user, key) => {
						// console.log(key);
						return (
							<View key={user}>
								{checked == key ? (
									<TouchableOpacity style={styles.btn}>
										{/* <GenderCard logoname='' user={user} /> */}
										<View
											style={{
												backgroundColor: "#8e9191",
												height: 120,
												width: 130,
												borderRadius: 10,
												alignItems: "center",
												margin: 20,
											}}>
											<HeadingText heading={user} />
											<Image style={styles.img} source={check} />
										</View>
									</TouchableOpacity>
								) : (
									<TouchableOpacity
										onPress={() => {
											setChecked(key);
										}}
										style={styles.btn}>
										<View
											style={{
												backgroundColor: "#8e9191",
												height: 120,
												width: 130,
												borderRadius: 10,
												alignItems: "center",
												margin: 20,
											}}>
											<HeadingText heading={user} />
											<Image style={styles.img} source={uncheck} />
										</View>
									</TouchableOpacity>
								)}
							</View>
						);
					})}
				</View>
			</View>
			<Text style={styles.caption}>
				To give you better experience {"\n"}we have made{" \n"}
				This app is for everyone
			</Text>
			<View style={{ alignItems: "center" }}>
				<TouchableOpacity
					// onPress={() => props.navigation.navigate("MainScreen")}
					// {
					//     checked == 1 ? onPress={() => console.log(checked)} : onPress={() => console.log(checked)}
					// }
					onPress={() => props.navigation.navigate(nav)}
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
						Continue <Feather name='arrow-right' size={20} />
					</Text>
				</TouchableOpacity>
			</View>

			{/* <Text>{user[checked]}</Text> */}
		</SafeAreaView>
	);

	// return (
	// 	<SafeAreaView style={styles.container}>

	// 	</SafeAreaView>
	// );
};

export default ChooseUser;

const styles = StyleSheet.create({
	container: {
		flex: 1,
	},
	signIn: {
		width: "50%",
		height: 50,
		justifyContent: "center",
		alignItems: "center",
		borderRadius: 10,
	},
	textSign: {
		fontSize: 18,
		fontWeight: "bold",
	},
	radio: {
		flexDirection: "row",
	},
	img: {
		height: 20,
		width: 20,
		marginHorizontal: 5,
	},
	btn: {
		flexDirection: "row",
		alignItems: "center",
	},
	caption: {
		fontSize: 18,
		color: "grey",
		textAlign: "center",
		padding: 50,
	},
});
