import axios from "axios";
import React, { useState } from "react";

const ProductManager = ({ setFeedback }) => {
  const [productId, setProductId] = useState("");
  const [formData, setFormData] = useState({
    name: "",
    description: "",
    category: "",
    image: null,
  });

  const clearForm = () => {
    setFormData({
      name: "",
      description: "",
      category: "",
      image: null,
    });
    setProductId("");
  };

  const handleChange = (e) => {
    const { name, value, files } = e.target;
    if (files) {
      setFormData((prev) => ({ ...prev, [name]: files[0] }));
    } else {
      setFormData((prev) => ({ ...prev, [name]: value }));
    }
  };

  const handleAddProduct = async (e) => {
    e.preventDefault();
    try {
      const data = new FormData();
      data.append("name", formData.name);
      data.append("description", formData.description);
      data.append("category", formData.category);
      data.append("image", formData.image);

      const response = await axios.post(
        "http://localhost:3000/api/product/addProduct",
        data,
        {
          headers: { "Content-Type": "multipart/form-data" },
        }
      );
      setFeedback({
        type: "success",
        message: response.data.message,
      });
    } catch (error) {
      setFeedback({
        type: "error",
        message: error.response?.data?.message || "Failed to add product",
      });
    }
  };

  const handleGetProduct = async () => {
    try {
      const response = await axios.get(
        `http://localhost:3000/api/product/getProduct/${productId}`
      );
      const { name, description, category } = response.data.product;
      setFormData({ name, description, category, image: null });
      setFeedback({
        type: "success",
        message: `Product details loaded for editing`,
      });
    } catch (error) {
      setFeedback({
        type: "error",
        message: error.response?.data?.message || "Product not found",
      });
    }
  };

  const handleUpdateProduct = async () => {
    try {
      const updates = new formData();
      updates.append("name", formData.name);
      updates.append("description", formData.description);
      updates.append("category", formData.category);
      if (formData.image) {
        updates.append("image", formData.image);
      }
      const response = await axios.put(
        `http://localhost:3000/api/product/updateProduct/${productId}`,
        updates,
        {
          headers: { "Content-Type": "multipart/form-data" },
        }
      );
      setFeedback({
        type: "success",
        message: response.data.message,
      });
      clearForm();
    } catch (error) {
      setFeedback({
        type: "error",
        message: error.response?.data?.message || "Failed to update product",
      });
    }
  };

  const handleDeleteProduct = async () => {
    try {
      const response = await axios.delete(
        ` http://localhost:3000/api/product/deleteProduct/${productId}`
      );
      setFeedback({
        type: "success",
        message: response.data.message,
      });
      clearForm();
    } catch (error) {
      setFeedback({
        type: "error",
        message: error.response?.data?.message || "Failed to delete product",
      });
    }
  };

  return (
    <div className="max-w-full mx-auto p-6 space-y-12 bg-gray-50">
      <div className="p-6 bg-white shadow-md rounded-lg">
        <h2 className="text-3xl font-bold mb-4 text-center text-blue-600">
          {productId ? "Update Product" : "Add Product"}
        </h2>
        <form
          onSubmit={productId ? handleUpdateProduct : handleAddProduct}
          className="mb-8"
          encType="multipart/form-data"
        >
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <input
              type="text"
              name="name"
              placeholder="Product Name"
              value={formData.name}
              onChange={handleChange}
              className="p-3 border rounded-md focus:ring-2 focus:ring-blue-400 focus:outline-none"
              required
            />
            <input
              type="text"
              name="description"
              placeholder="Product Description"
              value={formData.description}
              onChange={handleChange}
              className="p-3 border rounded-md focus:ring-2 focus:ring-blue-400 focus:outline-none"
              required
            />
            <input
              type="text"
              name="category"
              placeholder="Product Category"
              value={formData.category}
              onChange={handleChange}
              className="p-3 border rounded-md focus:ring-2 focus:ring-blue-400 focus:outline-none"
              required
            />
            <input
              type="file"
              name="image"
              accept="image/*"
              onChange={handleChange}
              className="p-3 border rounded-md focus:ring-2 focus:ring-blue-400 focus:outline-none"
            />
          </div>
          <button
            type="submit"
            className="mt-6 w-full bg-gradient-to-r from-blue-500 to-blue-700 text-white py-3 px-6 rounded-md font-semibold shadow-lg hover:from-blue-700 hover:to-blue-500 transform hover:-translate-y-1 transition duration-300"
          >
            {productId ? "Update Product" : "Add Product"}
          </button>
        </form>
      </div>

      <div className="p-6 bg-white shadow-md rounded-lg">
        <h2 className="text-3xl font-bold mb-4 text-center text-blue-600">
          Manage Product
        </h2>

        <div className="flex flex-col md:flex-row items-center space-y-4 md:space-y-0 md:space-x-4">
          <input
            type="text"
            placeholder="Enter Product ID"
            value={productId}
            onChange={(e) => setProductId(e.target.value)}
            className="p-3 w-full border rounded-md focus:ring-2 focus:ring-red-400 focus:outline-none"
          />
          <button
            onClick={handleGetProduct}
            className="w-full md:w-auto bg-green-500 text-white py-3 px-6 rounded-md font-semibold shadow-lg hover:bg-green-700  transform hover:-translate-y-1 transition duration-300"
          >
            Get Product
          </button>
          <button
            onClick={handleDeleteProduct}
            className="w-full md:w-auto bg-red-500 text-white py-3 px-6 rounded-md font-semibold shadow-lg hover:bg-red-700 transform hover:-translate-y-1 transition duration-300"
          >
            Delete
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductManager;
