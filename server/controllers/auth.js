import { sendOtp, verifyOtp } from "../middleware/twilio.js";
import UserModel from "../models/User.js";
import bcrypt from "bcrypt";
import DriverModel from "../models/Driver.js";
import { generateToken } from "../middleware/authVerify.js";

// * LOGIN USER    *//
export const userAuth = async (req, res) => {
  try {
    const { email } = req.body;
    const user = await UserModel.findOne({ email: email });
    if (!user) {
      res.status(200).json({ message: "new user", user, email });
    } else {
      // * Otp send to user phone NO:    *//
      const { phone, email, verified } = user;
      // sendOtp(phone);
      res.status(200).json({ phone, email, verified });
    }
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// * REGISTER USER    *//
export const UserSignup = async (req, res) => {
  try {
    const { email, password, phone, name } = req.body;
    const salt = await bcrypt.genSalt();
    const hashedPassword = await bcrypt.hash(password, salt);
    const newUser = new UserModel({
      name,
      email,
      phone,
      password: hashedPassword,
    });
    await newUser.save();
    res.sendStatus(200);
  } catch (error) {
    res.sendStatus(500);
    // console.log(error.message);
  }
};

// *  Otp Verification *\\
export const verify = async (req, res) => {
  try {
    const { otp, phone } = req.body;

    const response = await verifyOtp(phone, otp);
    if (response === "approved") {
      const user = await UserModel.findOne({ phone: phone });
      await UserModel.updateOne({ _id: user._id }, { $set: { Active: true } });
      const { name, _id } = user;
      const token = generateToken(_id);
      res.status(201).json({ approved: true, token: token, user: name });
    }
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// *  Resend OTP *//
export const resendOtp = async (req, res) => {
  try {
    const { phone } = req.body;
    sendOtp(phone);
  } catch (error) {
    console.error(error);
  }
};

// * Password Check *//
export const passwordCheck = async (req, res) => {
  try {
    const { password, email } = req.body;
    const user = await UserModel.findOne({ email: email });

    if (!user) return res.status(400).json({ msg: "Invalid User" });
    const isMatch = await bcrypt.compare(password, driver.password);

    if (!isMatch) return res.status(400).json({ msg: "Incorrect Password " });
    const { _id, name } = user;
    const token = generateToken(_id);
    res.status(200).json({ token, name });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// * LOGIN DRIVER  *//
export const dAuth = async (req, res) => {
  try {
    const { email, password } = req.body;
    const driver = await DriverModel.findOne({ email: email });
    if (!driver) res.status(200).json({ message: "Invalid user" });

    const isMatch = await bcrypt.compare(password, driver.password);
    if (!isMatch) return res.status(400).json({ msg: "Incorrect Password " });
    const { _id, name } = req.body;
    const token = generateToken(_id);
    res.status(200).json({ token: token, name: name });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// * REGISTER DRIVER    *//
export const dSignup = async (req, res) => {
  try {
    const {
      firstName,
      lastName,
      email,
      password,
      city,
      state,
      zip,
      DLRNO,
      vehicleNo,
      vehicleModel,
    } = req.body;

    // const { email, password, phone, name } = req.body;
    // const salt = await bcrypt.genSalt();
    // const hashedPassword = await bcrypt.hash(password, salt);
    // const newUser = new DriverModel({
    //   name,
    //   email,
    //   phone,
    //   password: hashedPassword,
    // });
    // const savedUser = await newUser.save();
    res.status(201).json({ message: "User created", user: savedUser });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};
