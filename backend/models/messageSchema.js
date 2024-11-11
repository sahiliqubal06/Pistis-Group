import mongoose from "mongoose";
import validator from "validator";

const messageSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, "Name is required"],
  },
  email: {
    type: String,
    required: [true,"Email is required"],
    validate: [validator.isEmail, "Please provide a valid Email!"]
  },
  phone: {
    type: String,
    required: [true, "Phone number is required"],
  },
  message: {
    type: String,
    required: [true, "Message is required"],
  },
});

export const Message = mongoose.model("Message", messageSchema);
