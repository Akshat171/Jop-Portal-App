import React from "react";
import { View, Text } from "react-native";

import styles from "./otherDetails.style";

const OtherDetails = ({
  title,
  qualification,
  companyTitle,
  salary,
  opening,
  jobhours,
}) => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>{title}:</Text>
      <View style={styles.pointsContainer}>
        <Text style={styles.pointText}>
          <Text style={styles.text}>Title:</Text> {companyTitle}
        </Text>
        <Text style={styles.pointText}>
          <Text style={styles.text}>Salary:</Text> {salary}
        </Text>
        <Text style={styles.pointText}>
          <Text style={styles.text}>Qualification:</Text> {qualification}
        </Text>
        <Text style={styles.pointText}>
          <Text style={styles.text}>Job hours:</Text> {jobhours}
        </Text>
        <Text style={styles.pointText}>
          <Text style={styles.text}>Opening:</Text> {opening}
        </Text>
      </View>
    </View>
  );
};

export default OtherDetails;
