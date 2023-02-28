import express from "express";
import { acceptRide, getBookings } from "../../controllers/Driver/driverControllers.js";
import { verifyToken } from "../../middleware/authVerify.js";

const router = express.Router();

//* fetch approval list *//
router.get("/bookings", verifyToken, getBookings);

//* Accept ride booking *//
router.patch("/accept-booking", verifyToken, acceptRide);

export default router;
