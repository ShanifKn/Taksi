import express from "express";
import {
  addAmount,
  addCashWallet,
  bookTrip,
  cancelBooking,
  carList,
  driverDetails,
  getTrips,
  getWalletBalance,
  paymentAction,
  paymentSucess,
  userDetails,
  userProfileUpload,
} from "../../controllers/User/userControllers.js";
import { verifyToken } from "../../middleware/authVerify.js";
import upload from "../../middleware/multer-S3.js";

const router = express.Router();

// *--------get request -------*//

router.get("/carlist", carList); //* fetch driver list *//
router.get("/driver-details", driverDetails); //* get driver details *//
router.get("/get-trips", verifyToken, getTrips); //* fetch trips history *//
router.get("/user-info", verifyToken, userDetails); //* fetch user information *//
router.get("/wallet-balance", verifyToken, getWalletBalance); //* fetch wallet balance *//

//* Stripe routes sucess routes*//

router.get("/payment-success/:id", paymentSucess);
router.get("/payment-add", addAmount);

// *--------post request -------*//

router.post("/trip-book", verifyToken, bookTrip); //* book ride *//
router.post("/user-profile", upload.single("image"), verifyToken, userProfileUpload); //* update user profile *//
router.post("/add-cash", verifyToken, addCashWallet); //* data add cash *//

// *--------patch request -------*//

router.patch("/payment-action", verifyToken, paymentAction); //* payement action *//
router.patch("/cancel-booking", verifyToken, cancelBooking); //* cancel action *//

export default router;
