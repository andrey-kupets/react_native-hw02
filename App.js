import { StatusBar } from 'expo-status-bar';
import React, {useEffect, useState} from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Users from "./src/components/Users";

export default function App() {
  return (
    <View>
      <Users/>
    </View>
  );
}

const styles = StyleSheet.create({});
