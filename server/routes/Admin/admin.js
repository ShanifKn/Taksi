import express from "express";
import {
  approvalList,
  driverDetails,
  fetchDriverList,
  updateApproval,
} from "../../controllers/Admin/driverControllers.js";
import { verifyToken } from "../../middleware/authVerify.js";

const router = express.Router();

//* fetch approval list *//
router.get("/approval", verifyToken, approvalList);
router.get("/details/:id", verifyToken, driverDetails);


// * fetch driver list *//
router.get("/driver/list", verifyToken, fetchDriverList);



//* update approval  *//
router.post("/approval", verifyToken, updateApproval);

export default router;
