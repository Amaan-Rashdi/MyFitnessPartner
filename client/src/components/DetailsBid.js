/** @format */

import React from "react";
import { View, Text, Image, TouchableOpacity } from "react-native";

import { EthPrice } from "./SubInfo";
import { COLORS, SIZES, FONTS } from "../../constants";

const DetailsBid = ({ navigation, bid }) => {
	return (
		<View
			style={{
				width: "100%",
				flexDirection: "row",
				justifyContent: "space-between",
				alignItems: "center",
				marginVertical: SIZES.base,
				paddingHorizontal: SIZES.base,
			}}
			key={bid.id}>
			<Image source={bid.image} resizeMode='contain' style={{ height: 48 }} />

			<View
				style={{
					flex: 1,
					// alignItems: "center",
					paddingHorizontal: 8,
				}}>
				<TouchableOpacity
					onPress={() =>
						navigation.navigate("TrainerPackages", {
							name: bid.name,
							rating: bid.rating,
						})
					}>
					<Text
						style={{
							fontSize: 19,
							color: "#9932cc",
						}}>
						{bid.name}
					</Text>
				</TouchableOpacity>
				<Text
					style={{
						fontSize: 15,
						color: COLORS.secondary,
						marginTop: 3,
					}}>
					Ratings {bid.rating}
				</Text>
			</View>

			{/* <EthPrice price={bid.price} /> */}
		</View>
	);
};

export default DetailsBid;
