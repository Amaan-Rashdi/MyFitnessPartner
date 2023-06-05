/** @format */

import React from "react";
import {
	View,
	Text,
	SafeAreaView,
	Image,
	StatusBar,
	FlatList,
} from "react-native";

import { assets } from "../../constants/assets";
import left from "./../../assets/icons/left.png";
import heart from "../../assets/icons/heart.png";
import {
	CircleButton,
	FocusedStatusBar,
	SubInfo,
	DetailsDesc,
	DetailsBid,
} from "../components";

import BlogDesc from "../components/BlogDesc";
const DetailsHeader = ({ data, navigation }) => (
	<View style={{ width: "100%", height: 373 }}>
		<Image
			source={data.image}
			resizeMode='cover'
			style={{ width: "100%", height: "100%" }}
		/>

		<CircleButton
			imgUrl={left}
			handlePress={() => navigation.goBack()}
			left={15}
			top={StatusBar.currentHeight + 10}
		/>

		<CircleButton
			imgUrl={heart}
			right={15}
			top={StatusBar.currentHeight + 10}
		/>
	</View>
);

const BlogReadMore = ({ route, navigation }) => {
	const { data } = route.params;

	return (
		<SafeAreaView style={{ flex: 1 }}>
			<FocusedStatusBar
				barStyle='dark-content'
				backgroundColor='transparent'
				translucent={true}
			/>

			<View
				style={{
					width: "100%",
					position: "absolute",
					bottom: 0,
					paddingVertical: 14,
					justifyContent: "center",
					alignItems: "center",
					backgroundColor: "rgba(255,255,255,0.5)",
					zIndex: 1,
				}}>
				{/* <RectButton minWidth={170} fontSize={18} /> */}
			</View>

			<FlatList
				data={data.description}
				renderItem={({ item }) => (
					<DetailsBid bid={item} navigation={navigation} />
				)}
				keyExtractor={(item) => item.id}
				showsVerticalScrollIndicator={false}
				contentContainerStyle={{
					paddingBottom: 24 * 3,
				}}
				ListHeaderComponent={() => (
					<React.Fragment>
						<DetailsHeader data={data} navigation={navigation} />

						<View style={{ padding: 14 }}>
							<Text
								style={{
									fontSize: 12,
									fontWeight: "500",
									color: "grey",
								}}>
								26, MARCH 2022 * 10:26 AM
							</Text>
							<View style={{ padding: 14 }}>
								<Text
									style={{
										fontSize: 20,
										fontWeight: "bold",
										color: "black",
									}}>
									{data.author}
								</Text>
							</View>
							<BlogDesc data={data} />
						</View>
					</React.Fragment>
				)}
			/>
		</SafeAreaView>
	);
};

export default BlogReadMore;
