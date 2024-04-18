import React, { useState } from "react";
import {
  Text,
  View,
  SafeAreaView,
  ScrollView,
  RefreshControl,
} from "react-native";
import { Stack, useRouter, useLocalSearchParams } from "expo-router";

import {
  Company,
  JobAbout,
  JobFooter,
  JobTabs,
  HeaderBtn,
  OtherDetails,
} from "../../components";
import { COLORS, icons, SIZES } from "../../constants";

const tabs = ["About", "Job Details"];

const JobDetails = () => {
  //using useLocalSearchParams hook to get the data from params
  const {
    id,
    company_name,
    job_role,
    company_location,
    company_Name,
    qualifications,
    job_hours,
    other_Details,
    company_title,
    opening,
    salary,
    loading,
  } = useLocalSearchParams();
  const router = useRouter();
  const [refreshing, setRefreshing] = useState(false);
  const [activeTab, setActiveTab] = useState(tabs[0]);

  const onRefresh = () => {};

  //Display tabs of about and job details section
  const displayTabContent = () => {
    switch (activeTab) {
      case "Job Details":
        return (
          <OtherDetails
            title="Job Details"
            qualification={qualifications}
            companyTitle={company_title}
            salary={salary}
            opening={opening}
            jobhours={job_hours}
          />
        );
      case "Other details":
        return <Specifics title="Other details" points={job_hours} />;
      case "About":
        return <JobAbout info={other_Details ?? "No Data"} />;

      default:
        break;
    }
  };

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: "#f9f8fd" }}>
      <Stack.Screen
        options={{
          headerStyle: {
            backgroundColor: "#f9f8fd",
          },
          headerShadowVisible: false,
          headerBackVisible: false,
          headerLeft: () => (
            <HeaderBtn
              iconUrl={icons.left}
              dimension={"60%"}
              handlePress={() => router.back()}
            />
          ),
          headerRight: () => (
            <HeaderBtn iconUrl={icons.share} dimension={"60%"} />
          ),
          headerTitle: "",
        }}
      />
      <>
        <ScrollView
          showsVerticalScrollIndicator={false}
          refreshControl={
            <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
          }
        >
          {
            <View style={{ padding: SIZES.medium, paddingBottom: 100 }}>
              <Company
                companyLogo={company_name}
                jobRole={job_role}
                companyName={company_Name}
                location={company_location}
              />

              <JobTabs
                tabs={tabs}
                activeTab={activeTab}
                setActiveTab={setActiveTab}
              />

              {displayTabContent()}
            </View>
          }
        </ScrollView>

        <JobFooter
          jobInfo={{
            id,
            company_name,
            company_Name,
            job_role,
            salary,
            company_location,
            opening,
            qualifications,
          }}
        />
      </>
    </SafeAreaView>
  );
};

export default JobDetails;
