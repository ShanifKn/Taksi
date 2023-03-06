import React, { useState } from "react";
import ArrowRightAltIcon from "@mui/icons-material/ArrowRightAlt";
import ErrorOutlineIcon from "@mui/icons-material/ErrorOutline";
import { acceptPendingBookings } from "../../api/services/DriverRequest";
import { useSelector } from "react-redux";

const PendingBookingList = (trip) => {
  const token = useSelector((state) => state.driverLogin.token);
  const [error, setError] = useState("");

  console.log(trip.data);

  const handleBooking = async (id) => {
    const response = await acceptPendingBookings(id, token);
    console.log(response);
  };

  return (
    <>
      <div className="p-2 lg:w-1/3 md:w-1/2 w-full">
        <div className="h-full flex items-center border-gray-800 border p-4 rounded-lg">
          <img
            alt="team"
            className="w-16 h-16 bg-gray-100 object-cover object-center flex-shrink-0 rounded-full mr-4"
            src="https://dummyimage.com/80x80"
          />
          <div className="flex-grow">
            <div className="flex gap-2 mb-2 items-center text-white">
              <h1 className="text-lg  font-bold">{trip.data.location.pickup.split(",")[0]}</h1>
              <ArrowRightAltIcon />
              <h1 className="text-lg  font-bold">{trip.data.location.dropoff.split(",")[0]}</h1>
            </div>
            <div className="flex justify-between items-center">
              <h2 className="text-gray-200">
                Date : <span className="text-red-500 font-semibold">{trip.data.date}</span>
              </h2>
              <label htmlFor={`my-modal1-${trip.data._id}`} className="btn btn-sm btn-outline">
                view
              </label>
            </div>
          </div>
        </div>
      </div>
      <input type="checkbox" id={`my-modal1-${trip.data._id}`} className="modal-toggle" />
      <div className="modal ">
        <div className="modal-box bg-gray-100 text-black">
          {error && (
            <div className="alert alert-error shadow-lg mb-2">
              <div>
                <ErrorOutlineIcon className="stroke-current flex-shrink-0 h-6 w-6" />
                <span>{error}</span>
              </div>
            </div>
          )}
          <div className="flex gap-2 mb-1 items-center ">
            <h1 className="text-lg  font-bold">{trip.data.location.pickup.split(",")[0]}</h1>
            <ArrowRightAltIcon />
            <h1 className="text-lg  font-bold">{trip.data.location.dropoff.split(",")[0]}</h1>
          </div>
          <h2 className="font-medium">
            Distance : <span className=" font-semibold">{trip.data.location.distance} km</span>
          </h2>
          <h2 className="font-medium">
            Price : <span className=" font-semibold">₹ {trip.data.payment.amount}</span>
          </h2>
          <div className="flex gap-4">
            <h2 className="font-medium">
              Time : <span className="font-semibold text-red-500">{trip.data.time} am</span>
            </h2>
            <h2 className="font-medium">
              Date : <span className=" font-semibold text-red-500">{trip.data.date}</span>
            </h2>
          </div>
          <div className="card card-side  mt-6 ">
            <figure className="w-24 rounded-full h-24">
              <img
                src="https://images.unsplash.com/photo-1514489024785-d5ba8dfb2198?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=688&q=80"
                alt="Movie"
              />
            </figure>
            <div className="ml-2">
              <h2 className="card-title">{trip.data.user.name}</h2>
              <h3 className="">{trip.data.user.email}</h3>
              <h3 className="">{trip.data.user.phone}</h3>
            </div>
          </div>
          <div className="modal-action flex">
            <button className="btn bg-transparent text-black btn-success" onClick={() => handleBooking(trip.data._id)}>
              Accept
            </button>
            <label htmlFor={`my-modal1-${trip.data._id}`} className="btn">
              Close
            </label>
          </div>
        </div>
      </div>
    </>
  );
};

export default PendingBookingList;
