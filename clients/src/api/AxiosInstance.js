import Axios from "axios";

const axiosInstance = Axios.create({
  baseURL: "http://localhost:3001/api/",
  headers: {
    "Content-Type": "application/json",
  },
});

export default axiosInstance;
