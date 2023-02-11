import express from "express";
import {
  AdminLogin,
  DriverLogin,
  DriverSigup,
  googleAuth,
  passwordCheck,
  resendOtp,
  userAuth,
  UserSignup,
  verify,
} from "../controllers/auth.js";
import upload from "../middleware/multer-S3.js";

const router = express.Router();

// *  User Login & Signup   *//
router.post("/", userAuth);
router.post("/usignup", UserSignup);

// *  Otp  & Password *//
router.post("/otp", verify);
router.post("/resend", resendOtp);
router.post("/password", passwordCheck);

// * Driver Login *//
router.post("/dsignup", upload.single("image"), DriverSigup);
router.post("/dsignin", DriverLogin);

// * Admin Login *//
router.post("/asignin", AdminLogin);

//* Google Auth *//
router.post("/google", googleAuth);

export default router;
