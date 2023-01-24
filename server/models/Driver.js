import mongoose from "mongoose";

const DriverSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
      min: 2,
      max: 50,
    },
    email: {
      type: String,
      required: true,
      unique: true,
    },
    phone: {
      type: Number,
      required: true,
      unique: true,
    },
    password: {
      type: String,
      required: true,
      min: 5,
    },
    DLRNO: {
      type: Number,
      required: true,
    },
  },
  { timestamps: true }
);

const DriverModel = mongoose.model("Driver", DriverSchema);

export default DriverModel;
