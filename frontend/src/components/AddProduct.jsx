import axios from "axios";
import React, { useState } from "react";

const AddProduct = ({ setFeedback }) => {
  const [formData, setFormData] = useState({
    name: "",
    description: "",
    category: "",
    image: null,
  });

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
  return (
    <div className="p-6 bg-white shadow-md rounded-lg">
      <h2 className="text-3xl font-bold mb-4 text-center text-blue-600">
        Add New Product
      </h2>
      <form
        onSubmit={handleAddProduct}
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
          Add Product
        </button>
      </form>
    </div>
  );
};

export default AddProduct;
