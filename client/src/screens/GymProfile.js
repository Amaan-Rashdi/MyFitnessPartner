/** @format */

import { StyleSheet, Text, View, ScrollView } from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import avatar from "../../assets/avatar.png";
import { Avatar, Title, Caption } from "react-native-paper";
import InfoHeadingComponent from "../components/InfoHeadingComponent";

import CardComponent from "../components/CardComponent";

const GymProfile = ({ navigation, route }) => {
	return (
		<SafeAreaView style={styles.container}>
			<View style={styles.userInfoSection}>
				<View
					style={[styles.header, { marginTop: 40, flexDirection: "column" }]}>
					<Avatar.Image source={avatar} size={80} />
					<View style={{ marginLeft: 5 }}>
						<Title
							style={[
								styles.title,
								{
									marginTop: 15,
									marginBottom: 5,
									color: "#fff",
								},
							]}>
							{route.params.name}
						</Title>
						{/* <Caption style={styles.caption}>@anikat_kumar</Caption> */}
					</View>
				</View>
			</View>
			<View style={styles.footer}>
				<View style={styles.userInfoSection}>
					<InfoHeadingComponent
						iconName='location-outline'
						headingLine={route.params.gymname}
					/>
					<InfoHeadingComponent
						iconName='call-outline'
						headingLine={route.params.contact}
					/>
					<InfoHeadingComponent
						iconName='mail-outline'
						headingLine={route.params.email}
					/>

					<View style={{ flexDirection: "row" }}>
						<InfoHeadingComponent
							iconName='card-outline'
							headingLine='Monthly Fee:'
						/>
						<Caption style={styles.caption1}>{route.params.monthlyfee}</Caption>
					</View>
					<View style={{ flexDirection: "row" }}>
						<InfoHeadingComponent
							iconName='person-add-outline'
							headingLine='Registration Fee :'
						/>
						<Caption style={styles.caption1}>
							{route.params.registrationfee}
						</Caption>
					</View>
					<View style={{ flexDirection: "row" }}>
						<InfoHeadingComponent
							iconName='globe-outline'
							headingLine='Website :'
						/>
						<Caption style={styles.caption1}>{route.params.website}</Caption>
					</View>
					<View style={{ flexDirection: "row" }}>
						<InfoHeadingComponent
							iconName='timer-outline'
							headingLine='Timings :'
						/>
						<Caption style={styles.caption1}>{(route.params.starttiming) + "" + (route.params.endtiming)}</Caption>
					</View>

					{/* <CardComponent /> */}
					<View style={styles.infoBoxWrapper}>
						<CardComponent title='Trainers' />
					</View>
				</View>
			</View>
		</SafeAreaView>
	);
};

export default GymProfile;

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: "#9932cc",
	},
	header: {
		flex: 0,
		justifyContent: "center",
		alignItems: "center",
	},
	infoBoxWrapper: {
		marginTop: 30,

		borderColor: "#9932cc",
		flexDirection: "row",
		justifyContent: "space-between",
		height: 80,
		width: 300,
	},
	infoBox: {
		borderRadius: 20,
		width: "50%",
		alignItems: "center",
		justifyContent: "center",
	},
	footer: {
		flex: 1,
		backgroundColor: "#fff",
		borderTopLeftRadius: 30,
		borderTopRightRadius: 30,
		paddingVertical: 50,
		paddingHorizontal: 20,
	},

	userInfoSection: {
		paddingHorizontal: 30,
		marginBottom: 25,
	},
	title: {
		fontSize: 24,
		fontWeight: "bold",
	},
	caption: {
		fontSize: 14,
		lineHeight: 14,
		fontWeight: "500",
	},
	caption1: {
		fontSize: 14,
		lineHeight: 16.5,
		fontWeight: "bold",
		marginLeft: 3,
	},
});
