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
    <div className="md:w-9/12 relative overflow-x-auto shadow-md sm:rounded-lg">
      <h3 className="text-2xl mb-6 dark:text-white ">Driver List</h3>

      {!list ? (
        <table className="table table-compact w-full">
          <thead>
            <tr>
              <th></th>
              <th>Name</th>
              <th>Job</th>
              <th>company</th>
              <th>location</th>
              <th>Last Login</th>
              <th>Favorite Color</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <th>12</th>
              <td>Sophi Biles</td>
              <td>Recruiting Manager</td>
              <td>Gutmann Inc</td>
              <td>Indonesia</td>
              <td>2/12/2021</td>
              <td>Maroon</td>
            </tr>
          </tbody>
        </table>
      ) : (
        <table className="table  w-full  text-sm text-left text-gray-500 dark:text-gray-100">
          <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-100">
            <tr>
              <th></th>
              <th>Name</th>
              <th>Job</th>
              <th>company</th>
              <th>location</th>
              <th>Last Login</th>
              <th>Favorite Color</th>
            </tr>
          </thead>
          <tbody>
            {list.map((driver, index) => (
              <tr className="hover">
                <th >{index}</th>
                <td>{driver.firstName}</td>
                <td>{driver.lastName}</td>
                <td>{driver.city}</td>
                <td>{driver.vehicleNo}</td>
                <td>2/12/2021</td>
                <td>Maroon</td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
};

export default DriverList;
