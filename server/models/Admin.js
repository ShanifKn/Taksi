import mongoose from "mongoose";

const AdminSchema = new mongoose.Schema(
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
      type: String,
      required: true,
      // unique: true,
    },
    password: {
      type: String,
      required: true,
      min: 5,
    },
    verified: {
      default: false,
    },
  },
  { timestamps: true }
);

const AdminModel = mongoose.model("Admin", AdminSchema);

export default AdminModel;
