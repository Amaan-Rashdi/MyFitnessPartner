/** @format */

import React from "react";
import { useNavigation } from "@react-navigation/native";
import { View, Image } from "react-native";

import { COLORS, SIZES, SHADOWS, assets } from "../../constants";
import { BlogParts, NFTTitle, EthPrice } from "./BlogParts";
import { RectButton, CircleButton } from "./Button";

const BlogFlatList = ({ data }) => {
	const navigation = useNavigation();
	// console.log(data);

	return (
		<View
			style={{
				backgroundColor: "#fff",
				borderRadius: SIZES.font,
				marginBottom: SIZES.extraLarge,
				margin: SIZES.base,
				// ...SHADOWS.dark,
			}}>
			<View
				style={{
					width: "100%",
					height: 250,
				}}>
				<Image
					source={data.image}
					resizeMode='cover'
					style={{
						width: "100%",
						height: "100%",
						borderTopLeftRadius: SIZES.font,
						borderTopRightRadius: SIZES.font,
					}}
				/>

				{/* <CircleButton imgUrl={assets.heart} right={10} top={10} /> */}
			</View>

			{/* <SubInfo /> */}
			<BlogParts />
			<View style={{ width: "100%", padding: SIZES.font }}>
				<NFTTitle
					title={data.title}
					subTitle='Fitness Blog'
					titleSize={SIZES.large}
					subTitleSize={SIZES.small}
				/>

				<View
					style={{
						marginTop: SIZES.font,
						flexDirection: "row",
						justifyContent: "space-between",
						alignItems: "center",
					}}>
					<EthPrice />
					<RectButton
						buttonTitle='Read more'
						minWidth={120}
						fontSize={SIZES.font}
						handlePress={() => navigation.navigate("BlogReadMore", { data })}
					/>
				</View>
			</View>
		</View>
	);
};

export default BlogFlatList;
