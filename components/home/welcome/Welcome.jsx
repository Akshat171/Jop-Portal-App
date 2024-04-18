import React from "react";
import { View, Text } from "react-native";
import styles from "./welcome.style";
const Welcome = () => {
  return (
    <View>
      <View style={styles.container}>
        <Text style={styles.userName}>Welcome back!</Text>
        <Text style={styles.welcomeMessage}>Locate Your Ideal Position</Text>
      </View>
    </View>
  );
};

export default Welcome;
