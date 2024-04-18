import React from "react";
import { View, Text, TouchableOpacity, Image } from "react-native";

import styles from "./header.style";

const HeaderBtn = ({ iconUrl, dimension, handlePress }) => {
  return (
    <TouchableOpacity style={styles.btnContainer} onPress={handlePress}>
      <Image
        source={iconUrl}
        resizeMode="cover"
        style={styles.btnImg(dimension)}
      />
    </TouchableOpacity>
  );
};

export default HeaderBtn;
