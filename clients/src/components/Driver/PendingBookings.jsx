import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { getPendingBookings } from "../../api/services/DriverRequest";
import PendingBookingList from "./PendingBookingList";

const PendingBookings = () => {
  const token = useSelector((state) => state.driverLogin.token);
  const [booking, setBookings] = useState([]);
  const navigate = useNavigate();

  const fetchBookings = async () => {
    const response = await getPendingBookings(token);
    if (response.status === 500) return navigate("/driver/error");
    if (response.status === 200) return setBookings(response.data);
  };

  useEffect(() => {
    fetchBookings();
  }, []);

  return (
    <>
      <section className="text-gray-400 bg-gray-900 body-font h-screen ">
        <div className="container md:pl-28  px-5 md:py-36 py-28 mx-auto">
          <div className="flex flex-col text-start w-full mb-20">
            <h1 className="sm:text-3xl text-2xl font-medium title-font mb-4 text-white">Pending Bookings</h1>
            <div className="h-1 w-48 bg-indigo-500 rounded"></div>
            <p className="lg:w-2/3 mt-4 leading-relaxed text-base">Available reservations there was no driver who accepted the ride.</p>
          </div>

          {booking.length != 0 ? (
            <div className="flex flex-wrap -m-2">
              {booking.map((trip, _id) => (
                <PendingBookingList key={_id} data={trip} />
              ))}
            </div>
          ) : (
            <div className="flex flex-wrap -m-2">
              <h1 className="font-medium text-2xl text-white">No Available Bookings</h1>
            </div>
          )}
        </div>
      </section>
    </>
  );
};

export default PendingBookings;
