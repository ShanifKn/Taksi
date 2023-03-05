import axiosInstance from "../AxiosInstance";
import { getDirection } from "../getLocationCoordinates";
// import { getLocationName } from "../getLocationCoordinates";

export const getCarList = async (pickupCoordinates) => {
  try {
    const response = await axiosInstance.get("/user/carlist");
    const data = await response.data.Driver;
    const availableCars = [];

    for (let i = 0; i < data.length; i++) {
      const car = data[i];
      // console.log(car);
      const availableCar = await getAvaiableCar(pickupCoordinates, car);

      // console.log(availableCar;

      if (availableCar.length > 0) {
        availableCars.push(availableCar[0]);
      }
    }
    console.log(`hello ${availableCars}`);
    return availableCars;
  } catch (error) {
    return error;
  }
};

const getAvaiableCar = async (pickupCoordinates, driver) => {
  const carLists = [];
  const driverLocation = driver.current_location.location;
  const url = `${process.env.REACT_APP_MAPBOX_GEOCODING}/${encodeURIComponent(driverLocation)}.json?access_token=${
    process.env.REACT_APP_MAPBOX_TOKEN
  }`;
  const response = await fetch(url);
  const data = await response.json();
  const driverCoordinates = data.features[0].center;
  const findDistance = await getDirection(pickupCoordinates, driverCoordinates);
  const distance = findDistance.data.waypoints[0].distance;

  if (distance <= 50) {
    carLists.push(driver);
  }

  return carLists;
};

export const getDriver = async (id) => {
  try {
    const response = await axiosInstance.get("/user/driver-details", { params: { id: id } });
    return response;
  } catch (error) {
    return error.response;
  }
};

export const BookedTrip = async (token, tripDetails, tripDate, tripTime) => {
  try {
    const form = new FormData();
    form.append("date", tripDate);
    form.append("time", tripTime);
    form.append("driverID", tripDetails.driver);
    form.append("pickup", tripDetails.pickup);
    form.append("dropoff", tripDetails.dropOff);
    form.append("distance", tripDetails.distance);

    const response = await axiosInstance.post("/user/trip-book", form, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    return response;
  } catch (error) {
    return error.response;
  }
};

// * fetch complete trips *//
export const getTrips = async (token) => {
  try {
    const response = await axiosInstance.get("/user/get-trips", {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });

    return response;
  } catch (error) {
    return error.response;
  }
};
