import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { approve, driverApproval, driverDetails } from "../../api/services/AdminRequest";

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
  }, []);

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
        <table className="w-full  text-sm text-left text-gray-500 dark:text-gray-100">
          <thead className="text-xs text-gray-700 uppercase dark:text-gray-100">
            <tr>
              <th scope="col" className="px-6 py-3 bg-gray-50 dark:bg-gray-800">
                name
              </th>
            </tr>
          </thead>

          <tbody>
            <tr className="border-b border-gray-200 dark:border-gray-700 flex text-center">
              <th scope="row" className="px-6 py-4 w-full font-medium  text-gray-900 whitespace-nowrap bg-gray-50 dark:text-red-600 dark:bg-gray-800">
                No new registrations
              </th>
            </tr>
          </tbody>
        </table>
      ) : (
        <div className="overflow-x-auto w-full bg-gray-100">
          <table className="table w-full text-sm text-left text-gray-500 dark:text-gray-100 shadow-lg bg-white">
            <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-100">
              <tr>
                <th>Name</th>
                <th>Vehicle</th>
                <th>City</th>
                <th>Details</th>
              </tr>
            </thead>
            <tbody>
              {list.map((driver, _id) => (
                <tr key={_id} className="hover">
                  <td>
                    <div className="flex items-center space-x-3">
                      <div className="avatar">
                        <div className="mask mask-squircle w-12 h-12">
                          <img src={driver.PicturePath} alt={driver.vehicleModel} />
                        </div>
                      </div>
                      <div>
                        <div className="font-bold">
                          {driver.firstName} {driver.lastName}
                        </div>
                        <div className="text-sm opacity-50">{driver.vehicleModel}</div>
                      </div>
                    </div>
                  </td>
                  <td>{driver.vehicleModel}</td>
                  <td>{driver.city}</td>
                  <th>
                    <label htmlFor="my-modal-5" className="btn" onClick={() => details(driver._id)}>
                      view
                    </label>
                  </th>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}

      <input type="checkbox" id="my-modal-5" className="modal-toggle" />

      {!driver ? (
        <div className="modal">
          <div className="modal-box md:w-3/12  max-w-5xl">
            <h3 className="font-bold text-lg  mt-6 text-red-800">No User Found </h3>

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
              <h3 className="font-bold text-lg text-gray-400">
                First Name :<span className="text-white ml-2">{driver.firstName}</span>
              </h3>
              <h3 className="font-bold text-lg text-gray-400 ml-5">
                Last Name :<span className="text-white ml-2">{driver.lastName}</span>
              </h3>
            </div>
            <h3 className="font-bold text-lg text-gray-400 mt-6">
              Email :<span className="text-white ml-2">{driver.email}</span>
            </h3>
            <h3 className="font-bold text-lg text-gray-400 mt-6">
              Phone :<span className="text-white ml-2">{driver.phone}</span>
            </h3>
            <h3 className="font-bold text-lg text-gray-400 mt-6">
              City:<span className="text-white ml-2">{driver.city}</span>
            </h3>
            <h3 className="font-bold text-lg text-gray-400 mt-6">
              State :<span className="text-white ml-2">{driver.state}</span>
            </h3>
            <div className="flex justify-items-stretch">
              <h3 className="font-bold text-lg text-gray-400 mt-6">
                DLRNO :<span className="text-white ml-2">{driver.DLRNO}</span>
              </h3>{" "}
              <h3 className="font-bold text-lg text-gray-400 mt-6 ml-6">
                Vehicle No :<span className="text-white ml-2">{driver.vehicleNo}</span>
              </h3>
            </div>

            <div className="flex justify-center items-center">
              <img src={driver.PicturePath} alt="" />
              <div>
                <h3 className="font-bold text-lg text-gray-400 mt-6 ml-6">
                  Model :<span className="text-white ml-2">{driver.vehicleModel}</span>
                </h3>{" "}
                <h3 className="font-bold text-lg text-gray-400 mt-6 ml-6">
                  Vel No :<span className="text-white ml-2">{driver.vehicleNo}</span>
                </h3>
              </div>
            </div>
            <div className="modal-action flex justify-between">
              <label htmlFor="my-modal-5" className="btn bg-green-500 text-black" onClick={() => handleApproval(driver._id)}>
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
