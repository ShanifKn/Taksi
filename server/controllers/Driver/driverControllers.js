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
    const book = await tripModel.updateOne({ _id: id }, { $set: { bookingStatus: "Conform", verficationCode: code } });
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
    const location = currentLocation[0].current_location.location;
    const status = currentLocation[0].current_location.status;

    res.status(200).json({ location, status });
  } catch (error) {
    res.status(500).json({ error: "Internal Server Error!" });
  }
};

export const setCurrentLocation = async (req, res) => {
  try {
    const { location, status } = req.body;
    const { id } = req.user;
    const setLocation = await DriverModel.updateOne(
      { _id: id },
      {
        $set: { current_location: { location: location, status: status } },
      }
    );
    res.sendStatus(200);
  } catch (error) {
    res.status(500).json({ error: "Internal Server Error!" });
  }
};
