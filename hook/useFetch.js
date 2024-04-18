// import { useState, useEffect } from "react";

// import axios from "axios";

// const BASE_URL = "https://fa27b89d-912b-4414-acd5-522e571d92d1.mock.pstmn.io";

// const useFetch = (endpoint) => {
//   const [data, setData] = useState(null);
//   const [isLoading, setIsLoading] = useState(false);
//   const [error, setError] = useState(null);

//   const fetchData = async () => {
//     setIsLoading(true);

//     try {
//       const response = await axios.get(`${BASE_URL}${endpoint}`);
//       setData(response.data);
//       setIsLoading(false);
//     } catch (error) {
//       setError(error);
//       alert("There is an error");
//     } finally {
//       setIsLoading(false);
//     }
//   };

//   useEffect(() => {
//     fetchData();
//   }, [endpoint]);

//   const refetch = () => {
//     setIsLoading(true);
//     fetchData();
//   };

//   return { data, isLoading, error, refetch, fetchData };
// };

// export default useFetch;
