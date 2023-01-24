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
      res.status(200).json({ message: " Welcome 😉!", user, email });
    } else {
      // * Otp send to user phone NO:    *//
      const { phone, _id } = user;
      // sendOtp(phoneNo);

      res.status(200).json({ message: `Otp send to ${phone}`, phone, _id });
    }
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// * REGISTER USER    *//
export const UserSignup = async (req, res) => {
  try {
    const { email, password, phone, username } = req.body;
    const salt = await bcrypt.genSalt();
    const hashedPassword = await bcrypt.hash(password, salt);
    const newUser = new UserModel({
      username,
      email,
      phone,
      password: hashedPassword,
    });
    const savedUser = await newUser.save();
    res.status(201).json({ message: "User created", user: savedUser });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// *  Otp Verification *\\
export const verify = async (req, res) => {
  try {
    const { otp, phone } = req.body;
    await verifyOtp(phone, otp)
      .then((verification_check) => {
        verification_check.status == "approved"
          ? res.status(201).json({ approved: true })
          : res.status(200).send("Invalid otp number");
      })
      .catch((err) => console.log(err));
  } catch (err) {
    console.log(err.message);
    res.status(500).json({ error: err.message });
  }
};

// * LOGIN DRIVER  *//
export const dAuth = async (req, res) => {
  try {
    const { email } = req.body;
    const driver = await DriverModel.findOne({ email: email });
    if (!driver) {
      res.status(200).json({ message: " Welcome 😉!", user, email });
    } else {
      const { _id, phone } = driver;
      sendOtp(phone);
      res.status(200).json({ message: `Otp send to ${phone}`, phone, _id });
    }
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// * REGISTER DRIVER    *//
export const dSignup = async (req, res) => {
  try {
    const { email, password, phone, name, DLRNO } = req.body;
    const salt = await bcrypt.genSalt();
    const hashedPassword = await bcrypt.hash(password, salt);
    const newUser = new DriverModel({
      name,
      email,
      phone,
      password: hashedPassword,
      DLRNO,
    });
    const savedUser = await newUser.save();
    res.status(201).json({ message: "User created", user: savedUser });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

export const passwordCheck = async (req, res) => {
  try {
    const { password, _id } = req.body;
    const user = await UserModel.findOne({ _id: _id });

    if (!user) {
      // * Driver *//
      const driver = await DriverModel.findOne({ _id: _id });
      if (!driver) return res.status(400).json({ msg: "User does not exist." });

      const isMatch = await bcrypt.compare(password, driver.password);
      if (!isMatch)
        return res.status(400).json({ msg: "Invalid credentials." });

      const token = generateToken(_id);
      var Driver = driver.toObject();
      delete Driver.password;
      res.status(200).json({ token, Driver });
    } else {

      // *User *//
      const isMatch = await bcrypt.compare(password, user.password);
      if (!isMatch)
        return res.status(400).json({ msg: "Invalid credentials." });

      const token = generateToken(_id);
      var User = user.toObject();
      delete User.password;
      res.status(200).json({ token, User });
    }
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};



 