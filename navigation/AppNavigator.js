import React from "react";
import {createBottomTabNavigator} from "@react-navigation/bottom"
import {MaterialCommunityIcons} from "@expo/vector-icons";

import ProfileScreen from "../screens/ProfileScreen";
import HomeScreen from "../screens/HomeScreen";
import ExploreScreen from "../screens/ExploreScreen"


const Tab = createBottomTabNavigator();

const AppNavigator = () =>{
    <Tab.Navigator>
        <Tab.screen name = "Profile" 
        component = {ProfileScreen}
        options ={{
            tabBarIcon: ({color, size}) => <MaterialCommunityIcons name="account" color = {color} size={size}/>
        }}/>
        <Tab.screen name = "home" 
        component = {HomeScreen} 
        options ={{
            tabBarIcon: ({color, size}) => <MaterialCommunityIcons name="home" color = {color} size={size}/>
        }}/>
        <Tab.screen name = "Explore" 
        component = {ExploreScreen}
        options ={{
            tabBarIcon: ({color, size}) => <MaterialCommunityIcons name="google-maps" color = {color} size={size}/>
        }}/>
    </Tab.Navigator>
}

export default AppNavigator;