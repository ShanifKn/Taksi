import express from "express";
import { carList } from "../../controllers/User/userControllers.js";

const router = express.Router();

//* fetch driver list *//

router.get("/carlist", carList);

export default router;
