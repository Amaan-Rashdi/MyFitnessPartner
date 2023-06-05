/** @format */

import React from "react";
import { useNavigation } from "@react-navigation/native";
import { View, Image } from "react-native";

import { COLORS, SIZES, SHADOWS, assets } from "../../constants";
import { SubInfo, EthPrice, NFTTitle } from "./SubInfo";
import { RectButton, CircleButton } from "./Button";
import Icon from "react-native-vector-icons/Ionicons";
import { useDispatch } from "react-redux";
import { gymSubscriptionAction } from "../redux/user/user.actions";

const NFTCard = ({ data }) => {
  const dispatch = useDispatch();
  const navigation = useNavigation();

  return (
    <View
      style={{
        backgroundColor: "#fff",
        borderRadius: SIZES.font,
        marginBottom: SIZES.extraLarge,
        margin: SIZES.base,
        // ...SHADOWS.dark,
      }}
    >
      <View
        style={{
          width: "100%",
          height: 250,
        }}
      >
        <Image
          source={data.image}
          resizeMode="cover"
          style={{
            width: "100%",
            height: "100%",
            borderTopLeftRadius: SIZES.font,
            borderTopRightRadius: SIZES.font,
          }}
        />

        <CircleButton imgUrl={assets.heart} right={10} top={10} />
      </View>

      <SubInfo />

      <View style={{ width: "100%", padding: SIZES.font }}>
        <NFTTitle
          title={data.gymname}
          subTitle={data.address}
          titleSize={SIZES.large}
          subTitleSize={SIZES.small}
        />

        <View
          style={{
            marginTop: SIZES.font,
            flexDirection: "row",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <EthPrice price={data.monthlyfee} />
          <RectButton
            buttonTitle="More Details"
            minWidth={120}
            fontSize={SIZES.font}
            handlePress={() => {
              dispatch(gymSubscriptionAction(data));
              navigation.navigate("Details", { data });
            }}
          />
        </View>
      </View>
    </View>
  );
};

export default NFTCard;
