import React, { useState } from "react";
import ArrowRightAltIcon from "@mui/icons-material/ArrowRightAlt";
import { cancelTrip, payementAction } from "../../api/services/UserRequest";
import { useSelector } from "react-redux";
import { loadStripe } from "@stripe/stripe-js";
import ErrorOutlineIcon from "@mui/icons-material/ErrorOutline";

const ConfirmList = ({ trips, fetch }) => {
  const token = useSelector((state) => state.userLogin.token);
  const stripePromise = loadStripe(`${process.env.REACT_APP_STRIPE_KEY}`);
  const [cancelConformation, setCancelConformation] = useState(false);
  const [modal, setModal] = useState(false);
  const [error, setError] = useState("");

  const handlePayment = async (id) => {
    const stripe = await stripePromise;
    const response = await payementAction(id, token);
    const result = await stripe.redirectToCheckout({ sessionId: response.data.response });
    if (result.error) return setError("Server error");
  };

  const close = () => {
    setModal(false);
    setCancelConformation(false);
    setTimeout(() => {
      fetch();
    }, 1000);
  };

  const cancelBooking = async (id) => {
    const response = await cancelTrip(id, token);
    if (response.status === 200) {
      close();
      setError("Booking canceled");
    }
    if (response.status === 300) return setError("Booking canceled charges as applied for late cancellation");
    if (response.status === 500) return setError("Internal server error!");

    setTimeout(() => {
      setError();
    }, 2000);
  };

  return (
    <>
      {trips.length !== 0 && (
        <>
          <div className="flex flex-col w-full mb-10">
            {error && (
              <div className="flex justify-center">
                <div className="alert alert-error shadow-lg w-96 mb-2">
                  <div>
                    <ErrorOutlineIcon className="stroke-current flex-shrink-0 h-6 w-6" />
                    <span>{error}</span>
                  </div>
                </div>
              </div>
            )}
            <h1 className="sm:text-3xl text-2xl font-bold capitalize mb-4 text-green-900">Confirmed booking</h1>
          </div>
          <div className="flex flex-wrap -m-4 justify-center mb-10">
            {trips.map((trip, _id) => (
              <>
                <div className="p-4 lg:w-1/2 mb-10 md:mb-0" key={_id}>
                  <div className="h-full flex sm:flex-row flex-col items-center sm:justify-start justify-center text-center sm:text-left">
                    <img
                      className="flex-shrink-0 rounded-lg w-36 h-36 object-cover object-center sm:mb-0 mb-4"
                      src="https://dummyimage.com/200x200"
                      alt={trip.driver[0].firstName}
                    />
                    <div className="flex-grow sm:pl-8 ">
                      <div className="flex gap-2 items-center">
                        <h2 className="title-font font-medium text-lg text-gray-900">{trip.location.pickup.split(",")[0]}</h2>
                        <ArrowRightAltIcon />
                        <h2 className="title-font font-medium text-lg text-gray-900">{trip.location.dropoff.split(",")[0]}</h2>
                      </div>
                      <div className="flex gap-11 mt-3">
                        <h3 className="text-gray-500">
                          Vechile:<span className="text-black ml-2">{trip.driver[0].vehicleModel}</span>
                        </h3>
                        <h3 className="text-gray-500">
                          Vechile no:<span className="text-black ml-2">{trip.driver[0].vehicleNo}</span>
                        </h3>
                      </div>
                      <div className="flex gap-5">
                        <h3 className="text-gray-500">
                          Date:<span className="text-black ml-2">{trip.date}</span>
                        </h3>
                        <h3 className="text-gray-500">
                          Time:<span className="text-black ml-2">{trip.time}</span>
                        </h3>
                      </div>
                      <h3 className="text-black font-medium mt-5 text-start ">
                        Verfication Code : <span className="text-red-600 font-bold">{trip.verficationCode}</span>
                      </h3>
                    </div>
                  </div>
                  <label htmlFor={`my-modal-${_id}`} className="btn ml-32 md:ml-0" onClick={() => setModal(true)}>
                    view
                  </label>
                </div>

                {modal && (
                  <>
                    <input type="checkbox" id={`my-modal-${_id}`} className="modal-toggle" />
                    <div className="modal">
                      <div className="modal-box relative bg-black text-white">
                        <label htmlFor={`my-modal-${_id}`} className="btn btn-sm btn-circle absolute right-2 top-2" onClick={() => setModal(false)}>
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
                        {trip.payment.status && (
                          <h1 className="text-lg font-semibold">
                            Payment Status : <span className="text-green-500 font-bold ml-1">Paid</span>
                          </h1>
                        )}
                        <div className="flex justify-between mt-10">
                          {!trip.payment.status && (
                            <button className="btn btn-success text-lg text-black  " onClick={() => handlePayment(trip._id)}>
                              Pay <spam className="text-black font-bold ml-1">₹{trip.payment.amount} </spam>
                            </button>
                          )}
                          <label
                            htmlFor={`my-modal-6-${_id}`}
                            className="btn btn-error text-base text-black"
                            onClick={() => setCancelConformation(true)}>
                            Cancel Booking
                          </label>
                        </div>
                      </div>
                    </div>
                  </>
                )}

                {cancelConformation && (
                  <>
                    <input type="checkbox" id={`my-modal-6-${_id}`} className="modal-toggle" />
                    <div className="modal modal-bottom sm:modal-middle ">
                      <div className="relative bg-white rounded-lg shadow dark:bg-gray-700">
                        <div className="p-6 text-center">
                          <ErrorOutlineIcon className="mx-auto mb-4 text-gray-400 w-14 h-14 dark:text-gray-200" />
                          <h3 className="mb-2 text-lg font-normal text-gray-500 dark:text-gray-400">Are you sure you want to cancel the booking?</h3>
                          <h4 className="text-red-500 mb-4 text-sm">For late cancellation 5 percent of amount is detited</h4>
                          <button
                            type="button"
                            onClick={() => cancelBooking(trip._id)}
                            className="text-white bg-red-600 hover:bg-red-800 focus:ring-4 focus:outline-none focus:ring-red-300 dark:focus:ring-red-800 font-medium rounded-lg text-sm inline-flex items-center px-5 py-2.5 text-center mr-2">
                            Yes, I'm sure
                          </button>
                          <label
                            htmlFor={`my-modal-6-${_id}`}
                            className="text-gray-500 bg-white hover:bg-gray-100 focus:ring-4 focus:outline-none focus:ring-gray-200 rounded-lg border border-gray-200 text-sm font-medium px-5 py-2.5 hover:text-gray-900 focus:z-10 dark:bg-gray-700 dark:text-gray-300 dark:border-gray-500 dark:hover:text-white dark:hover:bg-gray-600 dark:focus:ring-gray-600">
                            No, cancel
                          </label>
                        </div>
                      </div>
                    </div>
                  </>
                )}
              </>
            ))}
          </div>
        </>
      )}
    </>
  );
};

export default ConfirmList;
