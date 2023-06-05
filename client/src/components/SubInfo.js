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
				}}>
				{title}
			</Text>

			<Text
				style={{
					fontSize: subTitleSize,
					color: "#9932cc",
				}}>
				<Icon name='location-outline' size={17} />

				{" " + subTitle}
			</Text>
		</View>
	);
};

export const EthPrice = ({ price }) => {
	return (
		<View style={{ flexDirection: "row", alignItems: "center" }}>
			{/* <Image
				source={assets.eth}
				resizeMode='contain'
				style={{ width: 20, height: 20, marginRight: 2 }}
			/> */}
			<View style={{ width: 20, height: 20, marginRight: 5 }}>
				<Icon name='card-outline' size={20} />
			</View>

			<Text
				style={{
					fontSize: SIZES.font,
					color: "#9932cc",
				}}>
				{"Month Rs: " + price}
			</Text>
		</View>
	);
};

const ImageCmp = ({ imgUrl, index }) => {
	return (
		<Image
			source={imgUrl}
			resizeMode='contain'
			style={{
				width: 48,
				height: 48,
				marginLeft: index === 0 ? 0 : -SIZES.font,
			}}
		/>
	);
};

export const People = () => {
	return (
		<View style={{ flexDirection: "row" }}>
			{[assets.person02, assets.person03, assets.person04].map(
				(imgUrl, index) => (
					<ImageCmp imgUrl={imgUrl} index={index} key={`People-${index}`} />
				)
			)}
		</View>
	);
};

export const EndDate = () => {
	return (
		<View
			style={{
				paddingHorizontal: SIZES.font,
				paddingVertical: SIZES.base,
				backgroundColor: "#fff",
				borderRadius: SIZES.font,
				justifyContent: "center",
				alignItems: "center",
				// ...SHADOWS.light,
				elevation: 1,
				maxWidth: "50%",
			}}>
			<Text
				style={{
					fontSize: SIZES.small,
					color: "#9932cc",
				}}>
				Ratings (50)
			</Text>
			<Text
				style={{
					fontSize: SIZES.medium,
					color: "#9932cc",
				}}>
				4.5
			</Text>
		</View>
	);
};

export const SubInfo = () => {
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
			<EndDate />
		</View>
	);
};
