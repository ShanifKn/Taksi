import express from "express";
import {
  addAmount,
  addCashWallet,
  bookTrip,
  cancelBooking,
  carList,
  driverDetails,
  getTrips,
  paymentAction,
  paymentSucess,
  userDetails,
  userProfileUpload,
} from "../../controllers/User/userControllers.js";
import { verifyToken } from "../../middleware/authVerify.js";
import upload from "../../middleware/multer-S3.js";

const router = express.Router();

// *--------get request -------*//

//* fetch driver list *//
router.get("/carlist", carList);
//* get driver details *//
router.get("/driver-details", driverDetails);
//* fetch trips history *//
router.get("/get-trips", verifyToken, getTrips);

//* Stripe routes sucess routes*//
router.get("/payment-success/:id", paymentSucess);

router.get("/payment-add", addAmount);

//* fetch user information *//
router.get("/user-info", verifyToken, userDetails);

// *--------post request -------*//

//* book ride *//
router.post("/trip-book", verifyToken, bookTrip);
//* payement action *//
router.patch("/payment-action", verifyToken, paymentAction);
//* cancel action *//
router.patch("/cancel-booking", verifyToken, cancelBooking);

//* update user profile *//
router.post("/user-profile", upload.single("image"), verifyToken, userProfileUpload);

//* data add cash *//
router.post("/add-cash", verifyToken, addCashWallet);

export default router;
