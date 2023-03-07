import mongoose from "mongoose";
import tripModel from "../../models/booking.js";
import DriverModel from "../../models/Driver.js";

// * CODE GENERATOR *//
const generateVerficationCode = () => {
  return Math.floor(500000 + Math.random() * 5000000);
};

export const getBookings = async (req, res) => {
  try {
    const { id } = req.user;
    const bookings = await tripModel.aggregate([
      { $match: { driver: mongoose.Types.ObjectId(id), bookingStatus: "Pending" } },
      { $lookup: { from: "users", localField: "user", foreignField: "_id", as: "user" } },
      { $project: { "user.password": 0 } },
    ]);
    return res.status(200).json({ trips: bookings });
  } catch (error) {
    return res.status(500).json({ error: "Internal Server Error !" });
  }
};

export const acceptRide = async (req, res) => {
  try {
    const { id } = req.body;
    const code = generateVerficationCode();
    await tripModel.updateOne({ _id: id }, { $set: { bookingStatus: "Conform", verficationCode: code } });
    const driver = await tripModel.findOne({ _id: id });
    const driverId = driver.driver.valueOf();
    const bookingDate = driver.date;

    //* updating all there booking on current dirver *//
    await tripModel.updateMany(
      { driver: mongoose.Types.ObjectId(driverId), date: bookingDate, bookingStatus: "Pending" },
      { $set: { bookingStatus: "Driver_Canceled", driver: null } }
    );

    res.sendStatus(200);
  } catch (error) {}
};

export const getCurrentLocation = async (req, res) => {
  try {
    const { id } = req.user;
    const currentLocation = await DriverModel.aggregate([
      { $match: { _id: mongoose.Types.ObjectId(id) } },
      { $project: { _id: 0, current_location: 1 } },
    ]);
    const location = currentLocation[0].current_location.location[0];
    const status = currentLocation[0].current_location.status;

    if (!location) return res.status(306).json({ msg: "No current location" });

    res.status(200).json({ location, status });
  } catch (error) {
    res.status(500).json({ error: "Internal Server Error!" });
  }
};

export const setCurrentLocation = async (req, res) => {
  try {
    const { location, status } = req.body;
    console.log(location, status);

    const { id } = req.user;
    const setLocation = await DriverModel.updateOne(
      { _id: id },
      {
        $set: { current_location: { location: location, status: status } },
      }
    );

    console.log(setLocation);
    res.sendStatus(200);
  } catch (error) {
    res.status(500).json({ error: "Internal Server Error!" });
  }
};

export const getPendingBookingList = async (req, res) => {
  try {
    const bookings = await tripModel.aggregate([
      { $match: { bookingStatus: "Driver_Canceled" } },
      { $lookup: { from: "users", localField: "user", foreignField: "_id", as: "user" } },
      { $unwind: "$user" },
      { $project: { "user.password": 0, "user.createdAt": 0, "user.updatedAt": 0 } },
    ]);
    res.status(200).json(bookings);
  } catch (error) {
    res.status(500).json({ error: "Internal Server Error!" });
  }
};

export const declineRide = async (req, res) => {
  try {
    const { id } = req.body;
    await tripModel.updateOne({ _id: id }, { $set: { bookingStatus: "Driver_Canceled", driver: null } });

    res.status(200).json({ success: true });
  } catch (error) {
    res.status(500).json({ error: "Internal Server Error!" });
  }
};

export const acceptBooking = async (req, res) => {
  try {
    const { id } = req.body;
    const driverId = req.user.id;
    const prevBookings = await tripModel.findOne({ _id: id }).select("date");

    const prev = await tripModel.aggregate([{ $match: { driver: mongoose.Types.ObjectId(driverId), date: prevBookings.date } }]);
    if (prev.length != 0) return res.status(302).json({ msg: "Already booking aviable  in this date" });

    const code = generateVerficationCode();
    await tripModel.updateOne({ _id: id }, { $set: { driver: driverId, bookingStatus: "Conform", verficationCode: code } });

    return res.status(200).json({ msg: "New booking accepted" });
  } catch (error) {
    res.status(500).json({ error: "Internal Server Error!" });
  }
};

export const getBookingHistory = async (req, res) => {
  try {
    const { id } = req.user;
    const bookingList = await tripModel.aggregate([
      { $match: { driver: mongoose.Types.ObjectId(id), bookingStatus: "Conform" } },
      { $lookup: { from: "users", localField: "user", foreignField: "_id", as: "user" } },
      { $unwind: "$user" },
      { $project: { "user.password": 0, "user.createdAt": 0, "user.updatedAt": 0 } },
    ]);
    res.status(200).json({ Bookings: bookingList });
  } catch (error) {
    res.status(500).json({ error: "Internal Server Error!" });
  }
};
