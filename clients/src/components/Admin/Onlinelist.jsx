import React, { useEffect, useState } from "react";
import OnlinePredictionIcon from "@mui/icons-material/OnlinePrediction";
import { useSelector } from "react-redux";
import { fetchCar } from "../../Helpers/driver";

const Onlinelist = () => {
  const token = useSelector((state) => state.adminLogin.token);
  const [status, setStatus] = useState([]);

  useEffect(() => {
    fetchCar(token).then((online) => {
      setStatus(online.data.Driver);
    });
  }, [status, token]);

  return (
    <>
      <div className="container p-2 mx-auto sm:p-4 dark:text-gray-100">
        <h2 className="mb-4 text-2xl font-semibold leading-tight">
          Online
          <OnlinePredictionIcon className="text-green-500 ml-1" />
        </h2>
        {!status.length > 0 ? (
          <div className="overflow-x-auto">
            <table className="min-w-full text-xs">
              <thead className="dark:bg-gray-700">
                <tr className="text-left">
                  <th className="p-3">Driver</th>
                  <th className="p-3">Status</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b border-opacity-20 dark:border-gray-700 dark:bg-gray-900">
                  <td className="p-3">
                    <p>97412378923</p>
                  </td>
                  <td className="p-3 ">
                    <div className="flex flex-col items-center justify-center">
                      <div className="flex flex-wrap gap-x-2 gap-y-2">
                        <div className="relative flex-shrink-0">
                          <span className="absolute bottom-0 right-0 w-4 h-4 dark:bg-green-600 border rounded-full dark:text-gray-100 dark:border-gray-900"></span>
                          <img
                            src="https://dummyimage.com/720x400"
                            alt=""
                            className="w-12 h-12 border rounded-full dark:bg-gray-500 dark:border-gray-700"
                          />
                        </div>
                      </div>
                    </div>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        ) : (
          <div className="overflow-x-auto">
            <table className="min-w-full text-xs">
              <thead className="dark:bg-gray-700">
                <tr className="text-left">
                  <th className="p-3">Driver</th>
                  <th className="p-3">Status</th>
                </tr>
              </thead>
              <tbody>
                {status.map((driver, index) => (
                  <tr className="border-b border-opacity-20 dark:border-gray-700 dark:bg-gray-900">
                    <td className="p-3">
                      <p>
                        {driver.firstName} {driver.lastName}
                      </p>
                    </td>
                    <td className="p-3 ">
                      <div className="flex flex-col items-center justify-center">
                        <div className="flex flex-wrap gap-x-2 gap-y-2">
                          <div className="relative flex-shrink-0">
                            <span className="absolute bottom-0 right-0 w-4 h-4 dark:bg-green-600 border rounded-full dark:text-gray-100 dark:border-gray-900"></span>
                            <img src={driver.PicturePath} alt="" className="w-12 h-12 border rounded-full dark:bg-gray-500 dark:border-gray-700" />
                          </div>
                        </div>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
      </div>
    </>
  );
};

export default Onlinelist;
