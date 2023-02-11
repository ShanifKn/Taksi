import axiosInstance from "../AxiosInstance";

export const carList = async (token) => {
  try {
    console.log(token);
    const response = await axiosInstance.get("/admin/driver/list", {
      headers: { Authorization: `Bearer  ${token}` },
    });

    const data = response.data.Driver;
    return data;
  } catch (error) {
    console.log(error.message);

    return error;
  }
};
