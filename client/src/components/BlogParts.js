/** @format */

import React from "react";
import { View, Image, Text } from "react-native";
import Icon from "react-native-vector-icons/Ionicons";
import { SIZES, FONTS, COLORS, SHADOWS, assets } from "../../constants";

export const NFTTitle = ({ title, subTitle, titleSize, subTitleSize }) => {
	return (
		<View>
			<Text
				style={{
					fontSize: titleSize,
					color: "#9932cc",
					fontWeight: "bold",
				}}>
				{title}
			</Text>

			<Text
				style={{
					fontSize: subTitleSize,
					color: "#9932cc",
				}}>
				{/* <Icon name='location-outline' size={17} /> */}

				{subTitle}
			</Text>
		</View>
	);
};

export const EthPrice = ({ price }) => {
	return (
		<View style={{ flexDirection: "row", alignItems: "center" }}>
			<View style={{ width: 20, height: 20, marginRight: 5 }}>
				{/* <Icon name='card-outline' size={20} /> */}
			</View>

			<Text
				style={{
					fontSize: SIZES.font,
					color: "#9932cc",
				}}>
				{" "}
			</Text>
		</View>
	);
};

const ImageCmp = ({ index }) => {
	return (
		<View
			style={{
				width: 48,
				height: 48,
				marginLeft: index === 0 ? 0 : -SIZES.font,
			}}></View>
	);
};

export const People = () => {
	return (
		<View style={{ flexDirection: "row" }}>
			{[assets.person02, assets.person03, assets.person04].map((index) => (
				<ImageCmp key={index} />
			))}
		</View>
	);
};

export const BlogParts = () => {
	return (
		<View
			style={{
				width: "100%",
				paddingHorizontal: SIZES.font,
				marginTop: -SIZES.extraLarge,
				flexDirection: "row",
				justifyContent: "space-between",
			}}>
			<People />
			{/* <EndDate /> */}
		</View>
	);
};
