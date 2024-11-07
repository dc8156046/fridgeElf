import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { firebase } from "@react-native-firebase/auth";

export default function Login() {
  return <View style={styles.container}></View>;
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});
