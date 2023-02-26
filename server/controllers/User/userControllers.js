import DriverModel from "../../models/Driver.js";

export const carList = async (req, res) => {
  try {
    const driver = await DriverModel.aggregate([{ $match: { Approval: true } }]);
    res.status(200).json({ Driver: driver });
  } catch (error) {
    res.status(500).json({ error: "Internal server error !" });
  }
};

//* get driver details *//
export const driverDetails = async (req, res) => {
  try {
    const { id } = req.query;
    const driver = await DriverModel.findById(id);
    res.status(200).json({ driver: driver });
  } catch (error) {
    res.status(500).json({ error: "Internal server error !" });
  }
};

//* Booked trip *//
export const bookTrip = async (req, res) => {
  try {
    console.log(req.body);
  } catch (error) {
    console.log(error.message);
  }
};
