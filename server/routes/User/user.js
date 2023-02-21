import express from "express";
import { carList, driverDetails } from "../../controllers/User/userControllers.js";

const router = express.Router();

//* fetch driver list *//
router.get("/carlist", carList);

//* get driver details *//
router.get("/driver-details", driverDetails);

export default router;
