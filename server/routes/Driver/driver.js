import express from "express";
import { acceptRide, getBookings, getCurrentLocation, setCurrentLocation } from "../../controllers/Driver/driverControllers.js";
import { verifyToken } from "../../middleware/authVerify.js";

const router = express.Router();

//* fetch approval list *//
router.get("/bookings", verifyToken, getBookings);

//* Accept ride booking *//
router.patch("/accept-booking", verifyToken, acceptRide);

//* fetch current location *//
router.get("/current-location", verifyToken, getCurrentLocation);

//* set location *//
router.patch("/set-location", verifyToken, setCurrentLocation);

export default router;
