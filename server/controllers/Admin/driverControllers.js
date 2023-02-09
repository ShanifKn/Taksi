import DriverModel from "../../models/Driver.js";

// * fetch pending approval list *//
export const approvalList = async (req, res) => {
  try {
    const driver = await DriverModel.aggregate([
      { $match: { Approval: false } },
    ]);
    res.status(200).json({ Driver: driver });
  } catch (err) {
    console.log(err);
    res.sendStatus(500);
  }
};

//* fetch driver details *//

export const driverDetails = async (req, res) => {
  try {
    const { id } = req.params;
    const driver = await DriverModel.findOne({ _id: id });
    res.status(200).json({ driver });
  } catch (error) {
    res.sendStatus(500);
  }
};

//* update driver Approval *//

export const updateApproval = async (req, res) => {
  try {
    const { id } = req.body;
    console.log(req.body);
    await DriverModel.updateOne({ _id: id }, { $set: { Approval: true } });
    res.sendStatus(200);
  } catch (err) {
    res.sendStatus(500);
  }
};

//*  fetch Driver List *//
export const fetchDriverList = async (req, res) => {
  try {
    const driver = await DriverModel.aggregate([
      { $match: { Approval: true } },
    ]);
    res.status(200).json({ Driver: driver });
  } catch (error) {
    console.log(error.message);
    res.sendStatus(500);
  }
};
