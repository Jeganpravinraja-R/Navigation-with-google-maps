import { StatusBar } from "expo-status-bar";
import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import AuthNavigator from "./navigation/AuthNavigator";
import AppNavigator from "../navigation/AppNavigator";
import navigationTheme from "./navigation/navigationTheme";

export default function App() {
  return (
    <NavigationContainer theme={navigationTheme}>
      <AuthNavigator/>
      <AppNavigator/>
    </NavigationContainer>
  )
}
