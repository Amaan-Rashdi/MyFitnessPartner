/** @format */

import {
  StyleSheet,
  Dimensions,
  Text,
  View,
  SafeAreaView,
  StatusBar,
  ScrollView,
  Platform,
} from "react-native";
import React from "react";

import { ProgressChart } from "react-native-chart-kit";
import left from "../../assets/icons/left.png";

import { CircleButton } from "../components";
import FitnessStats from "../components/FitnessStats";

const SuggestDiet = ({ navigation, route }) => {
  const { data } = route.params;
  // const arrayDetails = route.params.data.FitnessStats;
  const personalProgress = [
    { property: "Fat", percentage: 27 },
    { property: "Carb", percentage: 30 },
    { property: "Protein", percentage: 63 },
  ];

  const chartConfigDiet = {
    backgroundColor: "#9932cc",
    backgroundGradientFrom: "#ffa726",
    backgroundGradientTo: "#9932cc",

    backgroundGradientToOpacity: 0.5,
    color: (opacity = 10) => `rgba(255, 255, 255, ${opacity})`,
    strokeWidth: 2, // optional, default 3
    barPercentage: 0.6,
    useShadowColorFromDataset: false, // optional
  };

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView>
        <View
          style={{
            width: "100%",
            height: 100,
            borderBottomLeftRadius: 20,
            borderBottomRightRadius: 20,
            position: "relative",
          }}
        >
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
        <Text
          style={[
            styles.sectionTitle,
            {
              textAlign: "left",
              color: "#ffa726",
            },
          ]}
        >
          <Text style={{ color: "black" }}>Have a Look at Stats of, </Text>
          {route.params.studentName}
        </Text>
        <ProgressChart
          style={{ marginVertical: 10, borderRadius: 16, padding: 5 }}
          data={data}
          width={Dimensions.get("window").width - 10}
          height={250}
          strokeWidth={20}
          radius={40}
          chartConfig={chartConfigDiet}
          hideLegend={false}
        />
        <View>
          {personalProgress.map(({ property, percentage }) => (
            <FitnessStats key={property} index={property} value={percentage} />
          ))}
          {/* <FitnessStats data={data} /> */}
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default SuggestDiet;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  sectionTitle: {
    paddingTop: 0,
    textAlign: "center",
    padding: 10,
    color: "#9932cc",
    fontSize: 24,
    fontWeight: "bold",
    // fontStyle: "italic",
  },
  square: {
    width: 24,
    height: 24,
    backgroundColor: "orange",
    zIndex: 1,
    opacity: 0.4,
    borderRadius: 5,
    marginRight: 15,
  },
});
