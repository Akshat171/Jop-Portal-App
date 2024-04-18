// import { useState, useEffect } from "react";

// import axios from "axios";

// const BASE_URL = "https://fa27b89d-912b-4414-acd5-522e571d92d1.mock.pstmn.io";

// const useFetch = (endpoint) => {
//   const [data, setData] = useState([]);
//   const [isLoading, setIsLoading] = useState(false);
//   const [error, setError] = useState(null);
//   const [currentPage, setCurrentPage] = useState(0);

//   const fetchData = async () => {
//     const nextPage = currentPage + 1;
//     setIsLoading(true);

//     try {
//       const response = await axios.get(
//         `${BASE_URL}${endpoint}?page=${nextPage}`
//       );
//       setData((prevData) => [...prevData, ...response.data?.results]);
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

//   const loadNextPage = () => {
//     setCurrentPage((prevPage) => prevPage + 1);
//   };

//   return {
//     data,
//     isLoading,
//     error,
//     refetch,
//     fetchData,
//     currentPage,
//     loadNextPage,
//   };
// };

// export default useFetch;
