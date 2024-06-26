import { View, SafeAreaView } from "react-native";
import React, { useContext } from "react";
import { Stack } from "expo-router";
import { COLORS, SIZES } from "../../constants";
import { GlobalContext } from "../../Global/Context";
import Allbookmarkjobs from "../../components/allbookmarks/Allbookmarkjobs";

const bookmark = () => {
  //getting all info regarding bookmark jobs array from global state
  //then passing in Allbookmark file to print them
  const { bookmarkedJobs, setBookmarkedJobs } = useContext(GlobalContext);

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

      <View style={{ flex: 1, paddingHorizontal: SIZES.medium }}>
        <Allbookmarkjobs jobs={bookmarkedJobs} />
      </View>
    </SafeAreaView>
  );
};

export default bookmark;
