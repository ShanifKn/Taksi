import axiosInstance from "../AxiosInstance";

export const getCarList = async () => {
  try {
    const response = await axiosInstance.get("/user/carlist");

    const data = response.data.Driver;
    return data;
  } catch (error) {
    return error;
  }
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
    form.append("dropOff", tripDetails.dropOff);
    form.append("distance", tripDetails.distance);

    console.log(token, form);

    const response = await axiosInstance.post("/user/book-trip", form, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    console.log(response);
  } catch (error) {
    console.log(error.message);
  }
};
