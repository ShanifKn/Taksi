/* eslint-disable jsx-a11y/alt-text */
import React, { useContext, useState } from "react";
import RiderSelector from "../User/RiderSelector";
import Datepicker from "tailwind-datepicker-react";
import { selectTripContext } from "../../Context/SelectTrip";
import { handleBookTrip, options } from "../../Helpers/user";
import { useSelector } from "react-redux";
import StarIcon from "@mui/icons-material/Star";
import StarHalfIcon from "@mui/icons-material/StarHalf";
import StarOutlineIcon from "@mui/icons-material/StarOutline";
import { Navigate, useNavigate } from "react-router-dom";
import { BookedTrip } from "../../api/services/UserRequest";

const Confirm = () => {
  const token = useSelector((state) => state.userLogin.token);
  const navigate = useNavigate();
  const { tripDetails, setTripDate, tripDate, tripTime, setTripTime } = useContext(selectTripContext);
  const [show, setShow] = useState(false);
  const [driver, setDriver] = useState();
  const [error, setError] = useState("");

  const handleDatePicker = (state) => {
    setShow(state);
  };

  const handleBooking = async (id) => {
    const response = await handleBookTrip(id);
    setDriver(response.data.driver);
  };

  const handleChange = (selectedDate) => {
    const date = new Date(selectedDate);
    const options = { day: "numeric", month: "short", year: "numeric" };
    const formattedDate = new Intl.DateTimeFormat("en-IN", options).format(date);
    setTripDate({ date: formattedDate });
  };

  const bookTrip = async () => {
    if (tripDetails.driver === "" || tripDetails.pickup === "" || tripDetails.dropOff === "" || tripDate === undefined || tripTime === undefined) {
      setError("Please select everthing");
      return false;
    }
    if (!token) {
      navigate("/login");
    } else {
      await BookedTrip(token, tripDetails, tripDate, tripTime);
    }
  };

  return (
    <>
      <div className="flex-1 h-full flex flex-col justify-between">
        <div className="h-full flex flex-col overflow-scroll scrollbar-hide">
          <RiderSelector />
        </div>
        {tripDetails.driver ? (
          <div className="border-t-2 cursor-pointer z-10 relative">
            <div className="bg-black text-white m-4  text-center text-xl" onClick={() => handleBooking(tripDetails.driver)}>
              <label htmlFor="my-modal-3" className="btn bg-black border-none text-white hover:bg-black">
                Comfirm
              </label>
            </div>
          </div>
        ) : (
          <div className="border-t-2 cursor-pointer z-10 relative">
            <div className="bg-black text-white m-4 py-4 text-center text-xl">Please select your locations</div>
          </div>
        )}
      </div>
      <input type="checkbox" id="my-modal-3" className="modal-toggle " />
      <div className="modal  ">
        <div className="modal-box relative h-5/6 bg-black text-white mt-14 overflow-hidden scrollbar-hide">
          <label htmlFor="my-modal-3" className="btn btn-sm btn-circle absolute right-2 top-2">
            ✕
          </label>
          <h3 className="text-2xl capitalize font-bold text-center mb-4 ">Book your ride.</h3>

          {error ? (
            <p className="flex justify-center text-red-700 mb-6">Please select Date and time</p>
          ) : (
            <p className="flex justify-center mb-6">Select your date comfrom your booking</p>
          )}

          <div className="flex-row justify-start">
            <div className="flex items-center  gap-4 ">
              <div>
                <label className="label">
                  <span className="label-text">Select Date</span>
                </label>
                <Datepicker options={options} onChange={handleChange} show={show} setShow={handleDatePicker} />
              </div>
              <div>
                <label className="label">
                  <span className="label-text">Time</span>
                </label>
                <input type="time" className="input input-bordered" onChange={(e) => setTripTime(e.target.value)} value={tripTime} />
              </div>
            </div>
            <div className="form-control mt-2">
              <label className="label">
                <span className="label-text">Enter amount</span>
              </label>
              <label className="input-group">
                <input type="text" disabled value={driver ? `₹ ${tripDetails.distance * driver.Rate}` : "₹  0"} className="input input-bordered" />
              </label>
            </div>
            <div className="form-control mt-2">
              <label className="label">
                <span className="label-text">Pick Up</span>
              </label>
              <label className="input-group">
                <input type="text" disabled value={driver ? tripDetails.pickup : "null"} className="input input-bordered" />
              </label>
            </div>
            <div className="form-control mt-2">
              <label className="label">
                <span className="label-text">Enter amount</span>
              </label>
              <label className="input-group">
                <input type="text" disabled className="input input-bordered" value={driver ? tripDetails.dropOff : "null"} />
              </label>
            </div>
            <div className="relative block overflow-hidden rounded-lg  mt-5 border border-gray-100 p-8">
              <span className="absolute inset-x-0 bottom-0 h-2 bg-gradient-to-r from-green-300 via-blue-500 to-purple-600"></span>

              <div className="justify-between sm:flex">
                <div>
                  <h3 className="text-xl font-bold text-gray-600">
                    NAME:
                    <span className="ml-2 text-white">{driver && ` ${driver.firstName} ${driver.lastName}`}</span>
                  </h3>
                  <p className="mt-1 text-xs font-medium  text-gray-600">
                    DL: <span className="ml-2 text-white">{driver && driver.DLRNO}</span>
                  </p>
                  <p className="mt-1 text-xs font-medium  text-gray-600">
                    FROM: <span className="ml-2 text-white">{driver && `${driver.city},${driver.state}`}</span>
                  </p>
                  <p className="mt-1 text-xs font-medium  text-gray-600">
                    CONTACT: <span className="ml-2 text-white">{driver && driver.phone}</span>
                  </p>
                </div>

                <div className="ml-3 hidden  flex-shrink-0  sm:block ">
                  <img alt="Paul Clapton" src={driver && driver.PicturePath} className="h-16 w-16 rounded-lg object-cover shadow-sm bg-white" />
                  <p className="mt-1 ml-4 text-xs font-medium  text-gray-200">{driver && driver.vehicleModel}</p>
                </div>
              </div>
              <dl className="mt-4 flex">
                <div className="flex flex-col">
                  <dt className="text-sm font-medium text-gray-500">Vechile Model</dt>
                  <dd className="text-xs text-gray-100">{driver && driver.vehicleModel} </dd>
                </div>

                <div className="ml-3 flex flex-col sm:ml-6">
                  <dt className="text-sm font-medium text-gray-500">Vechile No</dt>
                  <dd className="text-xs text-gray-100">{driver && driver.vehicleNo} </dd>
                </div>
              </dl>

              <div className="mt-2 sm:pr-8">
                <label>Rating: </label>
                <span className="text-yellow-500">
                  <StarIcon />
                  <StarIcon />
                  <StarIcon />
                  <StarHalfIcon />
                  <StarOutlineIcon />
                </span>
              </div>
            </div>
          </div>
          <div className="flex justify-center mt-3">
            <button className="btn btn-outline btn-accent " onClick={bookTrip}>
              Book
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Confirm;
