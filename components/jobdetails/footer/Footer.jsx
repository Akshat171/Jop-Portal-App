import {
  View,
  Text,
  TouchableOpacity,
  Image,
  ToastAndroid,
} from "react-native";

import styles from "./footer.style";
import { icons } from "../../../constants";
import { useContext } from "react";
import { GlobalContext } from "../../../Global/Context";

const Footer = ({ jobInfo }) => {
  //getting the data of all bookmark jobs from global state
  const { bookmarkedJobs, setBookmarkedJobs } = useContext(GlobalContext);

  const handleBookmarkPress = () => {
    const isJobBookmarked = bookmarkedJobs.some(
      (job) => job.company_name === jobInfo.company_name
    );

    //Filteration based on already bookmarked or not.
    if (isJobBookmarked) {
      // Remove the job from bookmarkedJobs
      const updatedBookmarkedJobs = bookmarkedJobs.filter(
        (job) => job.company_name !== jobInfo.company_name
      );
      ToastAndroid.show(
        "Removed from bookmark!",
        ToastAndroid.SHORT,
        ToastAndroid.BOTTOM
      );
      setBookmarkedJobs(updatedBookmarkedJobs);
    } else {
      // Add the job to bookmarkedJobs
      ToastAndroid.show(
        "Added to bookmark!",
        ToastAndroid.SHORT,
        ToastAndroid.BOTTOM
      );
      setBookmarkedJobs([...bookmarkedJobs, jobInfo]);
    }
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
