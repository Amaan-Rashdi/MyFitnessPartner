/** @format */

import { StyleSheet, Text, View, ScrollView, StatusBar } from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import avatar from "../../assets/avatar.png";
import { Avatar, Title, Caption } from "react-native-paper";
import InfoHeadingComponent from "../components/InfoHeadingComponent";

import CardComponent from "../components/CardComponent";

const CandidateProfile = ({ navigation, route }) => {
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
              {route.params.name}
            </Title>
            {/* <Caption style={styles.caption}>@anikat_kumar</Caption> */}
          </View>
        </View>
      </View>
      <View style={styles.footer}>
        <View style={styles.userInfoSection}>
          <InfoHeadingComponent
            iconName="location-outline"
            headingLine={route.params.gymName}
          />
          <InfoHeadingComponent
            iconName="call-outline"
            headingLine={route.params.phoneNumber}
          />
          <InfoHeadingComponent
            iconName="mail-outline"
            headingLine={route.params.emailAddress}
          />
          <View style={{ flexDirection: "row" }}>
            <InfoHeadingComponent
              iconName="fitness-outline"
              headingLine="BMI :"
            />
            <Caption style={styles.caption1}>{route.params.bmi}</Caption>
          </View>
          <View style={{ flexDirection: "row" }}>
            <InfoHeadingComponent
              iconName="body-outline"
              headingLine="Weight :"
            />
            <Caption style={styles.caption1}>
              {route.params.bodyWeight} Kgs
            </Caption>
          </View>
          <View style={{ flexDirection: "row" }}>
            <InfoHeadingComponent
              iconName="barbell-outline"
              headingLine="Weight Status:"
            />
            <Caption style={styles.caption1}>
              {route.params.weightStatus}
            </Caption>
          </View>
          <View style={{ flexDirection: "row" }}>
            <InfoHeadingComponent
              iconName="flame-outline"
              headingLine="Calories Count :"
            />
            <Caption style={styles.caption1}>
              {route.params.caloriesTotal}
            </Caption>
          </View>
          <View style={{ flexDirection: "row" }}>
            <InfoHeadingComponent
              iconName="card-outline"
              headingLine="Fee Status :"
            />
            <Caption style={styles.caption1}>{route.params.feeStatus}</Caption>
          </View>
          <View style={{ flexDirection: "row" }}>
            <InfoHeadingComponent
              iconName="fast-food-outline"
              headingLine="Current Diet :"
            />
            <Caption style={styles.caption1}>
              {route.params.currentDietPlan}
            </Caption>
          </View>
          <View style={{ flexDirection: "row" }}>
            <InfoHeadingComponent
              iconName="body-outline"
              headingLine="Body Fat :"
            />
            <Caption style={styles.caption1}>{route.params.bodyFat}</Caption>
          </View>
          {/* <CardComponent /> */}
          <View style={styles.infoBoxWrapper}>
            <CardComponent
              title="Progress"
              navigation={navigation}
              name={"Mr, " + route.params.name}
              data={route.params}
              ScreenName="Progress"
              userType="Trainer"
            />

            <CardComponent
              title="Suggest"
              navigation={navigation}
              name={route.params.name}
              ScreenName="TaskSuggestion"
            />
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
    flex: 0,
    height: "100%",
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
