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

export const formatDate = (DateString) => {
  const inputDate = new Date(DateString);
  const months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
  const day = inputDate.getDate();
  const month = months[inputDate.getMonth()];
  const year = inputDate.getFullYear();
  const outputDateString = `${day} ${month} ${year}`;
  return outputDateString;
};

export const findMatchDate = async (date) => {
  try {
    const tripCancel = await tripModel.updateMany({ date: date, bookingStatus: "Driver_Canceled" }, { $set: { bookingStatus: "Cancelled" } });

    if (tripCancel.modifiedCount > 0) {
      return true;
    } else {
      return false;
    }
  } catch (error) {
    console.log(error.message);
    return false;
  }
};
