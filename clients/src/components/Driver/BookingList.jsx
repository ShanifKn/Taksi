import React from "react";
import ArrowRightAltIcon from "@mui/icons-material/ArrowRightAlt";

const BookingList = ({ trip }) => {
      
  return (
    <>
      <div class=" lg:w-1/2 mb-6 ">
        <div class="h-full flex sm:flex-row flex-col items-center sm:justify-start justify-center text-center sm:text-left ">
          <img alt="team" class="flex-shrink-0 rounded-lg w-48 h-52 object-cover object-center sm:mb-0 mb-4" src="https://dummyimage.com/200x200" />
          <div class="flex-grow sm:pl-8 ">
            <div className="flex gap-2  items-center text-white">
              <h1 className="text-lg  font-bold">{trip.location.pickup.split(",")[0]}</h1>
              <ArrowRightAltIcon />
              <h1 className="text-lg  font-bold">{trip.location.dropoff.split(",")[0]}</h1>
            </div>
            <div className="md:inline-flex gap-2">
              <p className="font-medium text-gray-300">
                Date: <span className="text-white font-medium"> {trip.date}</span>
              </p>
              <p className="font-medium text-gray-300">
                Time: <span className="text-white font-medium"> {trip.time} am</span>
              </p>
            </div>
            <div className="flex gap-2 mb-1 ">
              <p className="font-medium text-gray-300">
                Distance: <span className="text-white font-medium"> {trip.location.distance} Km</span>
              </p>
              <p className="font-medium text-gray-300">
                Amount: <span className="text-white font-medium">₹ {trip.payment.amount}</span>
              </p>
            </div>
            <h3 class="text-gray-400 ">Customer</h3>
            <h1 className="font-medium text-gray-300">
              Name: <span className="text-white font-medium">{trip.user.name}</span>
            </h1>
            <h1 className="font-medium text-gray-300">
              Phone: <span className="text-white font-medium">{trip.user.phone}</span>
            </h1>
            <h1>
              Payment Status:
              {trip.payment.status === true ? (
                <span className="text-green-500 font-medium ml-2">Paid</span>
              ) : (
                <span className="text-red-500 ml-2 font-medium">Unpaid</span>
              )}
            </h1>
            <div className="flex gap-10 items-center">
              <h3 class="text-black  font-Bold  text-xl ">
                verfication Code: <span className="text-red-500 font-medium">{trip.verficationCode}</span>
              </h3>
              {/* <button className="btn btn-error">Cancel</button> */}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default BookingList;
