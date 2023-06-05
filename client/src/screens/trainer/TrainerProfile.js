/** @format */

import React, { useEffect, useState } from "react";
import { View, SafeAreaView, StyleSheet, Alert } from "react-native";
import { Avatar, Title, Caption } from "react-native-paper";
import avatar from "../../../assets/avatar.png";
//component
import TouchRippleComponent from "../../components/TouchRippleComponent";
import InfoHeadingComponent from "../../components/InfoHeadingComponent";
import { useDispatch, useSelector } from "react-redux";
import {
  getAllTrainersGymsApi,
  getAllTrainersStudentsAPi,
} from "../../redux/trainers/trainers.api";
import {
  trainerLoadGymsAction,
  trainerLoadStudentsAction,
} from "../../redux/trainers/trainers.actions";

const TrainerProfile = (props) => {
  const { currentUser } = useSelector((store) => store.user);
  const trainer = useSelector((store) => store.trainer);

  const dispatch = useDispatch();
  const [trainerProfile, setTrainerProfile] = useState({
    noofgyms: "N/A",
    noofstudents: "N/A",
  });

  useEffect(() => {
    fetchTrainerProfile();
  }, []);

  const fetchTrainerProfile = async () => {
    try {
      // console.log(currentUser);
      const gyms = await getAllTrainersGymsApi(currentUser.Trainerid);
      const students = await getAllTrainersStudentsAPi(currentUser.Trainerid);

      setTrainerProfile({
        noofgyms: gyms.data.data.length,
        noofstudents: students.data.data.length,
      });

      dispatch(trainerLoadGymsAction(gyms.data.data));
      dispatch(trainerLoadStudentsAction(students.data.data));

      // if (!result) {
      //   Alert.alert(
      //     "Trainer profile not found for this user!",
      //     "Username or password is incorrect.",
      //     [{ text: "Okay" }]
      //   );
      //   return;
      // }
      // setTrainerProfile(result);
    } catch (error) {
      Alert.alert("Something went wrong", error.message, [{ text: "Okay" }]);
    }
  };

  // const myCustomShare = async () => {
  // 	const shareOptions = {
  // 		message:
  // 			"Order your next meal from FoodFinder App. I've already ordered more than 10 meals on it.",
  // 		url: files.appLogo,
  // 		// urls: [files.image1, files.image2]
  // 	};

  // 	try {
  // 		const ShareResponse = await Share.open(shareOptions);
  // 		console.log(JSON.stringify(ShareResponse));
  // 	} catch (error) {
  // 		console.log("Error => ", error);
  // 	}
  // };
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.userInfoSection}>
        <View style={{ flexDirection: "row", marginTop: 40 }}>
          <Avatar.Image source={avatar} size={80} />
          <View style={{ marginLeft: 20 }}>
            <Title
              style={[
                styles.title,
                {
                  marginTop: 15,
                  marginBottom: 5,
                },
              ]}
            >
              {currentUser.firstname || "Anikat"}
            </Title>
            <Caption style={styles.caption}>
              {" "}
              {currentUser.email || "Anikat@gmail.com"}
            </Caption>
          </View>
        </View>
      </View>

      <View style={styles.userInfoSection}>
        <InfoHeadingComponent
          iconName="location-outline"
          headingLine={currentUser.address}
        />
        <InfoHeadingComponent
          iconName="call-outline"
          headingLine={currentUser.contact}
        />
        <InfoHeadingComponent
          iconName="mail-outline"
          headingLine={currentUser.email}
        />
      </View>

      <View style={styles.infoBoxWrapper}>
        <View
          style={[
            styles.infoBox,
            {
              backgroundColor: "#9932cc",
              borderRightColor: "#fff",
              borderRightWidth: 1,
            },
          ]}
        >
          <Title style={{ color: "white" }}>{trainer.students.length}</Title>
          <Caption style={{ color: "white" }}>Students</Caption>
        </View>
        <View style={[styles.infoBox, { backgroundColor: "#9932cc" }]}>
          <Title style={{ color: "white" }}> {trainer.gyms.length}</Title>
          <Caption style={{ color: "white" }}>Gyms</Caption>
        </View>
      </View>

      <View style={styles.menuWrapper}>
        <TouchRippleComponent
          iconName="people-outline"
          displayLine="Your Students"
          navigation={props.navigation}
          to="StudentList"
        />
        {/* <TouchRippleComponent
					iconName='credit-card'
					displayLine='Your Favourites'
				/> */}
        <TouchRippleComponent
          iconName="barbell-outline"
          displayLine="Your Gyms"
          navigation={props.navigation}
          to="GymsList"
        />
        {/* <TouchRippleComponent
					iconName='power-outline'
					displayLine='Log Out'
					navigation={props.navigation}
					to=''
				/> */}
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
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

  infoBoxWrapper: {
    borderWidth: 1,
    borderColor: "#9932cc",
    flexDirection: "row",
    height: 100,
  },
  infoBox: {
    width: "50%",
    alignItems: "center",
    justifyContent: "center",
  },
  menuWrapper: {
    marginTop: 10,
  },
});
export default TrainerProfile;
//#9932cc
