/** @format */

import React from "react";
import { View, Text, Image, TextInput } from "react-native";
import Icon from "react-native-vector-icons/Ionicons";
import { COLORS, FONTS, SIZES, assets } from "../../constants";
import { Avatar } from "react-native-paper";
import avatar from "../../assets/avatar.png";
import logo from "../../assets/icons/logo1.png";
import { useSelector } from "react-redux";

const HomeHeader = ({ onSearch }) => {
  const { currentUser } = useSelector((store) => store.user);

  // console.log(onSearch);
  return (
    <View
      style={{
        backgroundColor: "#9932cc",
        padding: SIZES.font,
      }}
    >
      <View
        style={{
          flexDirection: "row",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <Image
          source={logo}
          resizeMode="contain"
          style={{ width: 90, height: 25 }}
        />

        <View style={{ width: 45, height: 45 }}>
          <Image
            source={avatar}
            resizeMode="contain"
            style={{ width: "100%", height: "100%" }}
          />
          <Image
            source={assets.badge}
            resizeMode="contain"
            style={{
              position: "absolute",
              width: 15,
              height: 15,
              bottom: 0,
              right: 0,
            }}
          />
        </View>
      </View>

      <View style={{ marginVertical: SIZES.font }}>
        <Text
          style={{
            fontSize: SIZES.small,
            color: "#fff",
          }}
        >
          Hello {currentUser.firstname} 👋
        </Text>

        <Text
          style={{
            fontSize: SIZES.large,
            color: "#fff",
            marginTop: SIZES.base / 2,
          }}
        >
          Let’s find a Gym for you
        </Text>
      </View>

      <View style={{ marginTop: SIZES.font }}>
        <View
          style={{
            width: "100%",
            borderRadius: SIZES.font,
            backgroundColor: "white",
            flexDirection: "row",
            alignItems: "center",
            paddingHorizontal: SIZES.font,
            paddingVertical: SIZES.small - 2,
          }}
        >
          {/* <Text>Gym's </Text> */}
          {/* <Icon name='search-outline' size={20} /> */}
          {/* <Image
						source={assets.search}
						resizeMode='contain'
						style={{ width: 20, height: 20, marginRight: SIZES.base }}
					/>
					<TextInput
						placeholder="Search Gym's"
						style={{ flex: 1 }}
						onChangeText={onSearch}
					/> */}
        </View>
      </View>
    </View>
  );
};

export default HomeHeader;
