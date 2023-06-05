/** @format */

import { StyleSheet, Text, View, ScrollView, StatusBar } from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import avatar from "../../../assets/avatar.png";
import { Avatar, Title, Caption } from "react-native-paper";
import InfoHeadingComponent from "../../components/InfoHeadingComponent";
import CardComponent from "../../components/CardComponent";
import { useSelector } from "react-redux";

const CandidateProfile = ({ navigation, route }) => {
  const { currentUser } = useSelector((store) => store.user);

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.userInfoSection}>
        <View
          style={[styles.header, { marginTop: 40, flexDirection: "column" }]}
        >
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
              ]}
            >
              {currentUser.firstname}
            </Title>
            {/* <Caption style={styles.caption}>@anikat_kumar</Caption> */}
          </View>
        </View>
      </View>
      <View style={styles.footer}>
        <View style={styles.userInfoSection}>
          <InfoHeadingComponent
            iconName="location-outline"
            headingLine={currentUser.address || "N/A"}
          />

          <InfoHeadingComponent
            iconName="call-outline"
            headingLine={currentUser.contact || "N/A"}
          />
          <InfoHeadingComponent
            iconName="mail-outline"
            headingLine={currentUser.email || "N/A"}
          />
          <View style={{ flexDirection: "row" }}>
            <InfoHeadingComponent
              iconName="fitness-outline"
              headingLine="BMI :"
            />
            <Caption style={styles.caption1}>
              {currentUser.bmi || "N/A"}
            </Caption>
          </View>
          <View style={{ flexDirection: "row" }}>
            <InfoHeadingComponent
              iconName="body-outline"
              headingLine="Weight :"
            />
            <Caption style={styles.caption1}>{currentUser.weight} Kgs</Caption>
          </View>
          <View style={{ flexDirection: "row" }}>
            <InfoHeadingComponent
              iconName="barbell-outline"
              headingLine="Weight Status:"
            />
            <Caption style={styles.caption1}>OverWeighted</Caption>
          </View>

          <View style={{ flexDirection: "row" }}>
            <InfoHeadingComponent
              iconName="flame-outline"
              headingLine="Calories Count :"
            />
            <Caption style={styles.caption1}>{currentUser.calories}</Caption>
          </View>
          <View style={{ flexDirection: "row" }}>
            <InfoHeadingComponent
              iconName="card-outline"
              headingLine="Fee Status :"
            />
            <Caption style={styles.caption1}>{currentUser.feestatus}</Caption>
          </View>
          <View style={{ flexDirection: "row" }}>
            <InfoHeadingComponent
              iconName="transgender-outline"
              headingLine="Gender :"
            />
            <Caption style={styles.caption1}>{currentUser.sex}</Caption>
          </View>
          <View style={{ flexDirection: "row" }}>
            <InfoHeadingComponent
              iconName="fast-food-outline"
              headingLine="Suggested Diet :"
            />
            <Caption style={styles.caption1}>{currentUser.diet}</Caption>
          </View>
          <View style={{ flexDirection: "row" }}>
            <InfoHeadingComponent
              iconName="body-outline"
              headingLine="Body Fat :"
            />
            <Caption style={styles.caption1}>
              {currentUser.bodyfat || "N/A"} 
            </Caption>
          </View>
          {/* <CardComponent /> */}
          <View style={{ width: "100%", alignContent: "center" }}>
            <View style={[styles.infoBoxWrapper, {}]}>
              <CardComponent
                title="Progress"
                navigation={navigation}
                name="your"
                ScreenName="Progress"
                userType="Anikat"
                comingFrom="student"
              />
              {/* <CardComponent
							title='Suggest'
							navigation={navigation}
							name='TaskSuggestion'
							ScreenName='TaskSuggestion'
						/> */}
            </View>
          </View>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default CandidateProfile;

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
    // alignItems: "center",
    height: 80,

    marginLeft: 40,
    width: 300,
  },
  infoBox: {
    borderRadius: 20,
    width: "50%",
    alignItems: "center",
    justifyContent: "center",
  },
  footer: {
    flex: 0,
    backgroundColor: "#fff",
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    paddingVertical: 50,
    paddingHorizontal: 20,
    height: "100%",
  },

  userInfoSection: {
    paddingHorizontal: 80,
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
    // fontWeight: "bold",
    marginLeft: 3,
  },
});

{
  /* <View style={{ flexDirection: "row" }}> */
}

{
  /* <TouchRippleComponent
							iconName='barbell-outline'
							displayLine='Your Gyms'
							navigation={props.navigation}
							to='GymsList'
						/> */
}
{
  /* </View> */
}
