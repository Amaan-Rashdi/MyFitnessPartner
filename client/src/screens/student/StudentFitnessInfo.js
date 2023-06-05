/** @format */

import React, { useState } from "react";
import {
  View,
  Text,
  TouchableOpacity,
  TextInput,
  Platform,
  StyleSheet,
  ScrollView,
  StatusBar,
  Alert,
} from "react-native";
import FontAwesome from "react-native-vector-icons/FontAwesome";
import Feather from "react-native-vector-icons/Feather";

//components
import InputField from "../../components/InputField";
import { useDispatch, useSelector } from "react-redux";
import { getUserApi, updateUserDataApi } from "../../redux/user/user.api";
import { updateUserAction } from "../../redux/user/user.actions";
const StudentFitnessInfo = (props) => {
  // const [data, setData] = React.useState({
  // 	weight: "",
  // 	bmi: "",
  // 	bodyFat: "",
  // 	check_textInputChange: false,
  // 	secureTextEntry: true,
  // 	confirm_secureTextEntry: true,
  // });

  const { currentUser } = useSelector((store) => store.user);
  const dispatch = useDispatch();
  const [weightStatus, setStatus] = React.useState("type to get status");
  const [weight, setWeight] = React.useState(30 || "");
  const [height, setHeight] = React.useState(66 || "");

  const [bodyFat, setBodyFat] = React.useState(1.0 || 0.0);
  const [age, setAge] = React.useState(25 || 0.0);

  // const [weightStatus, setStatus] = React.useState("type to get status");
  // const [weight, setWeight] = React.useState("");
  // const [height, setHeight] = React.useState(0);

  // const [bodyFat, setBodyFat] = React.useState(0.0);
  // const [age, setAge] = React.useState(0);
  const [bmi, Setbmi] = React.useState(0.0);
  const handleContinue = async () => {
    try {
      console.log(weight,bodyFat,age,height,bmi,currentUser.userid)
      await updateUserDataApi(currentUser.userid, {
       
        weight,
        bodyfat: bodyFat,
        age,
        height,
        bmi: currentUser.bmi,
        weightstatus : weightStatus,
      });

      const { data } = await getUserApi(currentUser.userid);
      dispatch(updateUserAction(data.data));

      props.navigation.navigate("GenderScreen");
    } catch (error) {

      Alert.alert("Something Went Wrong", [{ text: "Okay" }]);
    }
  };

  const ageHandler = (age) => {
    var agee = parseFloat(age);
    if (age <= 0 || isNaN(agee)) {
      setAge("Please input Valid Age");
    } else {
      setAge(agee);
    }
  };
  const weightConfirm = (weight) => {
    var cal = parseFloat(weight);
    if (isNaN(cal)) {
      setWeight("please input numeric values");
    } else {
      setWeight(cal);
    }
  };
  const setfat = (fat) => {
    setBodyFat(fat);
  };
  const weightStatusHandler = (bmi) => {
    var cal = parseFloat(bmi);
    if (isNaN(cal) || cal < 0) {
      setStatus("please input numeric values");
    } else if (cal <= 18.5 && cal > 0) {
      setStatus("Underweighted");
    } else if (cal <= 24.9 && cal >= 18.5) {
      setStatus("Healthy");
    } else if (cal <= 29.9 && cal >= 25) {
      setStatus("Overweighted");
    } else {
      setStatus("Obese");
    }
    // var age = 22;
    if (!isNaN(cal) && cal > 0 && parseInt(weight) > 0) {
      let bf = 1.2 * cal + 0.23 * age - 16.2;
      bf = bf.toFixed(2);
      setBodyFat(bf);
    }
    
    Setbmi(bmi);
  };

  return (
    <View style={styles.container}>
      <StatusBar backgroundColor="#9932cc" barStyle="light-content" />
      <View style={styles.header}>
        <Text style={styles.text_header}>Let us know a bit about you!</Text>
      </View>
      <View style={styles.footer}>
        <ScrollView>
          <Text style={styles.text_footer}>Weight (kg)</Text>
          <View style={styles.action}>
            <FontAwesome name="user-o" color="#05375a" size={20} />
            <TextInput
              placeholder="Your weight in kilograms"
              style={styles.textInput}
              autoCapitalize="none"
              onChangeText={(weight) => weightConfirm(weight)}
            />
          </View>
          <View>
            <Text style={{ fontWeight: "bold" }}>{weight + " KG"}</Text>
          </View>

          <Text
            style={[
              styles.text_footer,
              {
                marginTop: 35,
              },
            ]}
          >
            AGE
          </Text>
          <View style={styles.action}>
            <Feather name="battery" color="#05375a" size={20} />
            <TextInput
              placeholder="your age"
              style={styles.textInput}
              autoCapitalize="none"
              onChangeText={(age) => ageHandler(age)}
            />
          </View>
          <View>
            <Text style={{ fontWeight: "bold" }}>{age}</Text>
          </View>

          <Text
            style={[
              styles.text_footer,
              {
                marginTop: 35,
              },
            ]}
          >
            BMI (BODY MASS INDEX)
          </Text>
          <View style={styles.action}>
            <Feather name="activity" color="#05375a" size={20} />
            <TextInput
              placeholder="your BODY MASS INDEX "
              style={styles.textInput}
              autoCapitalize="none"
              onChangeText={(bmi) => weightStatusHandler(bmi)}
            />
          </View>
          {/* <InputField
						logoname='activity'
						placeholder='your BODY MASS INDEX '
						// onChangeText={(bmi) => weightStatusHandler(bmi)}
						onSub
					/> */}
          <View>
            <Text style={{ fontWeight: "bold" }}>{weightStatus}</Text>
          </View>

          <Text
            style={[
              styles.text_footer,
              {
                marginTop: 35,
              },
            ]}
          >
            HEIGHT
          </Text>

          <View style={styles.action}>
            <FontAwesome name="user-o" color="#05375a" size={20} />
            <TextInput
              value={height}
              placeholder="Your height in inches"
              style={styles.textInput}
              autoCapitalize="none"
              onChangeText={(height) => setHeight(height)}
            />
          </View>

          <Text
            style={[
              styles.text_footer,
              {
                marginTop: 35,
              },
            ]}
          >
            Body Fat
          </Text>
          <View style={styles.action}>
            <Feather name="heart" color="#05375a" size={20} />
            <Text style={{ fontWeight: "bold", marginLeft: 5 }}>
              {" "}
              your body fat {" " + bodyFat}
            </Text>
            {/* <TextInput
							placeholder='Your body fat'
							// secureTextEntry={data.secureTextEntry ? true : false}
							style={styles.textInput}
							autoCapitalize='none'
							// onChangeText={(val) => handlePasswordChange(val)}
						/> */}
            {/* <TouchableOpacity onPress={updateSecureTextEntry}>
							{data.secureTextEntry ? (
								<Feather name='eye-off' color='grey' size={20} />
							) : (
								<Feather name='eye' color='grey' size={20} />
							)}
						</TouchableOpacity> */}
          </View>

          <View style={styles.textPrivate}>
            <Text style={styles.color_textPrivate}>
              please make sure to provide
            </Text>
            <Text style={[styles.color_textPrivate, { fontWeight: "bold" }]}>
              {" "}
              right details
            </Text>
            <Text style={styles.color_textPrivate}> so,</Text>
            <Text style={[styles.color_textPrivate, { fontWeight: "bold" }]}>
              {" "}
              we can evaluate you better
            </Text>
          </View>
          <View style={styles.button}>
            <TouchableOpacity
              style={[
                styles.signIn,
                {
                  borderColor: "#9932cc",
                  borderWidth: 1,
                  marginTop: 15,
                },
              ]}
              onPress={handleContinue}
            >
              <Text
                style={[
                  styles.textSign,
                  {
                    color: "#9932cc",
                  },
                ]}
              >
                Continue
              </Text>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => props.navigation.navigate("SplashScreen")}
              style={[
                styles.signIn,
                {
                  backgroundColor: "#9932cc",
                  borderColor: "#9932cc",
                  borderWidth: 1,
                  marginTop: 15,
                },
              ]}
            >
              <Text
                style={[
                  styles.textSign,
                  {
                    color: "#fff",
                  },
                ]}
              >
                <Feather name="arrow-left" size={20} /> Go Back
              </Text>
            </TouchableOpacity>
          </View>
        </ScrollView>
      </View>
    </View>
  );
};

export default StudentFitnessInfo;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#9932cc",
  },
  header: {
    flex: 1,
    justifyContent: "flex-end",
    paddingHorizontal: 20,
    paddingBottom: 50,
  },
  footer: {
    flex: Platform.OS === "ios" ? 6 : 11,
    backgroundColor: "#fff",
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    paddingHorizontal: 20,
    paddingVertical: 30,
  },
  text_header: {
    color: "#fff",
    fontWeight: "bold",
    fontSize: 27,
  },
  text_footer: {
    color: "#9932cc",
    fontSize: 18,
  },
  action: {
    flexDirection: "row",
    marginTop: 10,
    borderBottomWidth: 1,
    borderBottomColor: "#9932cc",
    paddingBottom: 5,
  },
  textInput: {
    flex: 1,
    marginTop: Platform.OS === "ios" ? 0 : -10,
    paddingLeft: 10,
    color: "#05375a",
  },
  button: {
    alignItems: "center",
    marginTop: 50,
  },
  signIn: {
    width: "100%",
    height: 50,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 10,
  },
  textSign: {
    fontSize: 18,
    fontWeight: "bold",
  },
  textPrivate: {
    flexDirection: "row",
    flexWrap: "wrap",
    marginTop: 20,
  },
  color_textPrivate: {
    color: "grey",
  },
  action: {
    flexDirection: "row",
    marginTop: 10,
    borderBottomWidth: 1,
    borderBottomColor: "#9932cc",
    paddingBottom: 5,
  },
  textInput: {
    flex: 1,
    marginTop: Platform.OS === "ios" ? 0 : -12,
    paddingLeft: 10,
    color: "#05375a",
  },
});

{
  /* 
						<TouchableOpacity
							onPress={() => navigation.goBack()}
							style={[
								styles.signIn,
								{
									borderColor: "#9932cc",
									borderWidth: 1,
									marginTop: 15,
								},
							]}>
							<Text
								style={[
									styles.textSign,
									{
										color: "#9932cc",
									},
								]}>
								Sign In
							</Text>
						</TouchableOpacity> */
}
{
  /* <View style={styles.action}>
						<Feather name='map-pin' color='#05375a' size={20} />
						<TextInput
							placeholder='Gym you are currently working in'
							style={styles.textInput}
							autoCapitalize='none'
						/>
					</View> */
}
