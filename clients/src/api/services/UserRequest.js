import axiosInstance from "../AxiosInstance";

export const getCarList = async () => {
  try {
    const response = await axiosInstance.get("/user/carlist");

    const data = response.data.Driver;
    return data;
  } catch (error) {
    console.log(error.message);

    return error;
  }
};
