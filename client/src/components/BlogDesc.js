/** @format */

import React, { useState } from "react";
import { View, Text } from "react-native";

import { BlogParts, NFTTitle, EthPrice } from "./BlogParts";
import { COLORS, SIZES, FONTS } from "../../constants";

const BlogDesc = ({ data }) => {
	return (
		<>
			<View
				style={{
					width: "100%",
					flexDirection: "row",
					justifyContent: "space-between",
					alignItems: "center",
				}}>
				{/* <NFTTitle
					title='Mr: Maqsood'
					subTitle='{data.gymAdress}'
					titleSize={SIZES.extraLarge}
					subTitleSize={SIZES.font}
				/> */}
				{/* {"Monthly Fee"}/ */}
				<EthPrice price='' />
			</View>
			{/* <View style={{ marginTop: 5 }}>
				<InfoHeadingComponent
					iconName='mail-outline'
					headingLine='{data.emailAddress}'
				/>
				<InfoHeadingComponent
					iconName='call-outline'
					headingLine='{data.gymNumber}'
				/>
				<InfoHeadingComponent
					iconName='card-outline'
					headingLine='data.registrationFee}'
				/>
				<InfoHeadingComponent
					iconName='globe-outline'
					headingLine='{data.website}'
				/>
				<InfoHeadingComponent
					iconName='time-outline'
					headingLine='{data.timings}'
				/>
			</View> */}

			{/* <Text>{""}</Text>
			<NFTTitle
				title={"Other Details"}
				subTitle={data.gymAdress}
				titleSize={SIZES.extraLarge}
				subTitleSize={SIZES.font}
			/> */}
			<View
				style={{
					// marginVertical: 10,
					backgroundColor: "#9233cc",
					height: 5,
					width: "100%",
				}}></View>
			<View style={{ marginVertical: 10 }}>
				<Text
					style={{
						fontSize: 24,
						fontWeight: "bold",
						letterSpacing: 4,
						color: "#9932cc",
					}}>
					{data.title}
				</Text>
				<View
					style={{
						marginVertical: 10,
						backgroundColor: "#9233cc",
						height: 5,
						width: "100%",
					}}></View>
				<View
					style={{
						marginTop: SIZES.base,
					}}>
					<Text
						style={{
							color: COLORS.secondary,
							fontSize: 18,
							letterSpacing: 1.2,

							lineHeight: 20,
						}}>
						{data.blogtext}
						{/* {!readMore && "..."}
						<Text
							style={{
								color: "#9932cc",
								fontSize: SIZES.small,
							}}
							onPress={() => {
								if (!readMore) {
									setText(data.blogtext);
									setReadMore(true);
								} else {
									setText(data.blogtext.slice(0, 100));
									setReadMore(false);
								}
							}}>
							{readMore ? " Show Less" : " Read More"}
						</Text> */}
					</Text>
				</View>
			</View>
		</>
	);
};

export default BlogDesc;
