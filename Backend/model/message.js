import mongoose from "mongoose";

// Define the schema for the carousel items
const messageSchema = new mongoose.Schema({
  name: {
    type: String,
  },
  subject: {
    type: String,
  },
  email: {
    type: String,
  },
  message: {
    type: String,
  },
});

// Create the model from the schema
const Message = mongoose.model("Message", messageSchema);
export default Message;
