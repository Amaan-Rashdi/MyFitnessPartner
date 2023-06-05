import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer } from "@react-navigation/native";
import WelcomeScreen from "../screens/WelcomeScreen";
import LoginScreen from "../screens/auth/LoginScreen";

export default function Navigation() {
  const RootStack = createStackNavigator();

  return (
    <NavigationContainer>
      <RootStack.Navigator initialRouteName="SplashScreen">
        <RootStack.Screen
          options={{
            headerShown: false,
          }}
          name="SplashScreen"
          component={WelcomeScreen}
        />
        {/* Login Screen */}
        <RootStack.Screen
          options={{
            headerShown: false,
          }}
          name="LoginScreen"
          component={LoginScreen}
        />
      </RootStack.Navigator>
    </NavigationContainer>
    // <View>
    //   <Text>navigation</Text>
    // </View>
  );
}

const styles = StyleSheet.create({});
