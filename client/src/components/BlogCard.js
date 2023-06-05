/** @format */

import React from "react";
import { View, Text, Image, TextInput } from "react-native";
import { COLORS, FONTS, SIZES, assets } from "../../constants";
import avatar from "../../assets/avatar.png";
import { useSelector } from "react-redux";

const BlogCard = () => {
  // console.log(onSearch);
  const { currentUser } = useSelector((store) => store.user);
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
        {/* <Image
					source={logo}
					resizeMode='contain'
					style={{ width: 90, height: 25 }}
				/> */}

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
          Let’s have a look at fitness blogs by our trainers
        </Text>
      </View>

      <View style={{ marginTop: SIZES.font }}>
        <View
          style={{
            width: "100%",
            borderRadius: SIZES.font,
            backgroundColor: "#9233cc",
            flexDirection: "row",
            alignItems: "center",
            paddingHorizontal: SIZES.font,
            paddingVertical: SIZES.small - 2,
          }}
        ></View>
      </View>
    </View>
  );
};

export default BlogCard;
