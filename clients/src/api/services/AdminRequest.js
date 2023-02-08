import AxiosInstance from "../AxiosInstance";

export const AdminLogin = async (Data) => {
  try {
    const response = await AxiosInstance.post("/auth/asignin", Data);
    const data = response;
    if (data) return data;
  } catch (error) {
    // console.log(error.response);
    return error;
  }
};
