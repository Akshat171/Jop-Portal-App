import {
  View,
  Text,
  SafeAreaView,
  TouchableOpacity,
  Image,
  ScrollView,
  FlatList,
} from "react-native";
import React, { useContext, useState } from "react";
import { Stack, useRouter } from "expo-router";
import { COLORS, FONT, icons, SIZES } from "../../constants";
import { GlobalContext } from "../../Global/Context";
import styles from "../../components/common/cards/jobCard/jobcard.style";
import { checkImageURL } from "../../utils";
import Allbookmarkjobs from "../../components/allbookmarks/Allbookmarkjobs";

const bookmark = () => {
  const { demo, bookmarkedJobs, setBookmarkedJobs } = useContext(GlobalContext);

  console.log(bookmarkedJobs);
  console.log(demo);

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

// {
//   bookmarkedJobs.map((item, index) => (
//     <TouchableOpacity style={styles.container} key={index}>
//       <View style={styles.upperContainer}>
//         <TouchableOpacity style={styles.logoContainer}>
//           <Image
//             source={{
//               uri: "https://t4.ftcdn.net/jpg/05/05/61/73/360_F_505617309_NN1CW7diNmGXJfMicpY9eXHKV4sqzO5H.jpg",
//             }}
//             resizeMode="contain"
//             style={styles.logImage}
//           />
//         </TouchableOpacity>
//         <View style={styles.aboutCompany}>
//           <Text style={styles.jobName}>{item?.job_role}</Text>
//           <Text style={styles.jobType}>{item?.comany_Name}</Text>
//         </View>
//       </View>
//       <View style={styles.contentContainer}>
//         <View style={styles.textContainer}>
//           <View style={styles.leftColumn}>
//             <Text style={styles.others}>{item.company_location}</Text>
//             <Text style={styles.others}>{item.salary}</Text>
//           </View>
//           <View style={styles.rightColumn}>
//             <Text style={styles.jobVacancy}>{item.opening}</Text>
//             <Text style={styles.others}>{item.qualifications}</Text>
//           </View>
//         </View>
//       </View>
//     </TouchableOpacity>
//   ));
// }
