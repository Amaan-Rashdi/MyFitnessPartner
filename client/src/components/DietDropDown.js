/** @format */

import React, { useState } from "react";
import {
  StyleSheet,
  View,
  Text,
  TouchableOpacity,
  Image,
  StatusBar,
  Platform,
  Alert,
} from "react-native";
import { Dropdown, MultiSelect } from "react-native-element-dropdown";
// import { InputMode } from "react-native-paper/lib/typescript/components/TextInput/Adornment/enums";
import { CircleButton } from "../components";
import left from "../../assets/icons/left.png";
import { updateUserDietApi } from "../redux/user/user.api";
import { useSelector } from "react-redux";

const data = [
  { label: "The Paleo Diet", value: "1" },
  { label: "The Vegan Diet", value: "2" },
  { label: "Low-Carb Diets", value: "3" },
  { label: "The Dukan Diet", value: "4" },
  { label: "The Ultra-Low-Fat Diet", value: "5" },
  { label: "The Atkins Diet", value: "6" },
  { label: "The Zone Diet", value: "7" },
  { label: "Keto Diet", value: "8" },
];
const mealTime = [
  { label: "Breakfast", value: "0" },
  { label: "Lunch", value: "1" },
  { label: "Dinner", value: "2" },
];

const dataDiet = [
  { label: "Item 1", value: "1", name: "apple", calories: 70 },
  { label: "Item 2", value: "2", name: "banana", calories: 70 },
  { label: "Item 3", value: "3", name: "orange", calories: 70 },
  { label: "Item 4", value: "4", name: "Pineaaple", calories: 87 },
  { label: "Item 5", value: "5", name: "Egg", calories: 87 },
  { label: "Item 6", value: "6", name: "Chicken", calories: 87 },
  { label: "Item 7", value: "7", name: "Beef", calories: 82 },
  { label: "Item 8", value: "8", name: "Cabbage", calories: 82 },
];

const DietDropDown = ({ navigation, meal, setMeal, diet, setDiet }) => {
  const [dropdown, setDropdown] = useState(null);
  const [dropdownMeal, setMealDropdown] = useState(null);
  const [selected, setSelected] = useState([]);

  const _renderItem = (item) => {
    // console.log(item);
    return (
      <View>
        <View style={[styles.item, { backgroundColor: "#FFF" }]}>
          <Text style={styles.textItem}> {item.label}</Text>
          {/* <Text style={styles.textItem}>{item.label}</Text> */}
          <Image style={styles.icon} source={left} />
        </View>
        <View
          style={{
            backgroundColor: "#fff",
            height: 0.5,
            width: "100%",
          }}
        ></View>
      </View>
    );
  };
  const _renderMeal = (item) => {
    // console.log("clicked" + item.label);
    return (
      <View style={{}}>
        <View style={styles.item}>
          <Text style={styles.textItem}>{item.name}</Text>

          <Text style={styles.textItem}> Calories {item.calories}</Text>
          {/* <Image style={styles.icon} source={left} /> */}
        </View>
        <View
          style={{
            backgroundColor: "#fff",
            height: 0.5,
            width: "100%",
          }}
        ></View>
      </View>
    );
  };

  return (
    <View style={styles.container}>
      <View
        style={{
          width: "100%",
          height: 70,
          borderBottomLeftRadius: 20,
          borderBottomRightRadius: 20,
          position: "absolute",
        }}
      >
        <CircleButton
          imgUrl={left}
          handlePress={() => navigation.goBack()}
          left={5}
          // marginBottom={40}

          top={
            Platform.OS === "ios"
              ? StatusBar.currentHeight + 10
              : StatusBar.currentHeight - 20
          }
        />
      </View>
      <Text style={styles.sectionTitle}>Select Diet Plan </Text>
      <Dropdown
        style={styles.dropdown2}
        containerStyle={styles.shadow}
        data={mealTime}
        // search
        searchPlaceholder="Search"
        labelField="label"
        selectedTextStyle={styles.selectedTextStyle}
        inputSearchStyle={styles.inputSearchStyle}
        valueField="value"
        label="Dropdown"
        placeholder="Meal"
        placeholderStyle={styles.placeholderStyle}
        value={dropdownMeal}
        onChange={(item) => {
          setMealDropdown(item.value);
          setMeal(item.label);
          console.log("selected", item);
        }}
        // renderLeftIcon={() => <Image style={styles.icon} source={left} />}
        renderItem={(item) => _renderItem(item)}
        textError="Error"
      />
      <Dropdown
        style={styles.dropdown}
        containerStyle={styles.shadow}
        data={data}
        search
        searchPlaceholder="Search"
        labelField="label"
        selectedTextStyle={styles.selectedTextStyle}
        inputSearchStyle={styles.inputSearchStyle}
        valueField="value"
        label="Dropdown"
        placeholder="Select Diet"
        placeholderStyle={styles.placeholderStyle}
        value={dropdown}
        onChange={(item) => {
          setDropdown(item.value);
          setDiet(item.label);
        }}
        // renderLeftIcon={() => <Image style={styles.icon} source={left} />}
        renderItem={(item) => _renderItem(item)}
        textError="Error"
      />

      <MultiSelect
        style={styles.dropdown}
        data={dataDiet}
        placeholderStyle={styles.placeholderStyle}
        labelField="name"
        valueField="value"
        label="Multi Select"
        activeColor="#E8EAED"
        placeholder="Select Meals"
        search
        selectedTextStyle={styles.selectedTextStyle}
        inputSearchStyle={styles.inputSearchStyle}
        searchPlaceholder="Search"
        value={selected}
        onChange={(item) => {
          setSelected(item);
        }}
        renderItem={(item) => _renderMeal(item)}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    // flex: 1,
    // backgroundColor: "white",
    padding: 40,
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
  // dropdown: {
  // 	// backgroundColor: "white",
  // 	borderBottomColor: "gray",
  // 	borderBottomWidth: 0.5,
  // 	marginTop: 20,
  // },
  dropdown: {
    margin: 16,
    borderBottomWidth: 0.5,
    height: 50,
    backgroundColor: "white",
    borderRadius: 12,
    padding: 12,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.2,
    shadowRadius: 1.41,

    elevation: 2,
  },
  dropdown2: {
    margin: 16,
    borderBottomWidth: 0.5,
    height: 50,
    backgroundColor: "white",
    borderRadius: 12,
    padding: 12,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.2,
    shadowRadius: 1.41,

    elevation: 2,
  },
  inputSearchStyle: {
    height: 40,
    fontSize: 16,
  },
  selectedTextStyle: {
    // paddingLeft: 20,
    marginLeft: 5,
    // borderRadius: 50,
    fontSize: 18,
    color: "#9932CC",
  },
  icon: {
    marginRight: 5,
    width: 18,
    height: 18,
  },
  item: {
    // padding: 20,
    padding: 17,

    paddingVertical: 17,
    paddingHorizontal: 4,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  textItem: {
    // alignItems: "flex-start",
    // flex: 1,
    paddingHorizontal: 10,
    display: "flex",
    alignContent: "space-between",
    color: "#9932CC",
    fontSize: 16,
  },
  placeholderStyle: {
    fontSize: 16,
  },
  shadow: {
    shadowColor: "#9932CC",
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.5,
    shadowRadius: 1.41,
    elevation: 5,
  },
});

export default DietDropDown;
