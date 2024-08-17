import mongoose from "mongoose";

// Define the schema for the carousel items
const OrderSchema = new mongoose.Schema({
  name: {
    type: String,
  },
  contact: {
    type: String,
  },
  address: {
    type: String,
  },
  item: {
    type: String,
  },
  quantity: {
    type: String,
  },
  totalPrice: {
    type: String,
  },
  status: {
    type: String,
    enum: ["Pending", "Accepted", "Cancelled"],
    default: "Pending",
  },
});

// Create the model from the schema
const Order = mongoose.model("Order", OrderSchema);
export default Order;
