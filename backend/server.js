import express from "express";
import cors from "cors";
import cookieParser from "cookie-parser";
import dotenv from "dotenv";
import { connectDB } from "./database/db.js";
import messageRouter from "./routes/messageRouter.js";
import productRouter from "./routes/productRouter.js";
import authRouter from "./routes/authRouter.js";
import { errorMiddleware } from "./middlewares/errorMiddleware.js";
import cloudinary from "cloudinary";
import fileUpload from "express-fileupload";
import path from "path";

dotenv.config({ path: "./config.env" });
const app = express();

const corsOptions = {
  origin: process.env.FRONTEND_URL,
  methods: ["GET", "POST", "PUT", "DELETE"],
  credentials: true,
};

app.use(express.json());
app.use(cors(corsOptions));
app.use(cookieParser());

app.use(
  fileUpload({
    useTempFiles: true,
    tempFileDir: "/tmp/",
  })
);

cloudinary.v2.config({
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
});

app.use("/api/message", messageRouter);
app.use("/api/product", productRouter);
app.use("/api/auth", authRouter);

connectDB();

app.use(errorMiddleware);

const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`Server is running on port ${port}.`);
});


/*---------------------DEPLOYMENT-----------------------*/

const __dirname1 = path.resolve();
if (process.env.NODE_ENV === "production") {
  app.use(express.static(path.join(__dirname1, "../frontend/dist")));
  app.get("*", (req, res) => {
    res.sendFile(path.resolve(__dirname1, "../frontend", "dist", "index.html"));
  });
} else {
  app.get("/", (req, res) => {
    res.send("Running on development");
  });
}

/*---------------------DEPLOYMENT-----------------------*/