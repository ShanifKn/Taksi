import axiosInstance from "../AxiosInstance";

export const GoogleAuth = async (id) => {
  const response = await axiosInstance.post("/auth/google", { id });
  const data = response;

  return data;
};
