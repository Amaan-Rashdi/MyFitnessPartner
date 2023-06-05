/** @format */

import React, { useState } from "react";
import { View, Text } from "react-native";

import { EthPrice, NFTTitle } from "./SubInfo";
import { COLORS, SIZES, FONTS } from "../../constants";
import { Caption } from "react-native-paper";
import InfoHeadingComponent from "./InfoHeadingComponent";
const DetailsDesc = ({ data }) => {
	// const [text, setText] = useState(data.description.slice(0, 100));
	const [text, setText] = useState();
	const [readMore, setReadMore] = useState(false);

	return (
		<>
			<View
				style={{
					width: "100%",
					flexDirection: "row",
					justifyContent: "space-between",
					alignItems: "center",
				}}>
				<NFTTitle
					title={data.gymname}
					subTitle={data.address}
					titleSize={SIZES.extraLarge}
					subTitleSize={SIZES.font}
				/>
				{/* {"Monthly Fee"}/ */}
				<EthPrice price={data.monthlyfee} />
			</View>
			<View style={{ marginTop: 5 }}>
				<InfoHeadingComponent
					iconName='mail-outline'
					headingLine={data.email}
				/>
				<InfoHeadingComponent
					iconName='call-outline'
					headingLine={data.contact}
				/>
				<InfoHeadingComponent
					iconName='card-outline'
					headingLine={"Registration Fee: " + data.registrationfee}
				/>
				<InfoHeadingComponent
					iconName='globe-outline'
					headingLine={data.website}
				/>
				<InfoHeadingComponent
					iconName='time-outline'
					headingLine={(data.starttiming) + "-" + (data.endtiming)}
				/>
			</View>
			{/* <Text>{""}</Text>
			<NFTTitle
				title={"Other Details"}
				subTitle={data.gymAdress}
				titleSize={SIZES.extraLarge}
				subTitleSize={SIZES.font}
			/> */}
			<View style={{ marginVertical: SIZES.extraLarge * 1.5 }}>
				<Text
					style={{
						fontSize: SIZES.font,

						color: "#9932cc",
					}}>
					Description
				</Text>
				<View
					style={{
						marginTop: SIZES.base,
					}}>
					<Text
						style={{
							color: COLORS.secondary,
							fontSize: SIZES.small,

							lineHeight: SIZES.large,
						}}>
						{text}
						{!readMore && "..."}
						<Text
							style={{
								color: "#9932cc",
								fontSize: SIZES.small,
							}}
							onPress={() => {
								if (!readMore) {
									setText(data.description);
									setReadMore(true);
								} else {
									setText(data.description.slice(0, 100));
									setReadMore(false);
								}
							}}>
							{readMore ? " Show Less" : " Read More"}
						</Text>
					</Text>
				</View>
			</View>
		</>
	);
};

export default DetailsDesc;
