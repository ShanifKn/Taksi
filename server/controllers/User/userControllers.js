import mongoose from "mongoose";
import tripModel from "../../models/booking.js";
import DriverModel from "../../models/Driver.js";
import { paymentStripe } from "./PaymentControllers.js";
import { Trip } from "./tripControllers.js";

export const carList = async (req, res) => {
  try {
    const driver = await DriverModel.aggregate([{ $match: { Approval: true, "current_location.status": true } }]);
    res.status(200).json({ Driver: driver });
  } catch (error) {
    res.status(500).json({ error: "Internal server error !" });
  }
};

//* get driver details *//
export const driverDetails = async (req, res) => {
  try {
    const { id } = req.query;
    const driver = await DriverModel.findById(id);
    res.status(200).json({ driver: driver });
  } catch (error) {
    res.status(500).json({ error: "Internal server error !" });
  }
};

//* Booked trip *//
export const bookTrip = async (req, res) => {
  try {
    const userId = req.user.id;
    const { date, time, driverID, pickup, dropoff, distance } = req.body;

    const addTrip = await Trip(date, time, driverID, pickup, dropoff, distance, userId);
    if (!addTrip) return res.status(404).json({ success: false });

    return res.status(200).json({ success: true });
  } catch (error) {
    res.status(500).json({ error: "Internal server error !" });
  }
};

//* Fetch trips *//
export const getTrips = async (req, res) => {
  try {
    const Id = req.user.id;
    const trips = await tripModel.aggregate([
      { $match: { user: mongoose.Types.ObjectId(Id) } },
      { $lookup: { from: "drivers", localField: "driver", foreignField: "_id", as: "driver" } },
      { $project: { "driver.password": 0 } },
    ]);
    res.status(200).json({ trip: trips });
  } catch (error) {
    res.status(500).json({ error: "Internal server error !" });
  }
};

export const paymentAction = async (req, res) => {
  try {
    const { id } = req.body;
    const response = await paymentStripe();
    res.status(200).json({ response });
  } catch (error) {
    console.log(error.message);
    res.status(500).json({ error: "Internal server error !" });
  }
};

export const paymentSucess = async (req, res) => {
  console.log(req.headers);
};
