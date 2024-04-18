import React from "react";
import { View, Text, TouchableOpacity, Image } from "react-native";
import { useRouter } from "expo-router";
import styles from "./jobcard.style";
import { checkImageURL } from "../../../../utils";
import { icons } from "../../../../constants";

const NearbyJobCard = ({ job, handleNavigate }) => {
  const router = useRouter();
  // all info about job is available in job prop to print in cards
  //handle press to navigate on the click after pressing on that
  const handlePress = () => {
    router.push({ pathname: `/job-details/${job.job_id}`, params: { id: 2 } });
  };
  return (
    <TouchableOpacity style={styles.container} onPress={handleNavigate}>
      <View style={styles.upperContainer}>
        <TouchableOpacity style={styles.logoContainer}>
          <Image
            source={{
              uri: checkImageURL(job.creatives[0].file)
                ? job.creatives[0].file
                : "https://imgs.search.brave.com/yZTArb18OPMkp3Rea9-PEHyG3X4iGitLjn_nW9Xyl7s/rs:fit:860:0:0/g:ce/aHR0cHM6Ly9jZG4t/aWNvbnMtcG5nLmZs/YXRpY29uLmNvbS81/MTIvMzg1MC8zODUw/Mjg1LnBuZw",
            }}
            resizeMode="contain"
            style={styles.logImage}
          />
        </TouchableOpacity>
        <View style={styles.aboutCompany}>
          <Text style={styles.jobName}>{job?.job_role}</Text>
          <Text style={styles.jobType}>{job?.company_name}</Text>
        </View>
      </View>
      <View style={styles.contentContainer}>
        <View style={styles.textContainer}>
          <View style={styles.leftColumn}>
            <Text style={styles.others}>
              {" "}
              <Image
                source={icons.location}
                resizeMode="contain"
                style={styles.locationImage}
              />{" "}
              {job?.primary_details?.Place}
            </Text>
            <Text style={styles.others}>
              {" "}
              <Image
                source={icons.salary}
                resizeMode="contain"
                style={styles.locationImage}
              />{" "}
              {job?.primary_details?.Salary}
            </Text>
          </View>
          <View style={styles.rightColumn}>
            <Text style={styles.jobVacancy}>
              {" "}
              <Image
                source={icons.vacancy}
                resizeMode="contain"
                style={styles.locationImage}
              />
              {job.job_tags?.map((tag) => tag.value).join(", ")}
            </Text>
            <Text style={styles.others}>
              <Image
                source={icons.experince}
                resizeMode="contain"
                style={styles.locationImage}
              />
              {job?.primary_details?.Experience}
            </Text>
          </View>
        </View>
      </View>
    </TouchableOpacity>
  );
};

export default NearbyJobCard;
