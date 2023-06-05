/** @format */

import {
  StyleSheet,
  Text,
  SafeAreaView,
  View,
  Image,
  Button,
  StatusBar,
  TouchableOpacity,
  Alert,
} from "react-native";
import React from "react";
import { RectButton, CircleButton } from "../../components/Button";
import left from "./../../../assets/icons/left.png";
import image from "./../../../assets/images/nft03.jpeg";
import { RadioButton } from "react-native-paper";
import { FocusedStatusBar } from "../../components";
import { NFTTitle } from "../../components/SubInfo";
import { useDispatch, useSelector } from "react-redux";
import { getUserApi, updateUserGymApi } from "../../redux/user/user.api";
import { userLoginApi } from "../../redux/login/login.api";
import { updateUserAction } from "../../redux/user/user.actions";

const DetailsHeader = ({ navigation }) => (
  <View style={{ width: "100%", height: 340 }}>
    <Image
      source={image}
      resizeMode="cover"
      style={{ width: "100%", height: "100%" }}
    />

    <CircleButton
      imgUrl={left}
      handlePress={() => navigation.goBack()}
      left={15}
      top={StatusBar.currentHeight + 10}
    />
  </View>
);

const TrainerPackages = ({ navigation, route }) => {
  const [value, setValue] = React.useState("first");
  const [amount, setAmount] = React.useState(0);
  const { gymSubcription, currentUser } = useSelector((store) => store.user);
  const dispatch = useDispatch();

  const handleSubscription = async () => {
    try {
      await updateUserGymApi(currentUser.userid, {
        gymName: gymSubcription.gymName,
        gymid: gymSubcription.id,
        fee: gymSubcription.monthlyfee,
      });

      const { data } = await getUserApi(currentUser.userid);
      dispatch(updateUserAction(data.data));
    } catch (error) {
      console.log(error);
      //Alert.alert("Something went wrong", error.message, [{ text: "Okay" }]);
    }

    navigation.navigate("CardPayment", {
      amount: value,
    });
  };

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <FocusedStatusBar
        barStyle="dark-content"
        backgroundColor="transparent"
        translucent={true}
      />
      {/* <DetailsHeader data={data} navigation={navigation} /> */}

      <DetailsHeader navigation={navigation} />
      <View
        style={{
          width: "100%",
          position: "absolute",
          bottom: 0,
          paddingVertical: 14,
          justifyContent: "center",
          alignItems: "center",
          backgroundColor: "rgba(255,255,255,0.5)",
          zIndex: 1,
        }}
      >
        {/* <Button title='Buy Subscription' onClick={console.log("FD")} /> */}
        {/* buttonTitle='More Details' minWidth={120} */}
        {/* fontSize={SIZES.font} */}
        {/* handlePress={() => navigation.navigate("Details", { data })} */}
        {/* <RectButton
					minWidth={170}
					fontSize={18}
					buttonTitle='Buy Subscription'
					handlePress={navigation.navigate("PaymentSuccessfull")}
				/> */}

        <TouchableOpacity
          // onPress={navigation.navigate("PaymentSuccessfull")}
          onPress={handleSubscription}
          style={{
            backgroundColor: "#9932cc",
            padding: 12,
            borderRadius: 24,
            minWidth: 170,
          }}
        >
          <Text
            style={{
              fontSize: 18,
              color: "#fff",
              textAlign: "center",
            }}
          >
            Buy Subscription
          </Text>
        </TouchableOpacity>
      </View>
      <View
        style={{
          alignItems: "center",
        }}
      >
        <NFTTitle
          title={route.params.name}
          subTitle={route.params.rating}
          titleSize={24}
          subTitleSize={14}
        />
      </View>

      <View>
        <View
          style={{
            color: "white",
            paddingTop: 50,
            paddingLeft: 20,
            paddingRight: 20,
          }}
        >
          <RadioButton.Group
            onValueChange={(value) => setValue(value)}
            value={value}
          >
            <View
              style={{
                color: "white",
                backgroundColor: "#efcfff",
                borderRadius: 15,
                height: 60,
              }}
            >
              <RadioButton.Item
                label="PKR. 4000 / Month"
                value="4000"
                color="#9932cc"
              />
            </View>

            <View style={{ padding: 10 }}></View>
            <View
              style={{
                color: "white",
                backgroundColor: "#efcfff",
                borderRadius: 15,
                height: 60,
              }}
            >
              <RadioButton.Item
                label="PKR. 35000 / Year"
                value="35000"
                color="#9932cc"
              />
            </View>
          </RadioButton.Group>

          {/* <RadioButton
						label=';djfdsfldsknfdslfnl'
						value='first'
						status={checked === "first" ? "checked" : "unchecked"}
						onPress={() => setChecked("first")}
						color='#9932cc'
					/>
					<RadioButton
						value='second'
						status={checked === "second" ? "checked" : "unchecked"}
						onPress={() => setChecked("second")}
						color='#9932cc'
					/> */}
        </View>
      </View>
      {/* <Text>{route.params.name}</Text> */}
    </SafeAreaView>
  );
};

export default TrainerPackages;

const styles = StyleSheet.create({});
