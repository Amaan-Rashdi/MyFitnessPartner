/** @format */

import {
	StyleSheet,
	Text,
	View,
	StatusBar,
	SafeAreaView,
	Image,
	TouchableOpacity,
} from "react-native";
import React, { useState } from "react";
import { CircleButton } from "../components/Button";
import left from "../../assets/icons/left.png";
import HeadingText from "../components/HeadingText";
import CheckBox from "../components/CheckBox";
import sign from "../../assets/icons/logo1.png";
import Feather from "react-native-vector-icons/Feather";
// import { getUserApi, updateUserDataApi } from "../../redux/user/user.api";
// import { updateUserAction } from "../../redux/user/user.actions";
// import { useDispatch, useSelector } from "react-redux";
// import { updateuserwithworkout } from "../../../server/src/userDao";


const MainGoalScreen = ({ navigation }) => {

	// const { currentUser } = useSelector((store) => store.user);
	// const [data, setData] = React.useState({
	// 	workouttype: "",
	// 	check_workouttypeChange: false,
		
	//   });

	//   const handleworkouttypeChange = (val) => {
	// 	if (val.length !== 0) {
	// 	  setData({
	// 		...data,
	// 		workouttype: val,
	// 		check_workouttypeChange: true,
	// 	  });
	// 	} else {
	// 	  setData({
	// 		...data,
	// 		workouttype: val,
	// 		check_workouttypeChange: false,
	// 	  });
	// 	}
	//   };

	//   const handleContinue = async () => {
	// 	try {
	// 	  await updateuserwithworkout(currentUser.userid, {
	// 		workouttype:workouttype
	// 	  });
	
	// 	  const { data } = await getUserApi(currentUser.userid);
	// 	  dispatch(updateUserAction(data.data));
	
	// 	  props.navigation.navigate("StudentFitnessInfo");
	// 	} catch (error) {
	// 	  Alert.alert("Something Went Wrong", [{ text: "Okay" }]);
	// 	}
	//   };


	//   const handleSubmit = async () => {
	
	//    try {
		 
	// 	 const res = await createTrainerApi({
	// 	   username: data.username,
	// 	   firstname: data.firstname,
	// 	   lastname: data.lastname,
	// 	   gymname: data.gymname,
	// 	   sex: data.sex,
	// 	   contact: data.contact,
	// 	   rating: "",
	// 	   fee: 0,
	// 	   email: data.email,
	// 	   address: data.address,
	// 	   password: data.password,
	// 	 });
	// 	 console.log("====================================");
	// 	 console.log(res.data);
	// 	 console.log("====================================");
   
	// 	 //   Alert.alert("Trainer Created Successfully, Now Login", [
	// 	 //     { text: "Okay" },
	// 	 //   ]);
	// 	 //   navigation.navigate()
	//    } catch (error) {
	// 	 console.log(error.message);
	// 	 Alert.alert("Something went wrong!", "Please Try Again.", [
	// 	   { text: "Okay" },
	// 	 ]);
	//    }
   
	//   
	//  };
   









	return (
		<SafeAreaView style={{ backgroundColor: "#FFF", flex: 1 }}>
			<View
				style={{
					width: "100%",
					height: 100,
					borderBottomLeftRadius: 20,
					borderBottomRightRadius: 20,
					position: "relative",
				}}>
				<CircleButton
					imgUrl={left}
					handlePress={() => navigation.goBack()}
					left={15}
					top={
						Platform.OS === "ios"
							? StatusBar.currentHeight
							: StatusBar.currentHeight - 20
					}
				/>
			</View>
			{/* <Header title='Let us know how we can help you' /> */}
			<View style={{ alignItems: "center" }}>
				<Image
					resizeMode='contain'
					style={{
						width: 80,
						height: 120,
					}}
					source={sign}
				/>
			</View>
			<HeadingText heading='Let us know how we can help you' />

			<View>
				<TouchableOpacity>
					<CheckBox boxTitle='Weight Loss       ' logoname='dumbbell' />
				</TouchableOpacity>
				<TouchableOpacity>
					<CheckBox boxTitle='Track My Fitness' logoname='weight-lifter' />
				</TouchableOpacity>
				<TouchableOpacity>
					<CheckBox boxTitle='Improve Health    ' logoname='run' />
				</TouchableOpacity>
				<TouchableOpacity>
					<CheckBox boxTitle='Gain Weight          ' logoname='weight' />
				</TouchableOpacity>
				{/* <CheckBox boxTitle='' /> */}
			</View>
			<View style={{ alignItems: "center" }}>
				<TouchableOpacity
					onPress={() => navigation.navigate("StudentFitnessInfo")}
					style={[
						styles.signIn,
						{
							backgroundColor: "#9932cc",
							borderColor: "#9932cc",
							borderWidth: 1,
							marginTop: 15,
						},
					]}>
					<Text
						style={[
							styles.textSign,
							{
								color: "#fff",
							},
						]}>
						Continue <Feather name='arrow-right' size={20} />
					</Text>
				</TouchableOpacity>
			</View>
		</SafeAreaView>
	);
};

export default MainGoalScreen;

const styles = StyleSheet.create({
	signIn: {
		width: "50%",
		height: 50,
		justifyContent: "center",
		alignItems: "center",
		borderRadius: 10,
	},
	textSign: {
		fontSize: 18,
		fontWeight: "bold",
	},
});
