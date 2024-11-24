import { Product } from "../models/productSchema.js";
import { catchAsyncErrors } from "../middlewares/catchAsyncError.js";
import ErrorHandler from "../middlewares/errorMiddleware.js";

export const addProduct = catchAsyncErrors(async (req, res) => {
  const { name, description, category, image } = req.body;
  if (!name || !description || !category || !image) {
    throw new ErrorHandler("All fields are required", 400);
  }
  const product = await Product.create({ name, description, category, image });
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
  const product = await Product.findByIdAndUpdate(id, updates, {
    new: true,
    runValidators: true,
  });
  if (!product) {
    throw new ErrorHandler("Product not found", 400);
  }
  res.status(201).json({
    success: true,
    message: "Product updated successfully",
    product,
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
