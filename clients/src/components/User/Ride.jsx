/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { getTrips } from "../../api/services/UserRequest";
import PendingList from "./PendingList";
import FinishList from "./FinishList";
import ConfirmList from "./ConfirmList";

const Ride = () => {
  const token = useSelector((state) => state.userLogin.token);

  const navigate = useNavigate();
  const [trips, setTrips] = useState([]);
  const [confirmTrip, setConfirmTrips] = useState([]);
  const [pendingTrip, setPendingTrips] = useState([]);
  const [finishedTrip, setFinishedTrips] = useState([]);

  const fetchTrips = async () => {
    const response = await getTrips(token);
    const data = response.data;
    if (response.status === 200) {
      setTrips(data.trip);
      const bookingComfrim = data.trip.filter((trip) => trip.bookingStatus === "Conform");
      const bookingPending = data.trip.filter((trip) => trip.bookingStatus === "Pending");
      const bookingCompleted = data.trip.filter((trip) => trip.bookingStatus === "finished");
      setConfirmTrips(bookingComfrim);
      setPendingTrips(bookingPending);
      setFinishedTrips(bookingCompleted);
    }
    if (response.status === 500) return navigate("/error");
  };

  useEffect(() => {
    fetchTrips();
  }, []);

  return (
    <>
      {trips.length !== 0 ? (
        <>
          <section class="text-gray-900 bg-white body-font">
            <div class="container px-5 py-24 mx-auto ">
              <div class="flex flex-col text-center w-full mb-20">
                <h1 class="text-4xl font-medium  mb-4 text-gray-900 ">Bookings</h1>
              </div>
              <ConfirmList trips={confirmTrip} />
              <PendingList trips={pendingTrip} />
              <FinishList trip={finishedTrip} />
            </div>
          </section>
        </>
      ) : (
        <section class="text-gray-600 body-font">
          <div class="container px-5 py-24 mx-auto">
            <div class="flex flex-col text-center w-full mb-20">
              <h1 class="sm:text-3xl text-2xl font-medium title-font mb-4 text-gray-900">Pending Bookings</h1>
            </div>
            <div class="flex justify-center ">
              <div class="lg:w-1/3 md:w-1/2 w-full">
                <div class="h-full flex items-center w-full  justify-center">
                  <h1 className="text-gray-700 text-xl">No Booking has been made yet</h1>
                </div>
              </div>
            </div>
          </div>
        </section>
      )}
    </>
  );
};

export default Ride;
