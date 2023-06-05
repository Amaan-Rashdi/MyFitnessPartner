/** @format */

import React from "react";
import { TouchableOpacity, Text, Image } from "react-native";

import { COLORS, SIZES, FONTS, SHADOWS } from "../../constants";

export const CircleButton = ({ imgUrl, handlePress, ...props }) => {
	// console.log("Circle button.js ");
	return (
		<TouchableOpacity
			style={{
				width: 40,
				height: 40,
				backgroundColor: "#fff",
				position: "absolute",
				borderRadius: SIZES.extraLarge,
				alignItems: "center",
				justifyContent: "center",
				// ...SHADOWS.light,
				...props,
			}}
			onPress={handlePress}>
			<Image
				source={imgUrl}
				resizeMode='contain'
				style={{ width: 24, height: 24 }}
			/>
		</TouchableOpacity>
	);
};

export const RectButton = ({
	minWidth,
	fontSize,
	handlePress,
	buttonTitle,
	...props
}) => {
	console.log("Rect button.js ");
	return (
		<TouchableOpacity
			style={{
				backgroundColor: "#9932cc",
				padding: SIZES.small,
				borderRadius: SIZES.extraLarge,
				minWidth: minWidth,
				...props,
			}}
			onPress={handlePress}>
			<Text
				style={{
					fontSize: fontSize,
					color: "#fff",
					textAlign: "center",
				}}>
				{buttonTitle}
			</Text>
		</TouchableOpacity>
	);
};
