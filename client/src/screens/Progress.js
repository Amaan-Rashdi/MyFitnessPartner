/** @format */

import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  Dimensions,
  StatusBar,
  Image,
  TouchableOpacity,
  ScrollView,
  Platform,
} from "react-native";
import React from "react";
import {
  LineChart,
  BarChart,
  PieChart,
  ProgressChart,
  ContributionGraph,
  StackedBarChart,
} from "react-native-chart-kit";

import left from "../../assets/icons/left.png";
import cover from "../../assets/images/viewGym.jpg";
import { CircleButton } from "../components";
import ButtonPress from "../components/buttons";

const Progress = (props) => {
  const dietData = {
    labels: ["Fat", "Carb", "Protein"], // optional
    data: [0.27, 0.3, 0.63],
  };

  const chartConfig = {
    backgroundColor: "#9932cc",
    backgroundGradientFrom: "#9932cc",
    backgroundGradientTo: "#ffa726",

    backgroundGradientToOpacity: 0.5,
    color: (opacity = 10) => `rgba(255, 255, 255, ${opacity})`,
    strokeWidth: 2, // optional, default 3
    barPercentage: 0.6,
    useShadowColorFromDataset: false, // optional
  };
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
  const caloriesData = {
    labels: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat"],
    datasets: [
      {
        data: [
          Math.random() * 500 + 200,
          Math.random() * 500 + 200,
          Math.random() * 500 + 200,
          Math.random() * 500 + 200,
          Math.random() * 500 + 200,
          Math.random() * 500 + 200,
        ],
      },
    ],
  };

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView alwaysBounceVertical="true">
        {
          <View
            style={{
              width: "100%",
              height: 200,
              borderBottomLeftRadius: 20,
              borderBottomRightRadius: 20,
              position: "relative",
            }}
          >
            <Image
              source={cover}
              resizeMode="cover"
              style={{ width: "100%", height: "100%", opacity: 0.8 }}
            />
            <Text
              style={{
                position: "absolute",
                color: "#fff",
                fontSize: Platform.OS === "ios" ? 40 : 35,
                paddingTop: 140,
                marginLeft: 20,
                fontWeight: "bold",
              }}
            >
              Eat Well, Grow Well
            </Text>
            <CircleButton
              imgUrl={left}
              handlePress={() => props.navigation.goBack()}
              left={15}
              top={StatusBar.currentHeight + 10}
            />
          </View>
        }
        <View
          style={{
            paddingTop: 4,
          }}
        >
          <Text
            style={[
              styles.sectionTitle,
              {
                textAlign: "left",
                color: "#ffa726",
              },
            ]}
          >
            Good Morning, {props.route.params.userType}
          </Text>
          <Text style={{ fontSize: 14, padding: 10, lineHeight: 20 }}>
            Let's Have a look at{" "}
            {props.route.params.name + "'s Progress, " + "\n"}
            Make Sure to Eat eat well and Stay Hyderated.
          </Text>
        </View>
        <TouchableOpacity style={{ padding: 5 }}>
          <LineChart
            data={{
              labels: [
                "Jan",
                "Feb",
                "Mar",
                "Apr",
                "May",
                "Jun",
                "Jul",
                "Aug",
                "Sep",
                "Oct",
                "Nov",
                "Dec",
              ],
              datasets: [
                {
                  data: [
                    Math.random() * 80 + 70,
                    Math.random() * 90 + 60,
                    Math.random() * 95 + 60,
                    Math.random() * 101 + 60,
                    Math.random() * 102 + 60,
                    Math.random() * 103 + 60,
                    Math.random() * 100 + 60,
                    Math.random() * 104 + 60,
                    Math.random() * 105 + 60,
                    Math.random() * 110 + 60,
                    Math.random() * 115 + 60,
                    Math.random() * 120 + 60,
                  ],
                },
              ],
            }}
            width={Dimensions.get("window").width - 10} // from react-native
            height={250}
            yAxisLabel=""
            yAxisSuffix="kg"
            yAxisInterval={1} // optional, defaults to 1
            chartConfig={{
              backgroundColor: "#9932cc",
              backgroundGradientFrom: "#9932cc",
              backgroundGradientTo: "#ffa726",
              decimalPlaces: 1, // optional, defaults to 2dp
              color: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
              labelColor: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
              style: {
                borderRadius: 16,
              },
              propsForDots: {
                r: "6",
                strokeWidth: "3",
                stroke: "#ffa726",
              },
            }}
            bezier
            style={{
              marginVertical: 10,
              borderRadius: 16,
            }}
          />
          <Text style={styles.sectionTitle}>Weight</Text>
        </TouchableOpacity>
        <TouchableOpacity>
          <BarChart
            style={{ marginVertical: 10, borderRadius: 16, padding: 5 }}
            data={caloriesData}
            width={Dimensions.get("window").width - 10}
            height={250}
            yAxisLabel=""
            chartConfig={chartConfig}
            verticalLabelRotation={30}
          />
          <Text style={styles.sectionTitle}>Calories</Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() =>
            props.navigation.navigate("SuggestDiet", {
              data: dietData,
              studentName: props.route.params.name,
              userid: props.route.params.userid,
              // personalStats: personalProgress,
            })
          }
        >
          <ProgressChart
            style={{ marginVertical: 10, borderRadius: 16, padding: 5 }}
            data={dietData}
            width={Dimensions.get("window").width - 10}
            height={250}
            strokeWidth={20}
            radius={40}
            chartConfig={chartConfigDiet}
            hideLegend={false}
          />
          <Text style={styles.sectionTitle}>Stats</Text>
        </TouchableOpacity>

        {props.route.params.comingFrom == "student" ? (
          <View
            style={{
              alignItems: "center",
              margin: 10,
              paddingBottom: 20,
            }}
          >
            <ButtonPress
              title="Videos By Trainer"
              navigation={props.navigation}
              to="StudentVideosList"
              data={props.route.params.data}
              padding={15}
              width={200}
              backgroundColor="#ffa530"
              paddingRight={20}
            />
          </View>
        ) : (
          <View
            style={{
              alignItems: "center",
              margin: 10,
              paddingBottom: 20,
            }}
          >
            <ButtonPress
              title="Suggest Meal / Diet"
              navigation={props.navigation}
              to="CandidateDietPlan"
              data={props.route.params.data}
              padding={15}
              width={200}
              backgroundColor="#ffa530"
              paddingRight={20}
            />

            <ButtonPress
              title="Videos By Student"
              navigation={props.navigation}
              to="TrainerVideosList"
              data={props.route.params.data}
              padding={15}
              width={200}
              backgroundColor="#ffa530"
              paddingRight={20}
            />
          </View>
        )}
      </ScrollView>
    </SafeAreaView>
  );
};

export default Progress;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  sectionTitle: {
    paddingTop: 15,
    textAlign: "center",
    padding: 10,
    color: "#9932cc",
    fontSize: 24,
    fontWeight: "bold",
    // fontStyle: "italic",
  },
});
