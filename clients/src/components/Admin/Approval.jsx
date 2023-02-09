import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import {
  approve,
  driverApproval,
  driverDetails,
} from "../../api/services/AdminRequest";

const Approval = () => {
  const { token } = useSelector((state) => state.adminLogin);
  const [list, setList] = useState([]);
  const [driver, setDriver] = useState();
  const [alert, setAlert] = useState({ message: "" });
  const navigate = useNavigate();

  useEffect(() => {
    const driverList = async () => {
      const approvalList = await driverApproval(token);
      if (approvalList === "ERR_NETWORK") {
        navigate("/admin/error");
      } else setList(approvalList);
    };
    driverList();

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [setDriver]);

  const details = async (id) => {
    try {
      const driver = await driverDetails(id, token);
      setDriver(driver);
    } catch (err) {
      navigate("/admin/error");
    }
  };
  const handleApproval = async (id) => {
    try {
      const approved = await approve(id, token);
      setList((list) => list.filter((driver) => driver._id !== id));
      if (approved) {
        setAlert({ message: "Approved" });
        setTimeout(() => {
          setAlert({ message: "" });
        }, 2000);
      }
    } catch (error) {
      navigate("/admin/error");
    }
  };

  return (
    <>
      {alert.message ? (
        <div className="toast top-0 mt-10 w-72 ">
          <div className="alert bg-green-500 text-black float-left ">
            <div>
              <span>{alert.message} ✅</span>
            </div>
          </div>
        </div>
      ) : (
        ""
      )}

      {!list ? (
        <table className="w-full  text-sm text-left text-gray-500 dark:text-gray-400">
          <thead className="text-xs text-gray-700 uppercase dark:text-gray-400">
            <tr>
              <th scope="col" className="px-6 py-3 bg-gray-50 dark:bg-gray-800">
                name
              </th>
            </tr>
          </thead>

          <tbody>
            <tr className="border-b border-gray-200 dark:border-gray-700 flex text-center">
              <th
                scope="row"
                className="px-6 py-4 w-full font-medium  text-gray-900 whitespace-nowrap bg-gray-50 dark:text-red-600 dark:bg-gray-800">
                No new registrations
              </th>
            </tr>
          </tbody>
        </table>
      ) : (
        <table className="w-full  text-sm text-left text-gray-500 dark:text-gray-400">
          <thead className="text-xs text-gray-700 uppercase dark:text-gray-400">
            <tr>
              <th scope="col" className="px-6 py-3 bg-gray-50 dark:bg-gray-800">
                name
              </th>
              <th
                scope="col"
                className="px-6 py-3  bg-gray-50 dark:bg-gray-800">
                Vehcile
              </th>
              <th scope="col" className="px-6 py-3 bg-gray-50 dark:bg-gray-800">
                City
              </th>
              <th
                scope="col"
                className="px-6 py-3  bg-gray-50 dark:bg-gray-800">
                Details
              </th>
            </tr>
          </thead>

          <tbody>
            {list.map((driver, _id) => (
              <tr
                key={_id}
                className="border-b border-gray-200 dark:border-gray-700">
                <th
                  scope="row"
                  className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap bg-gray-50 dark:text-white dark:bg-gray-800">
                  {driver.firstName} {driver.lastName}
                </th>
                <td className="px-6 py-4">{driver.vehicleModel}</td>
                <td className="px-6 py-4 bg-gray-50 dark:bg-gray-800">
                  {driver.city}
                </td>
                <td className="px-6 py-4">
                  <label
                    htmlFor="my-modal-5"
                    className="btn"
                    onClick={() => details(driver._id)}>
                    view
                  </label>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      )}

      <input type="checkbox" id="my-modal-5" className="modal-toggle" />

      {!driver ? (
        <div className="modal">
          <div className="modal-box md:w-3/12  max-w-5xl">
            <h3 className="font-bold text-lg mt-6 text-red-800">
              No User Found{" "}
            </h3>

            <div className="modal-action flex justify-between">
              <label htmlFor="my-modal-5" className="btn bg-red-500 text-black">
                Cancel
              </label>
            </div>
          </div>
        </div>
      ) : (
        <div className="modal">
          <div className="modal-box md:w-3/12  max-w-5xl">
            <div className="flex justify-items-stretch ">
              <h3 className="font-bold text-lg">
                First Name :
                <span className="text-green-600 ml-2">{driver.firstName}</span>
              </h3>
              <h3 className="font-bold text-lg ml-5">
                Last Name :
                <span className="text-green-600 ml-2">{driver.lastName}</span>
              </h3>
            </div>
            <h3 className="font-bold text-lg mt-6">
              Email :<span className="text-green-600 ml-2">{driver.email}</span>
            </h3>
            <h3 className="font-bold text-lg mt-6">
              Phone :<span className="text-green-600 ml-2">{driver.phone}</span>
            </h3>
            <h3 className="font-bold text-lg mt-6">
              City:<span className="text-green-600 ml-2">{driver.city}</span>
            </h3>
            <h3 className="font-bold text-lg mt-6">
              State :<span className="text-green-600 ml-2">{driver.state}</span>
            </h3>
            <div className="flex justify-items-stretch">
              <h3 className="font-bold text-lg mt-6">
                DLRNO :
                <span className="text-green-600 ml-2">{driver.DLRNO}</span>
              </h3>{" "}
              <h3 className="font-bold text-lg mt-6 ml-6">
                Vehicle No :
                <span className="text-green-600 ml-2">{driver.vehicleNo}</span>
              </h3>
            </div>

            <div className="flex justify-center items-center">
              <img src={driver.PicturePath} alt="" />
              <div>
                <h3 className="font-bold text-lg mt-6 ml-6">
                  Model :
                  <span className="text-green-600 ml-2">
                    {driver.vehicleModel}
                  </span>
                </h3>{" "}
                <h3 className="font-bold text-lg mt-6 ml-6">
                  Vel No :
                  <span className="text-green-600 ml-2">
                    {driver.vehicleNo}
                  </span>
                </h3>
              </div>
            </div>
            <div className="modal-action flex justify-between">
              <label
                htmlFor="my-modal-5"
                className="btn bg-green-500 text-black"
                onClick={() => handleApproval(driver._id)}>
                Approve
              </label>

              <label htmlFor="my-modal-5" className="btn bg-red-500 text-black">
                Cancel
              </label>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Approval;
