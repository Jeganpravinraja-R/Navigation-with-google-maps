import React from "react";
import MapView, { Marker, Callout } from "react-native-maps";
import { View, Text, Image, StyleSheet } from "react-native";
import { useTheme } from "@react-navigation/native";

import { mapDarkStyle, mapStandardStyle } from "../config/mapData";

const MapScreen = () => {
  const theme = useTheme();

  return (
    <MapView
      style={styles.map}
      customMapStyle={theme.dark ? mapDarkStyle : mapStandardStyle}
      region={{
        latitude: 37.78825,
        longitude: -122.4324,
        latitudeDelta: 0.015,
        longitudeDelta: 0.0121,
      }}
    >
      <Marker
        coordinate={{
          latitude: 37.78825,
          longitude: -122.4324,
        }}
        image={require("../assets/map_marker.png")}
        title="Test Title"
        description="This is the test description"
      >
        <Callout tooltip>
          <View>
            <View style={styles.bubble}>
              <Text style={styles.name}>Favourite Restaurant</Text>
              {/* <Text>A short description</Text> */}
              <Image
                style={styles.image}
                source={require("../assets/banners/food-banner1.jpg")}
              />
            </View>
            <View style={styles.arrowBorder} />
            <View style={styles.arrow} />
          </View>
        </Callout>
      </Marker>
    </MapView>
  );
};

export default MapTestScreen;

const styles = StyleSheet.create({
  map: {
    height: "100%",
  },

  bubble: {
    flexDirection: "column",
    alignSelf: "flex-start",
    backgroundColor: "#fff",
    borderRadius: 6,
    borderColor: "#ccc",
    borderWidth: 0.5,
    padding: 15,
    width: 150,
  },

  arrow: {
    backgroundColor: "transparent",
    borderColor: "transparent",
    borderTopColor: "#fff",
    borderWidth: 16,
    alignSelf: "center",
    marginTop: -32,
  },
  arrowBorder: {
    backgroundColor: "transparent",
    borderColor: "transparent",
    borderTopColor: "#007a87",
    borderWidth: 16,
    alignSelf: "center",
    marginTop: -0.5,

    name: {
      fontSize: 16,
      marginBottom: 5,
    },

    image: {
      width: "100%",
      height: 80,
    },
  },
});

export default MapScreen;
