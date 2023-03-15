import React, { useState } from "react";
import ArrowRightAltIcon from "@mui/icons-material/ArrowRightAlt";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";

const CancelledList = ({ trips }) => {
  const [open, setOpen] = useState(false);

  console.log(trips);
  return (
    <>
      {trips.length !== 0 && (
        <section className="text-gray-600 bg-white body-font">
          <div className="container py-10 mx-auto">
            <div className="flex flex-col w-full">
              <div className="flex justify-between">
                <h1 className="sm:text-3xl text-2xl font-medium leading-tight mb-2  text-red-600 cursor-pointer" onClick={() => setOpen(!open)}>
                  Cancelled Bookings
                </h1>
                <KeyboardArrowDownIcon className="text-end cursor-pointer" onClick={() => setOpen(!open)} />
              </div>

              <div className="h-1 w-full bg-black rounded mb-5"></div>
            </div>

            {open && (
              <div className="flex flex-wrap -m-2">
                {trips.map((trip, _id) => (
                  <>
                    <div className="p-2 lg:w-1/3 md:w-1/2 w-full" key={_id}>
                      <div className="h-full md:flex items-center border-gray-400 border p-4 rounded-lg text-black">
                        {trip.driver.length !== 0 ? (
                          <img
                            alt="team"
                            className="w-16 h-16 bg-gray-100 object-cover object-center flex-shrink-0 rounded-full mr-4"
                            src={trip.driver[0].PicturePath}
                          />
                        ) : (
                          <img
                            alt="team"
                            className="w-16 h-16 bg-gray-100 object-cover object-center flex-shrink-0 rounded-full mr-4"
                            src="https://dummyimage.com/80x80"
                          />
                        )}
                        <div className="flex-grow">
                          <div className="flex gap-2 mb-2 items-center">
                            <h1 className="text-lg  font-bold">{trip.location.pickup.split(",")[0]}</h1>
                            <ArrowRightAltIcon />
                            <h1 className="text-lg  font-bold">{trip.location.dropoff.split(",")[0]}</h1>
                          </div>
                          <p className="font-medium">
                            Booking Status : <span className="text-red-500">{trip.bookingStatus}</span>
                          </p>
                        </div>
                        <label htmlFor={`my-modal1-${_id}`} className="btn btn-sm">
                          view
                        </label>
                      </div>
                    </div>
                    <input type="checkbox" id={`my-modal1-${_id}`} className="modal-toggle" />
                    <div className="modal">
                      <div className="modal-box relative bg-black text-white">
                        <label htmlFor={`my-modal1-${_id}`} className="btn btn-sm btn-circle absolute right-2 top-2">
                          ✕
                        </label>
                        <div className="flex gap-2 mb-2">
                          <h1 className="text-lg  font-bold">{trip.location.pickup.split(",")[0]}</h1>
                          <ArrowRightAltIcon />
                          <h1 className="text-lg  font-bold">{trip.location.dropoff.split(",")[0]}</h1>
                        </div>
                        <h2 className="text-base text-gray-300">
                          Distance: <span className="font-bold text-white">{trip.location.distance} km</span>
                        </h2>
                        <h2 className="text-base text-gray-300">
                          Booking Date : <span className="font-bold text-white">{trip.date} am</span>
                        </h2>
                        <h2 className="text-base text-gray-300 mb-2">
                          Booking Time : <span className="font-bold text-white">{trip.time} am</span>
                        </h2>

                        {trip.driver.length !== 0 ? (
                          <>
                            <label className="text-yellow-300">Driver</label>
                            <div className="flex gap-2">
                              <h2 className="text-base font-medium"> {trip.driver[0].firstName}</h2>
                              <h2 className="text-base font-medium"> {trip.driver[0].lastName}</h2>
                            </div>
                            <h2 className="text-base text-gray-300 ">
                              Vehicle: <span className="font-bold text-white">{trip.driver[0].vehicleModel}</span>
                            </h2>
                            <h2 className="text-base text-gray-300 mb-4">
                              Vehicle No: <span className="font-bold text-white">{trip.driver[0].vehicleNo}</span>
                            </h2>
                          </>
                        ) : (
                          <div className="flex gap-2 mt-5">
                            <span className="text-red-600">Driver is not avaiable on this date,You can cancel the ride or wait for other driver</span>
                          </div>
                        )}

                        <h1 className="text-lg font-semibold">
                          Booking Status : <span className="text-red-500 font-bold">{trip.bookingStatus}</span>
                        </h1>
                        <div className="flex justify-end items-end mt-10"></div>
                      </div>
                    </div>
                  </>
                ))}
              </div>
            )}
          </div>
        </section>
      )}
    </>
  );
};

export default CancelledList;
