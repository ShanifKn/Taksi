import mongoose from "mongoose";

const tripSchema = new mongoose.Schema(
  {
    user: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "user",
      required: true,
    },
    driver: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "driver",
      required: true,
    },
    date: {
      type: String,
      required: true,
    },
    time: {
      type: String,
      required: true,
    },
    location: {
      pickup: { type: String, required: true },
      dropoff: { type: String, required: true },
      distance: { type: Number, required: true },
    },
    payment: {
      amount: { type: Number, default: 0, required: true },
      status: { type: Boolean, default: false, required: true },
      refund: { type: Boolean, default: false },
    },
    bookingStatus: { type: String, default: "Pending", required: true },
    verficationCode: { type: Number, default: 0, required: true },
  },
  { timestamps: true }
);

const tripModel = mongoose.model("Trip", tripSchema);

export default tripModel;
