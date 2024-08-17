import mongoose from "mongoose";
import validator from "validator";

// Define the schema for menu items
const reservationSchema = new mongoose.Schema({
  time: {
    type: String,
  },
  date: {
    type: Date,
  },
  description: {
    type: String,
  },
  name: {
    type: String,
  },
  phone: {
    type: Number,
  },
  person: {
    type: String,
  },
  email: {
    type: String,
    validate: [validator.isEmail, "Please provide a valid mail."],
  },
  status: {
    type: String,
    enum: ["Pending", "Approved", "Cancelled"],
    default: "Pending",
  },
});

// Create the model from the schema
const Reservaion = mongoose.model("Reservaion", reservationSchema);

export default Reservaion;
