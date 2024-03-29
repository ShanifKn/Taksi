import express from "express";
import {
  acceptBooking,
  acceptRide,
  declineRide,
  endTrip,
  getBookingHistory,
  getBookings,
  getCurrentLocation,
  getPendingBookingList,
  setCurrentLocation,
  startedTrip,
  startTrip,
} from "../../controllers/Driver/driverControllers.js";
import { verifyToken } from "../../middleware/authVerify.js";

const router = express.Router();

// *--------get request------*//

router.get("/bookings", verifyToken, getBookings); //* fetch approval list *//
router.get("/pending-bookinglist", verifyToken, getPendingBookingList); // * fetch pending booking List *//
router.get("/current-location", verifyToken, getCurrentLocation); //* fetch current location *//
router.get("/booking-history", verifyToken, getBookingHistory); //* fetch booking history *//

// *--------patch request------*//

router.patch("/accept-booking", verifyToken, acceptRide); //* Accept ride booking *//
router.patch("/set-location", verifyToken, setCurrentLocation); //* set location *//
router.patch("/decline-booking", verifyToken, declineRide); // * decline ride booking *//
router.patch("/accept-ride", verifyToken, acceptBooking); //*  accept pending booking *//
router.patch("/trip-start", verifyToken, startTrip); //* verify user verification code *//
router.patch("/trip-end", verifyToken, endTrip); //* reached in the location *//
router.patch("/trip-on", verifyToken, startedTrip); //*

export default router;
