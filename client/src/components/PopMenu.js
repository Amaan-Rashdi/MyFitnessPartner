/** @format */

import React from "react";

import { View, Text, Image, TouchableOpacity, StyleSheet } from "react-native";

import Menu, { MenuItem, MenuDivider } from "react-native-material-menu";

const PopMenu = () => {
	return (
		<View style={styles.menustyle}>
			<Menu>
				<MenuItem onPress={{}}>Go to second Page</MenuItem>

				<MenuItem onPress={{}}>Go to first Page</MenuItem>

				<MenuItem onPress={{}}>Demo Option</MenuItem>

				<MenuItem disabled>Disabled option</MenuItem>

				<MenuDivider />

				<MenuItem onPress={() => {}}>Option After Divider</MenuItem>
			</Menu>
		</View>
	);
};

export default PopMenu;

const styles = StyleSheet.create({
	menustyle: {
		margin: 10,
		flexDirection: "row",
		justifyContent: "flex-end",
	},
});
