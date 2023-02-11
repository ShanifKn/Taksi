import DriverModel from "../../models/Driver.js";

export const carList = async (req, res) => {
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
