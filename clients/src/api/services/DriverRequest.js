import axiosInstance from "../AxiosInstance";
import AxiosInstance from "../AxiosInstance";

export const DriverSignup = async (Data) => {
  try {
    const response = await AxiosInstance.post(`/auth/dsignup`, Data, {
      headers: { "Content-Type": "multipart/form-data" },
    });
    const data = response.data.success;
    if (data) return data;
  } catch (error) {
    return error.response.data.error;
  }
};

export const DriverLogin = async (Data) => {
  try {
    const response = await AxiosInstance.post("/auth/dsignin", Data);
    const data = response;
    if (data) return data;
  } catch (error) {
    // console.log(error.response);
    return error;
  }
};

export const getBookings = async (token) => {
  try {
    const response = await AxiosInstance.get("/driver/bookings", {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    return response;
  } catch (error) {
    return error.response;
  }
};

// * accept ride *//
export const acceptRide = async (id, token) => {
  try {
    const response = await AxiosInstance.patch(
      "/driver/accept-booking",
      { id },
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );
    return response;
  } catch (error) {
    return error.response;
  }
};

// * decline ride *//
export const declineRide = async (id, token) => {
  try {
    const response = await AxiosInstance.patch("/driver/decline-booking", { id }, { headers: { Authorization: `Bearer ${token}` } });
    return response;
  } catch (error) {
    return error.response;
  }
};

export const getlocation = async (token) => {
  try {
    const response = await AxiosInstance.get("/driver/current-location", {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    return response;
  } catch (error) {
    return error.response;
  }
};

export const set_location = async (location, status, token) => {
  try {
    const response = await AxiosInstance.patch(
      "/driver/set-location",
      { location, status },
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );

    return response;
  } catch (error) {
    return error.response;
  }
};

//* fetch pending booking list *//
export const getPendingBookings = async (token) => {
  try {
    const response = await AxiosInstance.get("/driver/pending-bookinglist", {
      headers: { Authorization: `Bearer ${token}` },
    });
    return response;
  } catch (error) {
    return error.response;
  }
};

// * accept pending bookings *//
export const acceptPendingBookings = async (id, token) => {
  try {
    const response = await AxiosInstance.patch("/driver/accept-ride", { id }, { headers: { Authorization: `Bearer ${token}` } });
    return response;
  } catch (error) {
    return error.response;
  }
};

// * fetch booking history *//
export const fetchBookingHistory = async (token) => {
  try {
    const response = await AxiosInstance.get("/driver/booking-history", { headers: { Authorization: `Bearer ${token}` } });
    return response;
  } catch (error) {
    return error.response;
  }
};

export const getTripDetails = async (token, otp) => {
  try {
    const response = await AxiosInstance.patch("/driver/trip-start", { otp }, { headers: { Authorization: `Bearer ${token}` } });
    return response;
  } catch (error) {
    return error.response;
  }
};
