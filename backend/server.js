import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import { connectDB } from "./database/db.js";
import messageRouter from "./routes/messageRouter.js";
import productRouter from "./routes/productRouter.js";
import { errorMiddleware } from "./middlewares/errorMiddleware.js";

const app = express();
dotenv.config({ path: "./config.env" });

app.use(express.json());
app.use(cors());

app.use("/api/message", messageRouter);
app.use("/api/product", productRouter);
connectDB();

app.use(errorMiddleware);

const port = process.env.PORT || 3000;
app.listen(process.env.PORT, () => {
  console.log(`Server is running on port ${process.env.PORT}.`);
});
