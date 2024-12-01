import { Product } from "../models/productSchema.js";
import { catchAsyncErrors } from "../middlewares/catchAsyncError.js";
import ErrorHandler from "../middlewares/errorMiddleware.js";
import cloudinary from "cloudinary";

export const getAllProducts = catchAsyncErrors(async (req, res) => {
  const products = await Product.find();
  res.status(200).json({
    success: true,
    products,
  });
});

export const addProduct = catchAsyncErrors(async (req, res) => {
  if (!req.files || Object.keys(req.files).length === 0) {
    return res
      .status(400)
      .json({ success: false, message: "Product Image Required!" });
  }
  const { image } = req.files;
  const allowedFormats = ["image/png", "image/jpeg", "image/webp"];
  if (!allowedFormats.includes(image.mimetype)) {
    return res.status(400).json({
      success: false,
      message: "File format not supported!",
    });
  }
  const { name, description, category } = req.body;
  if (!name || !description || !category) {
    return res.status(400).json({
      success: false,
      message: "All fields are required!",
    });
  }
  let cloudinaryResponse;
  try {
    cloudinaryResponse = await cloudinary.v2.uploader.upload(
      image.tempFilePath
    );
  } catch (error) {
    console.error("Cloudinary Error:", error);
    return res.status(500).json({
      success: false,
      message: "Failed to upload image to Cloudinary!",
    });
  }

  const product = await Product.create({
    name,
    description,
    category,
    image: cloudinaryResponse.secure_url,
  });
  res.status(201).json({
    success: true,
    message: "Product added successfully",
    product,
  });
});

export const getProduct = catchAsyncErrors(async (req, res) => {
  const { id } = req.params;
  const product = await Product.findById(id);
  if (!product) {
    throw new ErrorHandler("Product not found", 404);
  }
  res.status(201).json({
    success: true,
    product,
  });
});

export const updateProduct = catchAsyncErrors(async (req, res) => {
  const { id } = req.params;
  const updates = req.body;

  const product = await Product.findById(id);
  if (!product) {
    return res.status(404).json({
      success: false,
      message: "Product not found!",
    });
  }

  let updatedImage;

  if (req.files && req.files.image) {
    const { image } = req.files;
    const allowedFormats = ["image/png", "image/jpeg", "image/webp"];
    if (!allowedFormats.includes(image.mimetype)) {
      return res.status(400).json({
        success: false,
        message: "File format not supported!",
      });
    }
    // Delete the existing image from Cloudinary if applicable
    if (product.image) {
      const publicId = product.image.split("/").pop().split(".")[0]; // Extract public_id from URL
      try {
        await cloudinary.v2.uploader.destroy(publicId);
      } catch (error) {
        console.error("Cloudinary Deletion Error:", error);
        return res.status(500).json({
          success: false,
          message: "Failed to delete existing image from Cloudinary!",
        });
      }
    }

    // Upload the new image to Cloudinary
    try {
      const result = await cloudinary.v2.uploader.upload(image.tempFilePath, {
        folder: "products", // Optional folder in Cloudinary
      });
      updatedImage = result.secure_url;
    } catch (error) {
      console.error("Cloudinary Upload Error:", error);
      return res.status(500).json({
        success: false,
        message: "Failed to upload image to Cloudinary!",
      });
    }
  }
  // Update the image field if a new image was uploaded
  if (updatedImage) {
    updates.image = updatedImage;
  }

  // Update the product in the database
  const updatedProduct = await Product.findByIdAndUpdate(id, updates, {
    new: true,
    runValidators: true,
  });

  if (!updatedProduct) {
    return res.status(400).json({
      success: false,
      message: "Failed to update product!",
    });
  }
  res.status(200).json({
    success: true,
    message: "Product updated successfully",
    product: updatedProduct,
  });
});

export const deleteProduct = catchAsyncErrors(async (req, res) => {
  const { id } = req.params;
  const product = await Product.findByIdAndDelete(id);
  if (!product) {
    throw new ErrorHandler("Product not found", 404);
  }
  res.status(200).json({
    success: true,
    message: "Product deleted successfully",
  });
});
