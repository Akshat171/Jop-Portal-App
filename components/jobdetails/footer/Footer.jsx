import { View, Text, TouchableOpacity, Image } from "react-native";

import styles from "./footer.style";
import { icons } from "../../../constants";
import { useContext } from "react";
import { GlobalContext } from "../../../Global/Context";

const Footer = ({ jobInfo }) => {
  const { bookmarkedJobs, setBookmarkedJobs, demo } = useContext(GlobalContext);

  const handleBookmarkPress = () => {
    const isJobBookmarked = bookmarkedJobs.some(
      (job) => job.company_name === jobInfo.company_name
    );

    if (isJobBookmarked) {
      // Remove the job from bookmarkedJobs
      const updatedBookmarkedJobs = bookmarkedJobs.filter(
        (job) => job.company_name !== jobInfo.company_name
      );
      setBookmarkedJobs(updatedBookmarkedJobs);
    } else {
      // Add the job to bookmarkedJobs
      setBookmarkedJobs([...bookmarkedJobs, jobInfo]);
    }
    // setBookmarkedJobs([...bookmarkedJobs, jobInfo]);
    // console.log(bookmarkedJobs);
  };
  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.applyBtn}>
        <Text style={styles.applyBtnText}>Apply now</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.bookmarkBtn}
        onPress={handleBookmarkPress}
      >
        <Image
          source={icons.bookmarkIcon}
          resizeMode="contain"
          style={styles.bookmarkStyle}
        />
      </TouchableOpacity>
    </View>
  );
};

export default Footer;
