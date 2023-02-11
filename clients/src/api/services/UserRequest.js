import axiosInstance from "../AxiosInstance";

export const List = async () => {
  try {
    const response = await axiosInstance.get("/user/carlist");

    const data = response.data.Driver;
    console.log(data);
    return data;
  } catch (error) {
    console.log(error.message);

    return error;
  }
};
