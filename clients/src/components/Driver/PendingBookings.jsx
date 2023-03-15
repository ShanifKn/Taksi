// import React, { useEffect, useState } from "react";
// import { useSelector } from "react-redux";
// import { useNavigate } from "react-router-dom";
// import { getPendingBookings } from "../../api/services/DriverRequest";
// import PendingBookingList from "./PendingBookingList";

// const PendingBookings = () => {
//   const token = useSelector((state) => state.driverLogin.token);
//   const [booking, setBookings] = useState([]);
//   const [bookingAccepted, setBookAccepted] = useState(false);
//   const navigate = useNavigate();

//   const fetchBookings = async () => {
//     const response = await getPendingBookings(token);
//     if (response.status === 500) return navigate("/driver/error");
//     if (response.status === 200) return setBookings(response.data);
//   };

//   useEffect(() => {
//     fetchBookings();
//     // eslint-disable-next-line
//   }, []);

//   const bookingAccept = () => {
//     setBookAccepted(true);
//     setTimeout(() => setBookAccepted(false), 2000);
//     fetchBookings();
//   };

//   return (
//     <>
//       <section className="text-gray-400 bg-gray-900 body-font h-screen ">
//         <div className="container md:pl-28  px-5 md:py-36 py-28 mx-auto">
//           {bookingAccepted && (
//             <div className="flex justify-center">
//               <div className="alert alert-success shadow-lg mb-4 w-96">
//                 <div>
//                   <svg xmlns="http://www.w3.org/2000/svg" className="stroke-current flex-shrink-0 h-6 w-6" fill="none" viewBox="0 0 24 24">
//                     <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
//                   </svg>
//                   <span>New booking accepted!</span>
//                 </div>
//               </div>
//             </div>
//           )}

//           <div className="flex flex-col text-start w-full mb-20">
//             <h1 className="sm:text-3xl text-2xl font-medium title-font mb-4 text-white md:text-center">Pending Bookings</h1>
//             <div className="h-1 w-48 bg-indigo-500 rounded"></div>
//             <p className="lg:w-2/3 mt-4 leading-relaxed text-base">Available reservations there was no driver who accepted the ride.</p>
//           </div>

//           {booking.length !== 0 ? (
//             <div className="flex flex-wrap -m-2">
//               {booking.map((trip, _id) => (
//                 <PendingBookingList key={_id} data={trip} accept={bookingAccept} />
//               ))}
//             </div>
//           ) : (
//             <div className="flex flex-wrap -m-2">
//               <h1 className="font-medium text-2xl text-white">No Available Bookings</h1>
//             </div>
//           )}
//         </div>
//       </section>
//     </>
//   );
// };

// export default PendingBookings;
