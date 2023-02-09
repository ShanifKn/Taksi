import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { driverList } from "../../api/services/AdminRequest";

const DriverList = () => {
  const [list, setList] = useState([]);
  const navigate = useNavigate();
  const { token } = useSelector((state) => state.adminLogin);

  useEffect(() => {
    const driver = async () => {
      try {
        await driverList(token).then((driver) => {
          setList(driver);
        });
      } catch (error) {
        navigate("/admin/error");
      }
    };
    driver();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div className=" md:w-3/5 relative overflow-x-auto shadow-md sm:rounded-lg">
      <h3 className="text-2xl mb-6 dark:text-white ">Driver List</h3>

      {!list ? (
        <table className="w-full  text-sm text-left text-gray-500 dark:text-gray-400">
          <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
            <tr>
              <th scope="col" className="px-6 py-3">
                Driver list
              </th>
            </tr>
          </thead>
          <tbody>
            <tr className="bg-white border-b  dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600 text-center">
              <th
                scope="row"
                className="px-6 py-4 font-medium  whitespace-nowrap text-red-500">
                No Driver
              </th>
            </tr>
          </tbody>
        </table>
      ) : (
        <table className="w-full  text-sm text-left text-gray-500 dark:text-gray-400">
          <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
            <tr>
              <th scope="col" className="px-6 py-3">
                Driver name
              </th>
              <th scope="col" className="px-6 py-3">
                City
              </th>
              <th scope="col" className="px-6 py-3">
                Vehcile no
              </th>
              <th scope="col" className="px-6 py-3">
                vehicle Model
              </th>
              <th scope="col" className="px-6 py-3">
                <span className="sr-only">View</span>
              </th>
            </tr>
          </thead>
          <tbody>
            {list.map((driver, id) => (
              <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
                <th
                  scope="row"
                  className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                  {driver.firstName} {driver.lastName}
                </th>
                <td className="px-6 py-4">{driver.city}</td>
                <td className="px-6 py-4">{driver.vehicleNo}</td>
                <td className="px-6 py-4">{driver.vehicleModel}</td>
                <td className="px-6 py-4 text-right">
                  <a
                    href="/"
                    className="font-medium text-blue-600 dark:text-blue-500 hover:underline">
                    Edit
                  </a>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
};

export default DriverList;
