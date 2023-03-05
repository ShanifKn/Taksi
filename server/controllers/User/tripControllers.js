import tripModel from "../../models/booking.js";
import DriverModel from "../../models/Driver.js";

export const Trip = async (date, time, driverId, pickup, dropoff, distance, userId) => {
  try {
    const driver = await DriverModel.findOne({ _id: driverId });
    const price = driver.Rate * distance;
    const newTrip = new tripModel({
      user: userId,
      driver: driverId,
      date: date,
      time: time,
      location: {
        pickup: pickup,
        dropoff: dropoff,
        distance: distance,
      },
      payment: {
        amount: price,
      },
    });

    await newTrip.save();
    return true;
  } catch (error) {
    return error.response;
  }
};
