import mongoose from "mongoose";

// Define the schema for menu items
const menuItemSchema = new mongoose.Schema({
  category: {
    type: String,
  },
  item: {
    type: String,
  },
  description: {
    type: String,
  },
  price: {
    type: String,
  },
});

// Create the model from the schema
const MenuItem = mongoose.model("MenuItem", menuItemSchema);

export default MenuItem;
