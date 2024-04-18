// FooterContext.js
import React, { createContext, useState } from "react";

const GlobalContext = createContext();

const GlobalProvider = ({ children }) => {
  const [bookmarkedJobs, setBookmarkedJobs] = useState([]);
  return (
    <GlobalContext.Provider value={{ bookmarkedJobs, setBookmarkedJobs }}>
      {children}
    </GlobalContext.Provider>
  );
};

export { GlobalContext, GlobalProvider };
