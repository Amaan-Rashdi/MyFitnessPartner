/** @format */

import { StyleSheet, Text, View, FlatList } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import React from "react";
import { FAB } from "react-native-paper";
export default class Announcement extends React.Component {
	render() {
		const data = [
			{
				id: 1,
				name: "Anikat",
				annoucementText: "Fee Reminder",
			},
			{
				id: 2,
				name: "Kumar",
				annoucementText: "Fee Reminder",
			},
			{
				id: 3,
				name: "Tariq",
				annoucementText: "Fee Reminder",
			},
			{
				id: 4,
				name: "Ali",
				annoucementText: "Fee Reminder",
			},
			{
				id: 5,
				name: "Hamdan",
				annoucementText: "Fee Reminder",
			},
			{
				id: 6,
				name: "Jahanzaib",
				annoucementText: "Fee Reminder",
			},
			{
				id: 7,
				name: "Mehmood",
				annoucementText: "Fee Reminder",
			},
			{
				id: 8,
				name: "Mehmood",
				annoucementText: "Fee Reminder",
			},
			{
				id: 9,
				name: "Mehmood",
				annoucementText: "Fee Reminder",
			},
			{
				id: 10,
				name: "Mehmood",
				annoucementText: "Fee Reminder",
			},
			{
				id: 11,
				name: "Mehmood",
				annoucementText: "Fee Reminder",
			},
			{
				id: 12,
				name: "Mehmood",
				annoucementText: "Fee Reminder",
			},
			{
				id: 13,
				name: "Mehmood",
				annoucementText: "Fee Reminder",
			},
			{
				id: 14,
				name: "Mehmood",
				annoucementText: "Fee Reminder",
			},
		];
		return (
			<SafeAreaView style={styles.container}>
				<View>
					<FlatList
						data={data}
						keyExtractor={(item, index) => {
							return item.id;
						}}
						renderItem={({ item }) => {
							return (
								<View style={styles.notification}>
									<View style={{ flexDirection: "row", marginLeft: 10 }}>
										<View>
											<Text style={{ color: "#9932cc", fontSize: 20 }}>
												{item.name}
											</Text>
											<Text style={{ color: "#64676B", fontSize: 18 }}>
												{item.annoucementText}
											</Text>
										</View>
										{/* <View
    <Text style={{color: '#64676B'}}>{item.notification}</Text>
  </View> */}
									</View>
								</View>
							);
						}}
					/>
				</View>
				<FAB
					style={styles.fab}
					icon='plus'
					small='true'
					onPress={() => console.log("Pressed2")}
				/>
			</SafeAreaView>
		);
	}
}

// export default Announcement;

const styles = StyleSheet.create({
	notification: {
		color: "black",
		flex: 1,
		width: "100%",
		height: "100%",
		padding: 15,
		backgroundColor: "white",
	},
	container: {
		flex: 1,
	},
	fab: {
		position: "absolute",
		bottom: 10,
		right: 10,
		width: "12%",
		backgroundColor: "#9932cc",
		alignItems: "center",
	},
});
