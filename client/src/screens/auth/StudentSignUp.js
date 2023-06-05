/** @format */

import React, { useEffect, useState } from "react";
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
import axios from "axios";
import { createUserApi } from "../../redux/user/user.api";
import { getTraineridbyemail } from "../../redux/trainers/trainers.api";

const StudentSignUp = (props) => {
  const [data, setData] = React.useState({
    username: "",
    firstname:"",
    lastname:"",
    sex:"",
    contact:"",
    address:"",
    password: "",
    
    confirm_password: "",
    check_textInputChange: false,
    //check_gymChange: false,
    check_firstnameChange: false,
    check_lastnameChange: false,
    check_sexChange: false,
    check_contactChange: false,
    check_addressChange: false,
    check_traineremailChange: false,
    check_emailChange: false,
    secureTextEntry: true,
    confirm_secureTextEntry: true,
  });
  const [email , setEmail] = useState();
  const [Temail , setTEmail] = useState();
  const [checkValidEmail , setCheckValidEmail] = useState(false);
  const [checkTValidEmail , setCheckTValidEmail] = useState(false);
  const handleCheckEmail = text => {

    let re = /\S+@\S+\.\S+/;
    let regex = /^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/im;

    setEmail(text);
    if (re.test(text) || regex.test(text)) {
      setCheckValidEmail(false);
    } else {
      setCheckValidEmail(true);
    }
  };
  const handleTCheckEmail = text => {
    let re = /\S+@\S+\.\S+/;
    let regex = /^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/im;

    setTEmail(text);
    if (re.test(text) || regex.test(text)) {
      setCheckTValidEmail(false);
    } else {
      setCheckTValidEmail(true);
    }
  };



  const textInputChange = (val) => {
    if (val.length !== 0) {
      setData({
        ...data,
        username: val,
        check_textInputChange: true,
      });
    } else {
      setData({
        ...data,
        username: val,
        check_textInputChange: false,
      });
    }
  };





  const handlesexChange = (val) => {
    if (val.length !== 0) {
      setData({
        ...data,
        sex: val,
        check_sexChange: true,
      });
    } else {
      setData({
        ...data,
        sex: val,
        check_sexChange: false,
      });
    }
  };
  const handlelastnameChange = (val) => {
    if (val.length !== 0) {
      setData({
        ...data,
        lastname: val,
        check_lastnameChange: true,
      });
    } else {
      setData({
        ...data,
        lastname: val,
        check_lastnameChange: false,
      });
    }
  };
  const handlecontactChange = (val) => {
    if (val.length !== 0) {
      setData({
        ...data,
        contact: val,
        check_contactChange: true,
      });
    } else {
      setData({
        ...data,
        contact: val,
        check_contactChange: false,
      });
    }
  };
  const handleaddressChange = (val) => {
    if (val.length !== 0) {
      setData({
        ...data,
        address: val,
        check_addressChange: true,
      });
    } else {
      setData({
        ...data,
        address: val,
        check_addressChange: false,
      });
    }
  };
  const handlefirstnameChange = (val) => {
    if (val.length !== 0) {
      setData({
        ...data,
        firstname: val,
        check_firstnameChange: true,
      });
    } else {
      setData({
        ...data,
        firstname: val,
        check_firstnameChange: false,
      });
    }
  };


  // const handleTrainerEmailChange = (val) => {
  //   if (val.length !== 0) {
  //     setData({
  //       ...data,
  //       traineremail: val,
  //       check_traineremailChange: true,
  //     });
  //   } else {
  //     setData({
  //       ...data,
  //       traineremail: val,
  //       check_traineremailChange: false,
  //     });
  //   }
  // };
  // const handleEmailChange = (val) => {
  //   if (val.length !== 0) {
  //     setData({
  //       ...data,
  //       email: val,
  //       check_emailChange: true,
  //     });
  //   } else {
  //     setData({
  //       ...data,
  //       email: val,
  //       check_emailChange: false,
  //     });
  //   }
  // };





  const handlePasswordChange = (val) => {
    setData({
      ...data,
      password: val,
    });
  };

  const handleConfirmPasswordChange = (val) => {
    setData({
      ...data,
      confirm_password: val,
    });
  };

  const updateSecureTextEntry = () => {
    setData({
      ...data,
      secureTextEntry: !data.secureTextEntry,
    });
  };

  const updateConfirmSecureTextEntry = () => {
    setData({
      ...data,
      confirm_secureTextEntry: !data.confirm_secureTextEntry,
    });
  };

  

  const handleSubmit = async () => {
    //Check if username is not empty
    if (!data.username || data.username === "") {
      Alert.alert(
        "Wrong Input!",
        "Username or password field cannot be empty.",
        [{ text: "Okay" }]
      );
      return;
    }


    try {
      const tid = await getTraineridbyemail(
        Temail
      );
      const td = tid.data.data
      const td1 = Object.values(td)
      const res = await createUserApi({
        username: data.username,
        firstname: data.firstname,
        lastname: data.lastname,
        sex: "male",
        contact: data.contact,
        age: 21,
        height: 5,
        weight: 67,
        calories: 220,
        feestatus: "paid",
        trainerid: td1,
        workouttype: "weight lose",
        email: email,
        address: data.address,
        password: data.password,
        bodyfat: 0.0,
        bmi : 0.0,
        weightstatus : "obese"
      });
      console.log("====================================");
      console.log(res.data);
      console.log("====================================");
    } catch (error) {
      console.log(error.message);
      Alert.alert("Something went wrong!", "Please Try Again.", [
        { text: "Okay" },
      ]);
    }

    // navigation.navigate("MainScreen");
  };

  return (
    <View style={styles.container}>
      <StatusBar backgroundColor="#9932cc" barStyle="light-content" />
      <View style={styles.header}>
        <Text style={styles.text_header}>Register Now!</Text>
      </View>
      <View style={styles.footer}>
        <ScrollView>
          <Text style={styles.text_footer}>Username</Text>
          <View style={styles.action}>
            <FontAwesome name="user-o" color="#05375a" size={20} />
            <TextInput
              placeholder="Your Username"
              style={styles.textInput}
              autoCapitalize="none"
              onChangeText={(val) => textInputChange(val)}
            />
            {data.check_textInputChange ? (
              <View>
                <Feather name="check-circle" color="green" size={20} />
              </View>
            ) : null}
          </View>

          <Text
            style={[
              styles.text_footer,
              {
                marginTop: 35,
              },
            ]}
          >
            First Name
          </Text>
          <InputField
            logoname="user"
            placeholder="First name"
            //value={data.gymname}
            onChangeText={(val) => handlefirstnameChange(val)}
          />
          {data.check_firstnameChange ? (
              <View>
                <Feather name="check-circle" color="green" size={20} />
              </View>
            ) : null}

<Text
            style={[
              styles.text_footer,
              {
                marginTop: 35,
              },
            ]}
          >
            Last Name
          </Text>
          <InputField
            logoname="user"
            placeholder="Last name"
            //value={data.gymname}
            onChangeText={(val) => handlelastnameChange(val)}
          />
          {data.check_lastnameChange ? (
              <View>
                <Feather name="check-circle" color="green" size={20} />
              </View>
            ) : null}










          


             <Text
            style={[
              styles.text_footer,
              {
                marginTop: 35,
              },
            ]}
          >
             Contact
          </Text>
          <InputField
            logoname="phone"
            placeholder="Contact"
            //value={data.gymname}
            onChangeText={(val) => handlecontactChange(val)}
          />
          {data.check_contactChange ? (
              <View>
                <Feather name="check-circle" color="green" size={20} />
              </View>
            ) : null}







<Text
            style={[
              styles.text_footer,
              {
                marginTop: 35,
              },
            ]}
          >
            Student Email Address
          </Text>
          <InputField logoname="activity" placeholder="Student Email address" 
          
          onChangeText={(val) => handleCheckEmail(val)}
          />
         {checkValidEmail ? (
        <Text style={styles.textFailed}>Wrong format email</Text>
      ) : (
        <Text style={styles.textFailed}> </Text>
      )}









<Text
            style={[
              styles.text_footer,
              {
                marginTop: 35,
              },
            ]}
          >
            Trainer Email Address
          </Text>
          <InputField logoname="activity" placeholder="Your Trainer email, You are enrolled" 
          
          onChangeText={(val) => handleTCheckEmail(val)}
          />
           {checkTValidEmail ? (
        <Text style={styles.textFailed}>Wrong format email</Text>
      ) : (
        <Text style={styles.textFailed}> </Text>
      )}


<Text
            style={[
              styles.text_footer,
              {
                marginTop: 35,
              },
            ]}
          >
            Address
          </Text>
          <InputField
            logoname="home"
            placeholder="Address"
            //value={data.gymname}
            onChangeText={(val) => handleaddressChange(val)}
          />
          {data.check_addressChange ? (
              <View>
                <Feather name="check-circle" color="green" size={20} />
              </View>
            ) : null}



          <Text
            style={[
              styles.text_footer,
              {
                marginTop: 35,
              },
            ]}
          >
            Password
          </Text>
          <View style={styles.action}>
            <Feather name="lock" color="#05375a" size={20} />
            <TextInput
              placeholder="Your Password"
              secureTextEntry={data.secureTextEntry ? true : false}
              style={styles.textInput}
              autoCapitalize="none"
              onChangeText={(val) => handlePasswordChange(val)}
            />
            <TouchableOpacity onPress={updateSecureTextEntry}>
              {data.secureTextEntry ? (
                <Feather name="eye-off" color="grey" size={20} />
              ) : (
                <Feather name="eye" color="grey" size={20} />
              )}
            </TouchableOpacity>
          </View>

          <Text
            style={[
              styles.text_footer,
              {
                marginTop: 35,
              },
            ]}
          >
            Confirm Password
          </Text>
          <View style={styles.action}>
            <Feather name="lock" color="#05375a" size={20} />
            <TextInput
              placeholder="Confirm Your Password"
              secureTextEntry={data.confirm_secureTextEntry ? true : false}
              style={styles.textInput}
              autoCapitalize="none"
              onChangeText={(val) => handleConfirmPasswordChange(val)}
            />
            <TouchableOpacity onPress={updateConfirmSecureTextEntry}>
              {data.secureTextEntry ? (
                <Feather name="eye-off" color="grey" size={20} />
              ) : (
                <Feather name="eye" color="grey" size={20} />
              )}
            </TouchableOpacity>
          </View>

          <View style={styles.textPrivate}>
            <Text style={styles.color_textPrivate}>
              By signing up you agree to our
            </Text>
            <Text style={[styles.color_textPrivate, { fontWeight: "bold" }]}>
              {" "}
              Terms of service
            </Text>
            <Text style={styles.color_textPrivate}> and</Text>
            <Text style={[styles.color_textPrivate, { fontWeight: "bold" }]}>
              {" "}
              Privacy policy
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
              onPress={() => {
								console.log(data)
								handleSubmit();
								props.navigation.navigate("MainGoalScreen")
								
							  }}
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

export default StudentSignUp;

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
    fontSize: 30,
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
