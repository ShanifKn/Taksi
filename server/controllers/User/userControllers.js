import DriverModel from "../../models/Driver.js";

export const carList = async (req, res) => {
  try {
    const driver = await DriverModel.aggregate([{ $match: { Approval: true } }]);
    res.status(200).json({ Driver: driver });
  } catch (error) {
    res.sendStatus(500);
  }
};

//* get driver details *//

export const driverDetails = async (req, res) => {
  try {
    const { id } = req.query;
    console.log(req.query);
    const driver = await DriverModel.findById(id);
    console.log(driver);
  } catch (error) {
    console.log(error.message);
    res.status(500).json({ error: "Internal server error !" });
  }
};
