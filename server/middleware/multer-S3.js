import multer from "multer";
import * as dotenv from "dotenv";
dotenv.config();
import aws from "aws-sdk";
import multerS3 from "multer-s3";

const s3 = new aws.S3({
  accessKeyId: process.env.ACCESS_KEY_ID,
  secretAccessKey: process.env.SECRET_ACCESS_KEY,
  region: process.env.REGION,
});

const storage = multerS3({
  s3: s3,
  bucket: process.env.BUCKET_NAME,
  key: function (req, file, cb) {
    cb(null, Date.now().toString() + file.originalname);
  },
});

const upload = multer({ storage });

export default upload;
