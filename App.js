import { StatusBar } from 'expo-status-bar';
import React, {useEffect, useState} from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Users from "./src/components/Users";
import {createStackNavigator} from "@react-navigation/stack";
import {NavigationContainer} from "@react-navigation/native";
import Posts from "./src/components/Posts";
import UserDetails from "./src/components/UserDetails";

const StackNavigator = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
        <StackNavigator.Navigator>
            <StackNavigator.Screen name={'UsersBlock'} component={Users}/>
            <StackNavigator.Screen name={'PostsBlock'} component={Posts}/>
            <StackNavigator.Screen name={'User Details'} component={UserDetails}/>
        </StackNavigator.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({});
