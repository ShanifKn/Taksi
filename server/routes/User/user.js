import express from "express";
import { bookTrip, cancelBooking, carList, driverDetails, getTrips, paymentAction, paymentSucess } from "../../controllers/User/userControllers.js";
import { verifyToken } from "../../middleware/authVerify.js";

const router = express.Router();

// *--------get request -------*//

//* fetch driver list *//
router.get("/carlist", carList);
//* get driver details *//
router.get("/driver-details", driverDetails);
//* fetch trips history *//
router.get("/get-trips", verifyToken, getTrips);

router.get("/payment-success/:id", paymentSucess);

// *--------post request -------*//

//* book ride *//
router.post("/trip-book", verifyToken, bookTrip);
//* payement action *//
router.patch("/payment-action", verifyToken, paymentAction);
//* cancel action *//
router.patch("/cancel-booking", verifyToken, cancelBooking);

export default router;
