import { View, SafeAreaView } from "react-native";
import React from "react";
import { Stack } from "expo-router";
import { COLORS, FONT, icons, SIZES } from "../../constants";
import { HeaderBtn, Welcome } from "../../components";
import { Jobs } from "../../components";

const home = () => {
  return (
    <SafeAreaView
      style={{
        flex: 1,
        backgroundColor: "#e5eaf5",
      }}
    >
      <Stack.Screen
        options={{
          headerStyle: {
            backgroundColor: COLORS.lightWhite,
          },
          headerShadowVisible: false,
          headerLeft: () => (
            <HeaderBtn iconUrl={icons.getPlaced} dimension="100%" />
          ),
          headerRight: () => <HeaderBtn iconUrl={icons.menu} dimension="60%" />,
          headerTitle: "GetPlaced",
          headerTitleStyle: styles.headerTitle,
        }}
      />

      <View style={{ flex: 1, padding: SIZES.medium }}>
        <Welcome />

        <Jobs />
      </View>
    </SafeAreaView>
  );
};

const styles = {
  headerTitle: {
    fontWeight: "bold",
    fontSize: SIZES.large,
    color: COLORS.primary,
  },
};

export default home;
