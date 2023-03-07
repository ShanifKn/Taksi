import express from "express";
import {
  acceptBooking,
  acceptRide,
  declineRide,
  getBookingHistory,
  getBookings,
  getCurrentLocation,
  getPendingBookingList,
  setCurrentLocation,
} from "../../controllers/Driver/driverControllers.js";
import { verifyToken } from "../../middleware/authVerify.js";

const router = express.Router();

// *--------get request------*//

//* fetch approval list *//
router.get("/bookings", verifyToken, getBookings);

// * fetch pending booking List *//
router.get("/pending-bookinglist", verifyToken, getPendingBookingList);

//* fetch current location *//
router.get("/current-location", verifyToken, getCurrentLocation);

//* fetch booking history *//
router.get("/booking-history", verifyToken, getBookingHistory);

// *--------patch request------*//

//* Accept ride booking *//
router.patch("/accept-booking", verifyToken, acceptRide);

//* set location *//
router.patch("/set-location", verifyToken, setCurrentLocation);

// * decline ride booking *//
router.patch("/decline-booking", verifyToken, declineRide);

//*  accept pending booking *//
router.patch("/accept-ride", verifyToken, acceptBooking);

export default router;
