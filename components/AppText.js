import React from "react";
import { Text, StyleSheet, Platform } from "react-native";

function AppText(props) {
  return <Text style={[styles.text, style]}></Text>;
}

const styles = StyleSheet.create({
  text: {
    fontSize: 18,
    fontFamily: Platform.OS === "android" ? "roboto" : "Avenir",
  },
});

export default AppText;
