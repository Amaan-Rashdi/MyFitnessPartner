/** @format */

import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { Checkbox, TextInput } from "react-native-paper";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";

const CheckBox = (props) => {
	const [checked, setChecked] = React.useState(false);

	return (
		<View
			style={{
				display: "flex",
				flexDirection: "row",
				alignItems: "center",
				justifyContent: "space-around",
				backgroundColor: "#E8EAED",
				borderRadius: 20,
				height: 60,
				marginHorizontal: 20,
				marginVertical: 15,
			}}>
			<View
				style={{
					display: "flex",
					flexDirection: "row",

					alignItems: "center",
				}}>
				{/* <Feather name='arrow-right' size={20} /> */}
				{/* <FontAwesome name='' color='#05375a' size={20} /> */}
				<Icon name={props.logoname} size={20} />
				<Text style={{ fontSize: 18, padding: 10, marginLeft: 5 }}>
					{props.boxTitle}
					
					
					
				</Text>
			</View>
			<Checkbox
				color='#9932cc'
				backgroundColor=''
				status={checked ? "checked" : "unchecked"}
				onPress={() => {
					setChecked(!checked);
					console.log(checked);
				}}
			/>
		</View>
	);
};

export default CheckBox;

const styles = StyleSheet.create({});
