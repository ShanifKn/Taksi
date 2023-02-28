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
