import React from "react";
import { FlatList, Text, View } from "react-native";
import styles from "./allbookmark.style";
import BookMarkCard from "../common/cards/bookmarkCard/BookMarkCard";

// const demo = [1, 23, 4];

const Allbookmarkjobs = ({ jobs }) => {
  //getting arrat from parent and passing it in Flatlist to show all bookmarked jobs

  return (
    <View style={styles.container}>
      {jobs.length > 0 ? (
        <View style={styles.cardsContainer}>
          <FlatList
            data={jobs}
            keyExtractor={(item, index) => index.toString()}
            renderItem={({ item }) => <BookMarkCard job={item} />}
            contentContainerStyle={{ gap: 3 }}
          />
        </View>
      ) : (
        <View style={styles.noBookmarkcontainer}>
          <Text style={styles.noBookmarktext}>No Bookmarks</Text>
        </View>
      )}
    </View>
  );
};

export default Allbookmarkjobs;
