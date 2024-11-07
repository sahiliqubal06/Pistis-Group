import mongoose from "mongoose";
import dotenv from "dotenv";


export const connectDB = async () => {
  try {
    const connection = await mongoose.connect(process.env.MONGO_URI);
    console.log("MongoDB connected");
  } catch (error) {
    console.log("Error while connecting MongoDB:", error.message);
  }
};
