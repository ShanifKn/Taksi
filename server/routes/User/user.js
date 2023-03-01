import express from "express";
import { bookTrip, carList, driverDetails, getTrips } from "../../controllers/User/userControllers.js";
import { verifyToken } from "../../middleware/authVerify.js";

const router = express.Router();

//* fetch driver list *//
router.get("/carlist", carList);

//* get driver details *//
router.get("/driver-details", driverDetails);

//* book ride *//
router.post("/trip-book", verifyToken, bookTrip);

//* fetch trips history *//
router.get("/get-trips", verifyToken, getTrips);

export default router;

