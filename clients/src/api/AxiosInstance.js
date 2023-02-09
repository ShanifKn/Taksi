import Axios from "axios";

const axiosInstance = Axios.create({
  baseURL: "http://localhost:3001/api/",
});

export default axiosInstance;
