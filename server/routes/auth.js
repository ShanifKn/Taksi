import express from "express";
import {
  dSignup,
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
router.post("/dsignup",upload.single("image"), dSignup)


export default router;
