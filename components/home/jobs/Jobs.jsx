import React, { useCallback, useEffect, useState } from "react";
import { useRouter } from "expo-router";
import { View, ActivityIndicator, FlatList } from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";
import NetInfo from "@react-native-community/netinfo";
import { API_KEY } from "@env";

import styles from "./jobs.style";
import { COLORS, SIZES } from "../../../constants";
import JobCard from "../../common/cards/jobCard/JobCard";

const DemoNearby = () => {
  const router = useRouter();
  const [loading, setIsLoading] = useState(false);
  const [items, setItems] = useState([]);
  const [currentPage, setCurrentPage] = useState(0);

  const api_key = API_KEY;

  const fetchPage = async () => {
    if (loading) {
      return;
    }

    console.log("fetching next page");
    const nextPage = currentPage + 1;
    setIsLoading(true);

    try {
      // getting info of online or offline network from NetInfo library
      const connectionInfo = await NetInfo.fetch();
      const isConnected = connectionInfo.isConnected;
      // Use the 'isConnected' variable to determine internet availability
      console.log("Is connected:", isConnected);

      //if it is connected then fetch the data
      if (isConnected) {
        const response = await fetch(`${api_key}${nextPage}`);
        const responseJson = await response.json();
        //   console.log(responseJson.page_size);
        setItems((existingItems) => {
          console.log(responseJson?.results);
          return [...existingItems, ...responseJson?.results];
        });
        await storeData(responseJson?.results, "jobs");
        setCurrentPage(nextPage);
      }
      //else show the data stored in Async storage
      else {
        const cachedJobs = await getData("jobs");
        if (cachedJobs) {
          setItems(cachedJobs);
        }
        //if not stored in cached then show Data not found
        else {
          console.log("No cached jobs found.");
        }
      }
    } catch (error) {
      console.error(error);
    } finally {
      //finally loading off
      setIsLoading(false);
    }
  };

  //storing the data when coming from api
  const storeData = async (data, key) => {
    try {
      const jsonValue = JSON.stringify(data);
      await AsyncStorage.setItem(key, jsonValue);
    } catch (e) {
      console.error("Error storing data in AsyncStorage", e);
    }
  };

  //get function to get the data from Async storage in offline mode
  const getData = async (key) => {
    try {
      const jsonValue = await AsyncStorage.getItem(key);
      if (jsonValue !== null) {
        try {
          return JSON.parse(jsonValue);
        } catch (e) {
          console.error("Error parsing JSON data from AsyncStorage", e);
        }
      }
      return null;
    } catch (e) {
      console.error("Error retrieving data from AsyncStorage", e);
      return null;
    }
  };

  //clearing the data on Refreshing from async storage
  const clearData = async (key) => {
    try {
      await AsyncStorage.removeItem(key);
      console.log(`Data cleared for key: ${key}`);
    } catch (e) {
      console.error(`Error clearing data for key ${key}`, e);
    }
  };

  //refresh feature to get new jobs and remove previous jobs from array and refetching the data
  const OnRefreshing = () => {
    setItems([]);
    setCurrentPage(0);
    //we can add for clear Async storage on refreshing
    // clearData("jobs")
    fetchPage();
  };

  //fetching the data on first mounting
  useEffect(() => {
    fetchPage();
  }, []);

  const renderItems = useCallback(
    ({ item, index }) => (
      <JobCard
        job={item}
        index={index}
        handleNavigate={() => {
          router.push({
            pathname: `/job-details/${item?.job_role}`,
            params: {
              id: item?.job_role_id,
              company_name: item?.creatives[0]?.file,
              job_role: item?.job_role,
              company_Name: item?.company_name,
              company_location: item?.primary_details?.Place,
              other_Details: item?.other_details,
              salary: item?.primary_details?.Salary,
              company_title: item?.title,
              qualifications: item?.primary_details?.Qualification,
              job_hours: item?.job_hours,
              opening: item?.openings_count,
              number: item?.custom_link,
              whatsapp_no: item?.whatsapp_no,
              loading,
            },
          });
        }}
      />
    ),
    []
  );

  return (
    //sending data in Jobcard using router params
    <View style={styles.container}>
      <View style={styles.cardsContainer}>
        <FlatList
          data={items}
          keyExtractor={(item, index) => index.toString()}
          renderItem={renderItems}
          onEndReached={fetchPage}
          onEndReachedThreshold={0.1}
          contentContainerStyle={{ gap: 3 }}
          maxToRenderPerBatch={10}
          ListFooterComponent={() =>
            loading && (
              <ActivityIndicator size={SIZES.medium} color={COLORS.primary} />
            )
          }
          refreshing={loading}
          onRefresh={OnRefreshing}
        />
      </View>
    </View>
  );
};

export default DemoNearby;
