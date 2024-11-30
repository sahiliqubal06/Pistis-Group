import express from "express";
import {
  addProduct,
  deleteProduct,
  getAllProducts,
  getProduct,
  updateProduct,
} from "../controllers/productController.js";

const router = express.Router();

router.get("/products", getAllProducts);
router.post("/addProduct", addProduct);
router.get("/getProduct/:id", getProduct);
router.put("/updateProduct/:id", updateProduct);
router.delete("/deleteProduct/:id", deleteProduct);

export default router;
