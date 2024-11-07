import { Message } from "../models/messageSchema.js";

export const sendMessage = async (req, res) => {
  try {
    const newMessage = new Message(req.body);
    const savedMessage = await newMessage.save();
    res.status(200).json({
      success: true,
      savedMessage,
    });
  } catch (error) {
    res.status(400).json({ message: "Error Sending message" });
  }
};

export const getAllMessages = async (req, res) => {
  try {
    const messages = await Message.find();
    res.status(200).json({
      success: true,
      messages,
    });
  } catch (error) {
    res.status(400).json({ message: "Server Error" });
  }
};
