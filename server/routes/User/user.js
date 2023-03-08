import express from "express";
import { bookTrip, carList, driverDetails, getTrips, paymentAction, paymentSucess } from "../../controllers/User/userControllers.js";
import { verifyToken } from "../../middleware/authVerify.js";

const router = express.Router();

// *--------get request -------*//

//* fetch driver list *//
router.get("/carlist", carList);
//* get driver details *//
router.get("/driver-details", driverDetails);
//* fetch trips history *//
router.get("/get-trips", verifyToken, getTrips);

// *--------post request -------*//

//* book ride *//
router.post("/trip-book", verifyToken, bookTrip);
//* payement action *//
router.patch("/payment-action", verifyToken, paymentAction);

export default router;
