/* eslint-disable default-case */

import { useEffect } from "react";
import { useState } from "react";
import { createContext } from "react";

export const LocationContext = createContext();

export const LocationProvider = ({ children }) => {
  const [pickup, setPickup] = useState("");
  const [dropoff, setDropoff] = useState("");
  const [pickupCoordinates, setPickupCoordinates] = useState();
  const [dropoffCoordinates, setDropoffCoordinates] = useState();

  const createLocationCoordinate = (locationName, locationType) => {
    return new Promise(async (resolve, reject) => {
      try {
        const response = await fetch("api/getLocationCoordinate", {
          method: "POST",
          headers: {
            "content-type": "application/json",
          },
          body: JSON.stringify({
            location: locationName,
          }),
        });
        const data = await response.json();

        if (data.message === "success") {
          switch (locationType) {
            case `pickup`:
              setPickupCoordinates(data.data);
              break;
            case "dropoff":
              setDropoffCoordinates(data.data);
              break;
          }
          resolve();
        } else {
          reject();
        }
      } catch (error) {
        console.error(error);
        reject();
      }
    });
  };

  useEffect(() => {
    if (pickup && dropoff) {
      (async () => {
        await Promise.all([
          createLocationCoordinate(pickup, "pickup"),
          createLocationCoordinate(dropoff, "dropoff"),
        ]);
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
