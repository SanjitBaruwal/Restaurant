import app from "./app.js";
import dbConnection from "./database/dbConnection.js";
dbConnection();

import { v2 as cloudinary } from "cloudinary";
cloudinary.config({
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_SECRET_KEY,
});

const PORT = process.env.PORT || 7000;
app.listen(PORT, () => {
  console.log(`server is running on port: ${PORT} `);
});
