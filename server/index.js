import * as dotenv from "dotenv";
dotenv.config();
import express from "express";
import bodyParser from "body-parser";
import cors from "cors";
import morgan from "morgan";
import mongoose from "mongoose";
import helmet from "helmet";
import connectDB from "./database/db.js";
import authRoutes from "./routes/auth.js";

//*  CONFIGURATION *//
const app = express();
const PORT = process.env.PORT || 6001;
app.use(express.json());
app.use(helmet({ crossOriginResourcePolicy: true }));
app.use(morgan("dev"));
app.use(bodyParser.json({ limit: "30mb", extended: true }));
app.use(express.urlencoded({ limit: "30mb", extended: true }));
app.use(cors());

//*  ROUTES   *//
app.use("/api/auth", authRoutes);


//*  Databases *//
connectDB();
mongoose.connection.once("open", () => {
  console.log("Connected to MongoDB");
  app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
  });
});
