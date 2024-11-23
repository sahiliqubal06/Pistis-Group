import { catchAsyncErrors } from "../middlewares/catchAsyncError.js";
import ErrorHandler from "../middlewares/errorMiddleware.js";
import { Message } from "../models/messageSchema.js";

export const sendMessage = catchAsyncErrors(async (req, res, next) => {
  const { name, email, phone, message } = req.body;
  if (!name || !email || !phone || !message) {
    return next(new ErrorHandler("Please fill all the Details!", 400));
  }
  await Message.create({ name, email, phone, message });
  res.status(201).json({
    success: true,
    message: "Message sent successfully!",
  });
});

export const getAllMessages = catchAsyncErrors(async (req, res, next) => {
  const messages = await Message.find();
  res.status(200).json({
    success: true,
    messages,
  });
});

export const deleteMessages = catchAsyncErrors(async (req, res, next) => {
  const { id } = req.params;
  const message = await Message.findByIdAndDelete(id);
  if (!message) {
    return next(new ErrorHandler("Message not found!", 404));
  }
  res.status(200).json({
    success: true,
    message: "Message deleted successfully!",
  });
});
