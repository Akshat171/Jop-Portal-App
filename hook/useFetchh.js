// import { useState, useEffect } from "react";

// import axios from "axios";

// const useFetch = (page) => {
//   const [data, setData] = useState([]);
//   const [isLoading, setIsLoading] = useState(false);
//   const [error, setError] = useState(null);

//   const fetchData = async () => {
//     setIsLoading(true);

//     try {
//       const response = await axios.get(
//         `https://0693fac8-48f3-485d-a245-9d6f14cf306e.mock.pstmn.io/jobs?page=${page}`
//       );
//       setData(response.data?.results);
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
//   }, []);

//   const refetch = () => {
//     setIsLoading(true);
//     fetchData();
//   };

//   return { data, isLoading, error, refetch };
// };

// export default useFetch;
