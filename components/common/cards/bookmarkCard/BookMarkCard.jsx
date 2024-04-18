import React from "react";
import { View, Text, TouchableOpacity, Image } from "react-native";
import { useRouter } from "expo-router";
import styles from "./bookCard.style";
import { checkImageURL } from "../../../../utils";
import { icons } from "../../../../constants";

const BookMarkCard = ({ job }) => {
  //Geting all the info regarding job as a props
  // console.log(job);
  return (
    <TouchableOpacity style={styles.container}>
      <View style={styles.upperContainer}>
        <TouchableOpacity style={styles.logoContainer}>
          <Image
            source={{
              uri: checkImageURL(job.company_name)
                ? job.company_name
                : "https://imgs.search.brave.com/yZTArb18OPMkp3Rea9-PEHyG3X4iGitLjn_nW9Xyl7s/rs:fit:860:0:0/g:ce/aHR0cHM6Ly9jZG4t/aWNvbnMtcG5nLmZs/YXRpY29uLmNvbS81/MTIvMzg1MC8zODUw/Mjg1LnBuZw",
            }}
            resizeMode="contain"
            style={styles.logImage}
          />
        </TouchableOpacity>
        <View style={styles.aboutCompany}>
          <Text style={styles.jobName}>{job.job_role}</Text>
          <Text style={styles.jobType}>{job.company_Name}</Text>
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
              {job?.company_location}
            </Text>
            <Text style={styles.others}>
              <Image
                source={icons.salary}
                resizeMode="contain"
                style={styles.locationImage}
              />
              {job?.salary}
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
              {job.opening} Vacancies
            </Text>
            <Text style={styles.others}>
              {" "}
              <Image
                source={icons.experince}
                resizeMode="contain"
                style={styles.locationImage}
              />
              {job?.qualifications}
            </Text>
          </View>
        </View>
      </View>
    </TouchableOpacity>
  );
};

export default BookMarkCard;
