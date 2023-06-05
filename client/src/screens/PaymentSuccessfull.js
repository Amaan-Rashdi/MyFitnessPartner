/** @format */

import {
  SafeAreaView,
  StyleSheet,
  Text,
  Image,
  View,
  TouchableOpacity,
  StatusBar,
} from "react-native";
import React from "react";
import { CircleButton } from "../components/Button";
import left from "./../../assets/icons/left.png";
import { NFTTitle } from "../components/SubInfo";
import check from "../../assets/icons/check.png";
const PaymentSuccessfull = ({ navigation, route }) => {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <View style={{ width: "100%", height: 340, padding: 50 }}>
        <Image
          source={check}
          resizeMode="contain"
          style={{ width: "100%", height: "100%", padding: 10 }}
        />
        <CircleButton
          imgUrl={left}
          handlePress={() => navigation.goBack()}
          left={15}
          top={StatusBar.currentHeight + 10}
        />
      </View>
      {/* <Text>PaymentSuccessfull</Text> */}
      <View
        style={{
          alignItems: "center",
        }}
      >
        <NFTTitle
          title={route.params.title}
          subTitle={route.params.value}
          titleSize={24}
          subTitleSize={14}
        />
      </View>

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
        <TouchableOpacity
          // onPress={navigation.navigate("PaymentSuccessfull")}
          onPress={() => navigation.navigate(route.params.backScreenName)}
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
            Go Back
          </Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

export default PaymentSuccessfull;

const styles = StyleSheet.create({});
