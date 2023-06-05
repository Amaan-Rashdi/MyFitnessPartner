/** @format */

import React, { useState } from "react";
import {
	KeyboardAvoidingView,
	StyleSheet,
	Text,
	View,
	TextInput,
	TouchableOpacity,
	StatusBar,
	Keyboard,
	ScrollView,
} from "react-native";
import { CircleButton } from "../components";
import Task from "../components/Task";
import left from "../../assets/icons/left.png";

const TaskSuggestion = (props) => {
	const [task, setTask] = useState();
	const [taskItems, setTaskItems] = useState([]);

	const handleAddTask = () => {
		Keyboard.dismiss();
		setTaskItems([...taskItems, task]);
		setTask(null);
	};

	const completeTask = (index) => {
		let itemsCopy = [...taskItems];
		itemsCopy.splice(index, 1);
		setTaskItems(itemsCopy);
	};

	return (
		<View style={styles.container}>
			{/* Added this scroll view to enable scrolling when list gets longer than the page */}
			<ScrollView
				contentContainerStyle={{
					flexGrow: 1,
				}}
				keyboardShouldPersistTaps='handled'>
				{/* Today's Tasks */}
				<View
					style={{
						width: "100%",
						height: Platform.OS === "ios" ? 70 : 10,
						position: "relative",
						// zIndex: -1,
						// backgroundColor: "black",
					}}>
					<CircleButton
						backgroundColor='#9932cc'
						imgUrl={left}
						handlePress={() => props.navigation.goBack()}
						left={15}
						top={
							Platform.OS === "ios"
								? StatusBar.currentHeight + 50
								: StatusBar.currentHeight - 20
						}
					/>
					{/* <View style={{ width: "50%", alignItems: "center" }}>
						<TouchableOpacity style={styles.button} onPress={() => {}}>
							<Text style={styles.repair}>Upload Video</Text>
						</TouchableOpacity>
					</View> */}
				</View>
				<View style={styles.tasksWrapper}>
					<Text style={styles.sectionTitle}>
						Assign New tasks to,
						<Text style={{ color: "orange" }}> {props.route.params.name} </Text>
					</Text>
					<View style={styles.items}>
						{taskItems.map((item, index) => {
							return (
								<TouchableOpacity
									key={index}
									onPress={() => completeTask(index)}>
									<Task text={item} />
								</TouchableOpacity>
							);
						})}
					</View>
				</View>
			</ScrollView>

			<KeyboardAvoidingView
				behavior={Platform.OS === "ios" ? "padding" : "height"}
				style={styles.writeTaskWrapper}>
				<TextInput
					style={styles.input}
					placeholder={"Write a task or suggest exersice"}
					value={task}
					onChangeText={(text) => setTask(text)}
				/>
				<TouchableOpacity onPress={() => handleAddTask()}>
					<View style={styles.addWrapper}>
						<Text style={styles.addText}>+</Text>
					</View>
				</TouchableOpacity>
			</KeyboardAvoidingView>
		</View>
	);
};

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: "#E8EAED",
	},
	tasksWrapper: {
		paddingTop: 100,
		paddingHorizontal: 20,
	},
	sectionTitle: {
		color: "#9932cc",
		textAlign: "center",
		fontSize: 24,
		fontWeight: "bold",
	},
	items: {
		marginTop: 30,
	},
	writeTaskWrapper: {
		position: "absolute",
		bottom: 60,
		width: "100%",
		flexDirection: "row",
		justifyContent: "space-around",
		alignItems: "center",
	},
	input: {
		paddingVertical: 15,
		paddingHorizontal: 15,
		backgroundColor: "#FFF",
		borderRadius: 60,
		borderColor: "#9932cc",
		borderWidth: 1,
		width: 300,
	},
	button: {
		alignItems: "center",
		marginTop: 20,
		backgroundColor: "#fff",
		borderRadius: 10,
		padding: 20,
	},
	repair: {
		textAlign: "justify", // <-- the magic
		fontWeight: "bold",
		fontSize: 18,
		color: "#9932cc",
	},
	addWrapper: {
		width: 60,
		height: 60,
		backgroundColor: "#FFF",
		borderRadius: 60,
		justifyContent: "center",
		alignItems: "center",
		borderColor: "#9932cc",
		borderWidth: 1,
	},
	addText: {
		color: "#9932cc",
		fontWeight: "bold",
		fontSize: 24,
	},
});

export default TaskSuggestion;
