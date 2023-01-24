import { default as Twilio } from "twilio";
import * as dotenv from "dotenv";
dotenv.config();

const accountSid = process.env.TWILIO_ACCOUNT_SID;
const authToken = process.env.TWILIO_AUTH_TOKEN;
const sessionID = process.env.TWILIO_SESSION_SID;

export const sendOtp = (phone) => {
  const client = Twilio(accountSid, authToken);
  client.verify.v2
    .services(sessionID)
    .verifications.create({ to: `+91${phone}`, channel: "sms" })
    .then((verification) => console.log(verification.sid))
    .catch((error) => console.log(error.message));
};

export const verifyOtp = (phone, otp) => {
  const client = Twilio(accountSid, authToken);
  return new Promise((resolve, reject) => {
    client.verify.v2
      .services(sessionID)
      .verificationChecks.create({ to: `+91${phone}`, code: otp })
      .then((verification_check) => resolve(verification_check))
      .catch((error) => reject(error.message));
  });
};
