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
