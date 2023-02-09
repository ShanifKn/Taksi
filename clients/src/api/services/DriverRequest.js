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
    console.log(data);
    if (data) return data;
  } catch (error) {
    // console.log(error.response);
    return error;
  }
};
