import React from "react";
import ArrowRightAltIcon from "@mui/icons-material/ArrowRightAlt";

const ConfirmList = ({ trips }) => {
  return (
    <>
      {trips.length !== 0 && (
        <>
          <div class="flex flex-col w-full mb-10">
            <h1 class="sm:text-3xl text-2xl font-bold capitalize mb-4 text-green-900">Confirmed booking</h1>
          </div>
          <div class="flex flex-wrap -m-4 justify-center mb-10">
            {trips.map((trip, _id) => (
              <>
                <div class="p-4 lg:w-1/2 mb-10 md:mb-0" key={_id}>
                  <div class="h-full flex sm:flex-row flex-col items-center sm:justify-start justify-center text-center sm:text-left">
                    <img
                      class="flex-shrink-0 rounded-lg w-36 h-36 object-cover object-center sm:mb-0 mb-4"
                      src="https://dummyimage.com/200x200"
                      alt={trip.driver[0].firstName}
                    />
                    <div class="flex-grow sm:pl-8 ">
                      <div className="flex gap-2 items-center">
                        <h2 class="title-font font-medium text-lg text-gray-900">{trip.location.pickup.split(",")[0]}</h2>
                        <ArrowRightAltIcon />
                        <h2 class="title-font font-medium text-lg text-gray-900">{trip.location.dropoff.split(",")[0]}</h2>
                      </div>
                      <div className="flex gap-11 mt-3">
                        <h3 class="text-gray-500">
                          Vechile:<span className="text-black ml-2">{trip.driver[0].vehicleModel}</span>
                        </h3>
                        <h3 class="text-gray-500">
                          Vechile no:<span className="text-black ml-2">{trip.driver[0].vehicleNo}</span>
                        </h3>
                      </div>
                      <div className="flex gap-5">
                        <h3 class="text-gray-500">
                          Date:<span className="text-black ml-2">{trip.date}</span>
                        </h3>
                        <h3 class="text-gray-500">
                          Time:<span className="text-black ml-2">{trip.time}</span>
                        </h3>
                      </div>
                      <h3 class="text-black font-medium mt-5 text-start ">
                        Verfication Code : <span className="text-red-600 font-bold">{trip.verficationCode}</span>
                      </h3>
                    </div>
                  </div>
                  <label htmlFor={`my-modal-${_id}`} className="btn ml-32 md:ml-0">
                    view
                  </label>
                </div>
                <input type="checkbox" id={`my-modal-${_id}`} className="modal-toggle" />
                <div className="modal">
                  <div className="modal-box relative bg-black text-white">
                    <label htmlFor={`my-modal-${_id}`} className="btn btn-sm btn-circle absolute right-2 top-2">
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
                    <h1 className="text-lg font-semibold">
                      Verfication Code : <span className="text-red-500 font-bold">{trip.verficationCode}</span>
                    </h1>
                    <div className="flex justify-between mt-10">
                      <button className="btn btn-success text-lg text-black ">
                        Pay <spam className="text-black font-bold ml-1">₹{trip.payment.amount} </spam>
                      </button>
                      <button className="btn btn-error text-base text-black ">cancel Booking</button>
                    </div>
                  </div>
                </div>
              </>
            ))}
          </div>
        </>
      )}
    </>
  );
};

export default ConfirmList;
