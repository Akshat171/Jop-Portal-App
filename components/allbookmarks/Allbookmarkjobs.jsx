import React from "react";
import { FlatList, Text, View } from "react-native";
import styles from "./allbookmark.style";
import BookMarkCard from "../common/cards/bookmarkCard/BookMarkCard";

// const demo = [1, 23, 4];

const Allbookmarkjobs = ({ jobs }) => {
  console.log(jobs);
  return (
    <View style={styles.container}>
      {jobs.length > 0 ? (
        <View style={styles.cardsContainer}>
          <FlatList
            data={jobs}
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
