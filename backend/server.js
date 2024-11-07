import express from "express";
import dotenv from "dotenv";
import { connectDB } from "./database/db.js";

dotenv.config({ path: "./config.env" });

const app = express();
const port = process.env.PORT || 3000;

app.listen(process.env.PORT, () => {
  console.log(`Server is running on port ${process.env.PORT}.`);
});

connectDB();
