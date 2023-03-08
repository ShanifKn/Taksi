import React from "react";
import ArrowRightAltIcon from "@mui/icons-material/ArrowRightAlt";
import { payementAction } from "../../api/services/UserRequest";
import { useSelector } from "react-redux";
import { loadStripe } from "@stripe/stripe-js";

const ConfirmList = ({ trips }) => {
  const token = useSelector((state) => state.userLogin.token);
  // const stripePromise = loadStripe(`${process.env.REACT_APP_STRIPE_KEY}`);
  const stripePromise = loadStripe("pk_test_51K1wDdSGyflrBEBDm7mC82lIKLmAI6IHM95ZgIrkXJJ2oLYlfqQsgUwTPhrcjIs5Iq1gRBisSqtIJBLJZoKUUZ0f00RVlY2Yrn");

  const handlePayment = async (id) => {
    const stripe = await stripePromise;
    const response = await payementAction(id, token);

    const result = await stripe.redirectToCheckout({
      sessionId: response.data.response,
    });

    if (result.error) {
      console.error(result.error);
    }
  };

  return (
    <>
      {trips.length !== 0 && (
        <>
          <div className="flex flex-col w-full mb-10">
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
                      <button className="btn btn-success text-lg text-black  " onClick={() => handlePayment(trip._id)}>
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
