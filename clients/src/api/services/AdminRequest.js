import AxiosInstance from "../AxiosInstance";

export const AdminLogin = async (Data) => {
  try {
    console.log(Data);
    const response = await AxiosInstance.post("/auth/asignin", Data);
    const data = response;
    if (data) return data;
  } catch (error) {
    console.log(error.message);

    // console.log(error.response);
    return error;
  }
};

// * Driver Approvel  List* //
export const driverApproval = async (token) => {
  try {
    const response = await AxiosInstance.get("/admin/approval", {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    const data = response.data.Driver;
    return data;
  } catch (error) {
    console.log(error.message);

    return error.code;
  }
};

//*  Driver details *//

export const driverDetails = async (id, token) => {
  try {
    const response = await AxiosInstance.get(`/admin/details/${id}`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    const data = response.data.driver;
    return data;
  } catch (error) {
    console.log(error.message);

    return error.message;
  }
};

// * Driver Approval *//

export const approve = async (id, token) => {
  try {
    const response = await AxiosInstance.post(
      `/admin/approval`,
      { id: id },
      {
        headers: { Authorization: `Bearer ${token}` },
      }
    );
    const data = response.status;
    if (data === 200) return true;
  } catch (error) {
    console.log(error.message);

    return error.message;
  }
};

// *  Driver List *//

export const driverList = async (token) => {
  try {
    console.log(token);
    const response = await AxiosInstance.get("/admin/driver/list", {
      headers: { Authorization: `Bearer  ${token}` },
    });

    const data = response.data.Driver;
    return data;
  } catch (error) {
    console.log(error.message);

    return error;
  }
};
