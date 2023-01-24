import express from "express";
import {
  dAuth,
  dSignup,
  passwordCheck,
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
router.post("/password", passwordCheck);

// *  Driver Login & Signup   *//
router.post("/dsignin", dAuth);
router.post("/dsignup", dSignup);

export default router;
