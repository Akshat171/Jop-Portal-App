import { View, SafeAreaView } from "react-native";
import React, { useContext } from "react";
import { Stack } from "expo-router";
import { COLORS, SIZES } from "../../constants";
import { GlobalContext } from "../../Global/Context";
import Allbookmarkjobs from "../../components/allbookmarks/Allbookmarkjobs";

const bookmark = () => {
  const { bookmarkedJobs, setBookmarkedJobs } = useContext(GlobalContext);

  console.log(bookmarkedJobs);

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
          headerTitle: "All Bookmarks",
        }}
      />

      <View style={{ flex: 1, padding: SIZES.medium }}>
        <Allbookmarkjobs jobs={bookmarkedJobs} />
      </View>
    </SafeAreaView>
  );
};

export default bookmark;
