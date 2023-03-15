import mongoose from "mongoose";
import tripModel from "../../models/booking.js";
import DriverModel from "../../models/Driver.js";
import UserModel from "../../models/User.js";
import { addMoneyStrip, paymentStripe, walletPayment } from "./PaymentControllers.js";
import { findMatchDate, formatDate, Trip } from "./tripControllers.js";

// const options = { day: "2-digit", month: "short", year: "numeric" };
const currentDate = new Date();

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
    const userId = req.user.id;
    const { id } = req.body;
    const trip = await tripModel.findOne({ _id: id });

    if (await walletPayment(userId, trip)) {
      res.status(202).json({ msg: "Payment is done from wallet" });
    } else {
      const response = await paymentStripe(id, trip);
      res.status(200).json({ response });
    }
  } catch (error) {
    console.log(error.message);
    res.status(500).json({ error: "Internal server error !" });
  }
};

export const paymentSucess = async (req, res) => {
  const { id } = req.params;
  await tripModel.updateOne({ _id: id }, { $set: { "payment.status": true } });
  res.redirect(process.env.REDIRECT_URL);
};

export const cancelBooking = async (req, res) => {
  try {
    const { id } = req.body;
    const trip = await tripModel.findById(id);
    const refundAmount = trip.payment.amount;
    const userId = trip.user.valueOf();

    const timestamp = Date.parse(trip.date);
    const givenDate = new Date(timestamp);
    const diffMs = givenDate - currentDate;
    const lessThanTwoDays = diffMs < 48 * 60 * 60 * 1000;

    if (lessThanTwoDays) {
      let cost = refundAmount * 0.05;
      await UserModel.updateOne(
        { _id: userId },
        { $inc: { "wallet.Amount": refundAmount - cost } },
        { $push: { "wallet.transactions": { transactionsID: id, method: "refund" } } }
      );
      await tripModel.updateOne({ _id: id }, { $set: { bookingStatus: "Cancelled", "payment.refund": true } });
      return res.status(200).json({ msg: "Trip cancellated refund credit to wallet after detition" });
    } else {
      await UserModel.updateOne(
        { _id: userId },
        { $inc: { "wallet.Amount": refundAmount } },
        { $push: { "wallet.transactions": { transactionsID: id, method: "refund" } } }
      );
      await tripModel.updateOne({ _id: id }, { $set: { bookingStatus: "Cancelled", "payment.refund": true } });
      return res.status(200).json({ msg: "Trip cancellated refund credit to wallet" });
    }
  } catch (error) {
    res.status(500).json({ error: "Internal Server Error !" });
  }
};

export const userDetails = async (req, res) => {
  try {
    const { id } = req.user;
    const user = await UserModel.findById(id).select({ password: 0, wallet: 0, createdAt: 0, updatedAt: 0 });
    const pending = await tripModel.aggregate([
      { $match: { user: mongoose.Types.ObjectId(id), bookingStatus: "Driver_Canceled" } },
      { $count: "count" },
    ]);
    const results = await tripModel.aggregate([
      { $match: { user: mongoose.Types.ObjectId(id) } },
      {
        $facet: {
          canceled: [{ $match: { bookingStatus: "Driver_Canceled" } }, { $count: "count" }],
          confirmed: [{ $match: { bookingStatus: "Conform" } }, { $count: "count" }],
        },
      },
    ]);

    const pendingCount = results[0].canceled[0].count;
    const confirmedCount = results[0].confirmed[0].count;
    return res.status(200).json({ user: user, pending: pendingCount, conform: confirmedCount });
  } catch (error) {
    res.status(500).json({ error: "Internal Server Error !" });
  }
};

export const userProfileUpload = async (req, res) => {
  try {
    const { id } = req.user;
    const imageUrl = req.file.location;
    await UserModel.updateOne({ _id: id }, { $set: { profile: imageUrl } });
    await UserModel.findOne({ _id: id }).then((user) => {
      res.status(200).json({ userProfile: user.profile });
    });
  } catch (error) {
    console.log(error.message);
    res.status(500).json({ error: "Internal Server Error !" });
  }
};

export const addCashWallet = async (req, res) => {
  try {
    const { id } = req.user;
    const amount = req.body.amount;
    const response = await addMoneyStrip(id, amount);
    res.status(200).json({ response });
  } catch (error) {
    console.log(error.message);
    res.status(500).json({ error: "Internal Server Error !" });
  }
};

export const addAmount = async (req, res) => {
  try {
    const id = req.query.id;
    const amount = req.query.amount;
    await UserModel.updateOne(
      { _id: id },
      { $inc: { "wallet.Amount": amount } },
      { $push: { "wallet.transactions": { transactionsID: id, method: "Add Cash" } } }
    );
    res.redirect(process.env.PAYEMENT_ADD_REDIRECT);
  } catch (error) {}
};

export const getWalletBalance = async (req, res) => {
  try {
    const { id } = req.user;
    const balance = await UserModel.findOne({ _id: id }).select({
      password: 0,
      createdAt: 0,
      updatedAt: 0,
      profile: 0,
      phone: 0,
      email: 0,
      _id: 0,
      name: 0,
      __v: 0,
      "wallet.transactions": 0,
    });

    return res.status(200).json({ balance: balance.wallet.Amount });
  } catch (error) {
    res.status(500).json({ error: "Internal Server Error !" });
  }
};

export const PendingRide = async (req, res) => {
  try {
    const { tripId } = req.body;
    await tripModel.updateOne({ _id: tripId }, { $set: { bookingStatus: "Cancelled" } });
    return res.status(200).json({ msg: "Booking has been canceled" });
  } catch (error) {
    res.status(500).json({ error: "Internal Server Error !" });
  }
};

export const autoCancel = async (req, res) => {
  try {
    const date = formatDate(currentDate);
    const cancel = await findMatchDate(date);

    if (cancel) {
      console.log(cancel);
      return res.status(200).json({ msg: "Pending Booking as cancelled" });
    } else {
      return res.status(204).json({ msg: "No Pending Booking on current Date" });
    }
  } catch (error) {
    res.status(500).json({ error: "Internal Server Error !" });
  }
};
