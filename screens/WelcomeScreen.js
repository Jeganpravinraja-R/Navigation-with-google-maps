import React from "react";
import { View, StyleSheet, ImageBackground, Image, Text } from "react-native";

import colors from "../config/colors";
import AppButton from "../components/AppButton";

function WelcomeScreen(props) {
  return (
    <ImageBackground
      blurRadius={1}
      style={styles.background}
      source={require("../assets/apps.jpg")}
    >
      <View style={styles.logoContainer}>
        <Image style={styles.logo} source={require("../assets/unnamed.png")} />
        <Text style={styles.tagLine}>college Finder way to future</Text>
      </View>
      <View style={styles.buttonContainer}>
        <AppButton title="login" />
        <AppButton title="signup" color="secondary" />
      </View>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  background: {
    flex: 1,
    justifyContent: "flex-end",
    alignItems: "center",
  },

  buttonContainer: {
    padding: 20,
    width: "100%",
  },

  logo: {
    width: 100,
    height: 100,
  },
  logoContainer: {
    position: "absolute",
    top: 50,
    alignItems: "center",
  },
  tagLine: {
    fontSize: 25,
    fontWeight: "600",
    paddingVertical: 20,
  },
});

export default WelcomeScreen;
