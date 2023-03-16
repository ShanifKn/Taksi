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
      const availableCar = await getAvaiableCar(pickupCoordinates, car);
      if (availableCar.length > 0) {
        availableCars.push(availableCar[0]);
      }
    }
    return availableCars;
  } catch (error) {
    return error;
  }
};

const getAvaiableCar = async (pickupCoordinates, driver) => {
  const carLists = [];
  const driverLocation = driver.current_location.location[0];
  const findDistance = await getDirection(pickupCoordinates, driverLocation);
  const distance = (findDistance.data.routes[0].distance / 1000).toFixed(0);

  if (parseInt(distance) < 50) {
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

export const payementAction = async (id, token) => {
  try {
    const response = await axiosInstance.patch(
      "/user/payment-action",
      { id },
      {
        headers: { Authorization: `Bearer ${token}` },
      }
    );
    return response;
  } catch (error) {
    return error.response;
  }
};

//* cancel booking *//
export const cancelTrip = async (id, token) => {
  try {
    const response = await axiosInstance.patch(
      "/user/cancel-booking",
      { id },
      {
        headers: { Authorization: `Bearer ${token}` },
      }
    );
    return response;
  } catch (error) {
    return error.response;
  }
};

// * fetch user details *//
export const fetchUserDetails = async (token) => {
  try {
    const response = await axiosInstance.get("/user/user-info", {
      headers: { Authorization: `Bearer ${token}` },
    });
    return response;
  } catch (error) {
    return error.response;
  }
};

//* update user profile *//
export const updateUserProfile = async (image, token) => {
  try {
    const formData = new FormData();
    formData.append("image", image);

    const response = await axiosInstance.post("/user/user-profile", formData, {
      headers: { Authorization: "Bearer " + token, "Content-Type": "multipart/form-data" },
    });
    return response;
  } catch (error) {
    return error.response;
  }
};

//* add money to wallet *//
export const addAmount = async (cash, token) => {
  try {
    const response = await axiosInstance.post("/user/add-cash", { amount: cash }, { headers: { Authorization: `Bearer ${token}` } });
    return response;
  } catch (error) {
    return error.response;
  }
};

//* fetch wallet balance *//
export const getBalance = async (token) => {
  try {
    const response = await axiosInstance.get("/user/wallet-balance", { headers: { Authorization: `Bearer ${token}` } });
    return response;
  } catch (error) {
    return error.response;
  }
};

//* cancel pending bookings *//

export const cancelBooking = async (token, tripId) => {
  try {
    const response = await axiosInstance.patch("/user/cancel-ride", { tripId }, { headers: { Authorization: `Bearer ${token}` } });
    return response;
  } catch (error) {
    return error.response;
  }
};

export const autoCancelPending = async (token) => {
  try {
    const response = await axiosInstance.delete("/user/auto-cancel", { headers: { Authorization: `Bearer ${token}` } });
    return response;
  } catch (error) {
    return error.response;
  }
};

export const getWallet = async (token) => {
  try {
    const response = await axiosInstance.get("/user/wallet-details", { headers: { Authorization: `Bearer ${token}` } });
    return response;
  } catch (error) {
    return error.response;
  }
};
