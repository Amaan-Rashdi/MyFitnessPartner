/** @format */

import {
	StyleSheet,
	Text,
	View,
	FlatList,
	SafeAreaView,
	TouchableOpacity,
} from "react-native";

import React, { Component, useEffect, useState } from "react";
import { Avatar } from "react-native-paper";
import blogone from "../../assets/blogone.png";
import blogtwo from "../../assets/blogtwo.png";

import { NFTCard, HomeHeader, FocusedStatusBar } from "../components";
import { COLORS, NFTData } from "../../constants";
import BlogCard from "../components/BlogCard";
import BlogFlatList from "../components/BlogFlatList";

// import assets from "../../assets";

const blogs = [
	{
		id: 1,
		title: "World Health Day 2022 Workout Challenge",
		blogtext:
			"We don’t go into the week with no meal ideas and no clue what we’re eating for dinner in 2 hours. Having a plan is CRUCIAL to staying committed and choosing healthy options. Write out your meals for the whole week (or at least, general ideas) so you know what you’re eating and can avoid that last minute take out. Too much work?? We feel you. That’s why we’re making it super easy with our 4-week Hot Body Meal Plan. We wrote out your meals for you so you don’t have to, plus we’re giving you TONS of healthy recipes so you never run out of ideas. It couldn’t be easier to follow this plan, and the best part is the food tastes amazing and makes you FEEL amazing, too. It’s never been so easy to choose healthy nutrition. Grab your Hot Body Meal Plan here! Meal prep Don’t worry, this doesn’t mean you need to make every meal. Prep easy foods you can mix and match. Some of our faves to have on deck are grilled chicken, quinoa, roasted veggies and sauces or salad dressing!",
		image: blogone,
		author: "Muneer Ahmed",
	},
	{
		id: 2,
		title: "Maintain Your Holiday Routine",
		blogtext:
			"As we dive into full holiday mode I want you to stick to the habits you’ve been building this month and focus on 3 things: Your Nutrition: =Plan your dinners. Prep your breakfast. Choose your treats! Your Workouts: Wake up 15-30 minutes early to get them done. Break them up if you need to. Lean on Team LSF for encouragement when you’re not feeling it. Yourself: Take time for you! Get at least 15 minutes of self care each day. Set boundaries and keep them. Enjoy your time with family and friends!",
		image: blogtwo,
		author: "Faraz Ali",
	},
];

const HomeScreen = () => {
	// useEffect(() => {
	// 	const backHandler = BackHandler.addEventListener(
	// 		"hardwareBackPress",
	// 		() => true
	// 	);
	// 	return () => backHandler.remove();
	// }, []);
	return (
		<SafeAreaView style={{ flex: 1 }}>
			<FocusedStatusBar backgroundColor={"#9932cc"} />
			{/* 
			<View style={styles.header}>
				<Text style={styles.text_header}>
					Some Fitness Blogs we've got for you.{"\n\n"}
					<Text style={{ fontSize: 14 }}>
						Type Announcement all students will be notified immediately.
					</Text>
				</Text>
			</View> */}
			{/* <TouchableOpacity></TouchableOpacity> */}
			<View style={{ flex: 1 }}>
				<View style={{ zIndex: 0 }}>
					<FlatList
						data={blogs}
						renderItem={({ item }) => <BlogFlatList data={item} />}
						keyExtractor={(item) => item.id}
						showsVerticalScrollIndicator={false}
						ListHeaderComponent={<BlogCard />}
					/>
				</View>

				<View
					style={{
						position: "relative",
						top: 0,
						bottom: 0,
						right: 0,
						left: 0,
						zIndex: -1,
					}}>
					<View style={{ height: 300, backgroundColor: "#9932cc" }} />
					<View style={{ flex: 1, backgroundColor: "#9932cc" }} />
				</View>
			</View>
		</SafeAreaView>
	);
};

export default HomeScreen;

const styles = StyleSheet.create({
	header: {
		justifyContent: "flex-end",
		padding: 20,
		paddingBottom: 30,
	},
	text_header: {
		color: "#9932cc",
		fontWeight: "bold",
		fontSize: 27,
	},
});
