import express from "express";
import {
  addProduct,
  deleteProduct,
  getAllProducts,
  getProduct,
  updateProduct,
} from "../controllers/productController.js";
import multer from "multer";

const router = express.Router();

const storage = multer.memoryStorage();
const upload = multer({ storage: storage });

router.post("/uploadImage", upload.single("image"), async (req, res) => {
  try {
    if (!req.file) {
      return res
        .status(400)
        .json({ message: "Please provide a image file to upload" });
    }
    const result = await cloudinary.uploader.upload(req.file.buffer, {
      folder: "product_images",
    });
    return res.status(200).json({
      url: result.secure_url,
    });
  } catch (error) {
    return res.status(500).json({
      message: "Error uploading image",
      error,
    });
  }
});

router.get("/products", getAllProducts);
router.post("/addProduct", addProduct);
router.get("/getProduct/:id", getProduct);
router.put("/updateProduct/:id", updateProduct);
router.delete("/deleteProduct/:id", deleteProduct);

export default router;
