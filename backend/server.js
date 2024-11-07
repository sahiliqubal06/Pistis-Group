import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import messageRouter from "./routes/messageRouter.js";
import { connectDB } from "./database/db.js";

dotenv.config({ path: "./config.env" });

const app = express();

app.use(express.json());
app.use(cors());

app.use('/api/message', messageRouter);

const port = process.env.PORT || 3000;
app.listen(process.env.PORT, () => {
  console.log(`Server is running on port ${process.env.PORT}.`);
});

connectDB();
