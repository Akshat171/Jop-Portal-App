import React from "react";
import {
  View,
  Text,
  TouchableOpacity,
  Image,
  Pressable,
  Linking,
} from "react-native";
import { useRouter } from "expo-router";
import styles from "./jobcard.style";
import { checkImageURL } from "../../../../utils";
import { COLORS, Icons, SIZES, icons } from "../../../../constants";
//used memo for preventing from Re-rendering the component that have not changed for better optimization of application
import { memo } from "react";

import Animated, { FadeInDown } from "react-native-reanimated";
import { FontAwesome, Ionicons } from "@expo/vector-icons";
import Communications from "react-native-communications";

const JobCard = ({ job, index, handleNavigate }) => {
  const router = useRouter();
  // all info about job is available in job prop to print in cards
  //handle press to navigate on the click after pressing on that

  const handleCallHR = (phoneNumber) => {
    const formattedNumber = phoneNumber.replace(/\D/g, ""); // Remove non-digit characters

    Communications.phonecall(formattedNumber, true);
  };

  const openWhatsApp = (phoneNumber) => {
    const formattedNumber = phoneNumber.replace(/\D/g, ""); // Remove non-digit characters
    const whatsappURL = `whatsapp://send?phone=${formattedNumber}`;

    Linking.canOpenURL(whatsappURL)
      .then((supported) => {
        if (supported) {
          return Linking.openURL(whatsappURL);
        }
        alert(`WhatsApp is not installed on your device.`);
      })
      .catch((err) => console.error("An error occurred", err));
  };

  return (
    <Animated.View
      entering={FadeInDown.delay(index * 200)
        .duration(1000)
        .springify()}
    >
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
            <View style={styles.Columns}>
              <Text style={styles.others}>
                {" "}
                <Image
                  source={icons.location}
                  resizeMode="contain"
                  style={styles.locationImage}
                />{" "}
                <Text>{job?.primary_details?.Place}</Text>
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
            <View style={styles.Columns}>
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

          <View style={styles.contactContainer}>
            <Pressable
              style={styles.wa_conatctBtn}
              onPress={() => openWhatsApp(job?.whatsapp_no)}
            >
              <Text style={styles.wa_conatctText}>
                <Image
                  source={icons.whatsapp}
                  resizeMode="contain"
                  style={{
                    width: 14,
                    height: 14,
                    padding: 4,
                  }}
                />
                Chat
              </Text>
            </Pressable>

            <Pressable
              style={styles.call_contactBtn}
              onPress={() => handleCallHR(job?.custom_link)}
            >
              <Text style={styles.call_contactText}>
                <Ionicons name="call" size={15} /> Call HR
              </Text>
            </Pressable>
          </View>
        </View>
      </TouchableOpacity>
    </Animated.View>
  );
};

export default memo(
  JobCard,
  (prevProps, nextProps) => prevProps.job_role === nextProps.job_role
);
