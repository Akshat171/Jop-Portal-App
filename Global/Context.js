// FooterContext.js
import React, { createContext, useState } from "react";

const GlobalContext = createContext();

const GlobalProvider = ({ children }) => {
  const [bookmarkedJobs, setBookmarkedJobs] = useState([]);
  const demo = 12;
  return (
    <GlobalContext.Provider value={{ bookmarkedJobs, setBookmarkedJobs, demo }}>
      {children}
    </GlobalContext.Provider>
  );
};

export { GlobalContext, GlobalProvider };
