import express from "express";
import {
  approvalList,
  driverDetails,
  updateApproval,
} from "../../controllers/Admin/driverControllers.js";
import { verifyToken } from "../../middleware/authVerify.js";

const router = express.Router();

//* fetch approval list *//
router.get("/approval", verifyToken, approvalList);
router.get("/details/:id", verifyToken, driverDetails);

//* update approval  *//

router.post("/approval", verifyToken, updateApproval)

export default router;
