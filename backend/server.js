import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import { connectDB } from "./database/db.js";
import messageRouter from "./routes/messageRouter.js";
import productRouter from "./routes/productRouter.js";
import { errorMiddleware } from "./middlewares/errorMiddleware.js";
import cloudinary from "cloudinary";
import fileUpload from "express-fileupload";

const app = express();
dotenv.config({ path: "./config.env" });

app.use(express.json());
app.use(cors());
app.use(
  fileUpload({
    useTempFiles: true, // Enables temporary file usage
    tempFileDir: "/tmp/", // Directory for temp files
  })
);

app.use("/api/message", messageRouter);
app.use("/api/product", productRouter);
connectDB();

app.use(errorMiddleware);

cloudinary.v2.config({
  cloud_name: process.env.CLOUDINARY_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
});

const port = process.env.PORT || 3000;
app.listen(process.env.PORT, () => {
  console.log(`Server is running on port ${process.env.PORT}.`);
});
