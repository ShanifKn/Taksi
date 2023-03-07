import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { fetchBookingHistory } from "../../api/services/DriverRequest";
import BookingList from "./BookingList";
import ErrorOutlineIcon from "@mui/icons-material/ErrorOutline";

const UpcomingTrips = () => {
  const token = useSelector((state) => state.driverLogin.token);
  const [trips, setTrips] = useState([]);
  const [error, setError] = useState();

  const fetchHistory = async () => {
    const response = await fetchBookingHistory(token);
    if (response.status === 200) return setTrips(response.data.Bookings);
    if (response.status === 500) return setError("Try again after some time");
  };

  useEffect(() => {
    fetchHistory();
    // eslint-disable-next-line
  }, []);

  console.log(trips);

  return (
    <>
      <section class="text-white body-font">
        <div class="container px-5 py-10 mx-auto">
          <div class="flex flex-col text-start w-full mb-20">
            {error && (
              <div className="flex justify-center ">
                <div className="alert alert-error shadow-lg w-80">
                  <div>
                    <ErrorOutlineIcon className="stroke-current flex-shrink-0 h-6 w-6" />
                    <span>{error}</span>
                  </div>
                </div>
              </div>
            )}

            <h1 class="sm:text-3xl text-2xl font-medium title-font mb-2 text-gray-100">Upcomming Trips</h1>
            <div className="h-1 w-44 bg-indigo-500 rounded"></div>
          </div>
          {trips.length !== 0 ? (
            <div class="flex flex-wrap -m-4 justify-center md:justify-start">
              {trips.map((trip, _id) => (
                <BookingList key={_id} trip={trip} />
              ))}
            </div>
          ) : (
            <div class="flex flex-wrap -m-4 justify-center md:justify-start">
              <h1>No avaible bookings</h1>
            </div>
          )}
        </div>
      </section>
    </>
  );
};

export default UpcomingTrips;
