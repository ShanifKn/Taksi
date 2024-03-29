import express from "express";
import {
  addAmount,
  addCashWallet,
  autoCancel,
  bookTrip,
  cancelBooking,
  carList,
  driverDetails,
  getTrips,
  getWalletBalance,
  getWalletHistory,
  paymentAction,
  paymentSucess,
  PendingRide,
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
router.get("/wallet-details", verifyToken, getWalletHistory);

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
router.patch("/cancel-ride", verifyToken, PendingRide); //* cancel pending ride *//

// *--------delete request -------*//

router.delete("/auto-cancel", verifyToken, autoCancel);

export default router;
