import express from "express";
import {
  deleteMessages,
  getAllMessages,
  sendMessage,
} from "../controllers/messageController.js";

const router = express.Router();

router.post("/send", sendMessage);
router.get("/getall", getAllMessages);
router.delete("/delete/:id", deleteMessages);

export default router;
