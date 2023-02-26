import express from "express";
import { bookTrip, carList, driverDetails } from "../../controllers/User/userControllers.js";
import { verifyToken } from "../../middleware/authVerify.js";

const router = express.Router();

//* fetch driver list *//
router.get("/carlist", carList);

//* get driver details *//
router.get("/driver-details", driverDetails);

//* book ride *//
router.post("/book-trip", verifyToken, bookTrip);

export default router;
