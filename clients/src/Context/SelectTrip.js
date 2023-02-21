import React, { useState, createContext } from "react";

export const selectTripContext = createContext();

export const TripProvider = ({ children }) => {
  const [driver, selectDriver] = useState(null);
  const [tripDetails, setTripDetails] = useState({
    pickup: "",
    dropoff: "",
    driver: "",
    distance: "",
  });

  return (
    <selectTripContext.Provider
      value={{
        driver,
        selectDriver,
        tripDetails,
        setTripDetails,
      }}>
      {children}
    </selectTripContext.Provider>
  );
};
