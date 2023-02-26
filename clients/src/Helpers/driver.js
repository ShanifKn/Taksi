import { carList } from "../api/services/AdminRequest";

export const fetchCar = async (token) => {
  const response = await carList(token);
  return response;
};
