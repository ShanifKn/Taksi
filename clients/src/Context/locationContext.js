/* eslint-disable default-case */
import { createContext, useState, useEffect } from "react";
// import axios from "axios";

export const LocationContext = createContext();

export const LocationProvider = ({ children }) => {
  const [pickup, setPickup] = useState("");
  const [dropoff, setDropoff] = useState("");
  const [pickupCoordinates, setPickupCoordinates] = useState();
  const [dropoffCoordinates, setDropoffCoordinates] = useState();

  const createLocationCoordinate = (locationName, locationType) => {
    return new Promise(async (resolve, reject) => {
      try {
        const mapboxUrl = `${process.env.REACT_APP_MAPBOX_PLACES_API_URL}/${locationName}.json?access_token=${process.env.REACT_APP_MAPBOX_TOKEN}`;
        const response = await fetch(mapboxUrl);
        const data = await response.json();
        const location = data.features[0].center;
        if (location.length) {
          switch (locationType) {
            case `pickup`:
              setPickupCoordinates(location);
              break;
            case "dropoff":
              setDropoffCoordinates(location);
              break;
          }
          resolve();
        } else {
          reject();
        }
      } catch (error) {
        console.log(error.message);
        reject();
      }
    });
  };

  useEffect(() => {
    if (pickup && dropoff) {
      (async () => {
        await Promise.all([createLocationCoordinate(pickup, "pickup"), createLocationCoordinate(dropoff, "dropoff")]);
      })();
    } else return;
  }, [pickup, dropoff]);

  return (
    <LocationContext.Provider
      value={{
        pickup,
        setPickup,
        dropoff,
        setDropoff,
        pickupCoordinates,
        setDropoffCoordinates,
        setPickupCoordinates,
        dropoffCoordinates,
      }}>
      {children}
    </LocationContext.Provider>
  );
};
