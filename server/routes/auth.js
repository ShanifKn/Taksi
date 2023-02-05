import express from "express";
import {
  passwordCheck,
  resendOtp,
  userAuth,
  UserSignup,
  verify,
} from "../controllers/auth.js";
const router = express.Router();

// *  User Login & Signup   *//
router.post("/", userAuth);
router.post("/usignup", UserSignup);

// *  Otp  & Password *//
router.post("/otp", verify);
router.post("/resend", resendOtp);
router.post("/password", passwordCheck);






export default router;
