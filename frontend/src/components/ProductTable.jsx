import axios from "axios";
import React, { useEffect, useState } from "react";
import ConfirmationDialog from "./ConfirmationDialog";

const ProductTable = ({ feedback, setFeedback }) => {
  const [products, setProducts] = useState([]);
  const [editingProduct, setEditingProduct] = useState(null);
  const [dialogOpen, setDialogOpen] = useState(false);
  const [selectedProductId, setSelectedProductId] = useState(null);
  const [loading, setLoading] = useState(true);

  const fetchProducts = async () => {
    try {
      const response = await axios.get(
        "http://localhost:3000/api/product/getAllProducts"
      );
      setProducts(response.data.products);
    } catch (error) {
      setFeedback({
        type: "error",
        message: error.response?.data?.message || "Failed to fetch products",
      });
    } finally {
      setLoading(false);
    }
  };

  const handleDeleteProduct = async (id) => {
    try {
      await axios.delete(
        ` http://localhost:3000/api/product/deleteProduct/${selectedProductId}`
      );
      setFeedback({
        type: "success",
        message: "Product deleted successfully",
      });
      fetchProducts();
    } catch (error) {
      setFeedback({
        type: "error",
        message: error.response?.data?.message || "Failed to delete product",
      });
    } finally {
      setDialogOpen(false);
    }
  };

  const handleEditProduct = (product) => {
    setEditingProduct(product);
  };

  const handleUpdateProduct = async () => {
    try {
      const updates = new FormData();
      updates.append("name", editingProduct.name);
      updates.append("description", editingProduct.description);
      updates.append("category", editingProduct.category);
      if (editingProduct.image) {
        updates.append("image", editingProduct.image);
      }
      const response = await axios.put(
        `http://localhost:3000/api/product/updateProduct/${editingProduct._id}`,
        updates,
        {
          headers: { "Content-Type": "multipart/form-data" },
        }
      );
      setFeedback({
        type: "success",
        message: "Product updated successfully",
      });
      setEditingProduct(null);
      fetchProducts();
    } catch (error) {
      setFeedback({
        type: "error",
        message: error.response?.data?.message || "Failed to update product",
      });
    }
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  return (
    <div className="mb-6">
      <div className="p-4 bg-white shadow overflow-auto rounded">
        <h2 className="text-3xl font-bold mb-4 text-center text-blue-600">
          Product List
        </h2>
        {feedback && (
          <div
            className={`p-4 mb-4 rounded ${
              feedback.type === "success" ? "bg-green-500" : "bg-red-500"
            } text-white`}
          >
            {feedback.message}
          </div>
        )}
        {editingProduct && (
          <div className="mb-4 p-4 bg-gray-100 rounded shadow-md">
            <h3 className="text-xl font-semibold mb-2">Edit Product</h3>
            <form onSubmit={(e) => e.preventDefault()}>
              <div className="mb-2">
                <label className="block font-medium">Name</label>
                <input
                  type="text"
                  value={editingProduct.name}
                  onChange={(e) =>
                    setEditingProduct({
                      ...editingProduct,
                      name: e.target.value,
                    })
                  }
                  className="p-2 border rounded w-full"
                />
              </div>
              <div className="mb-2">
                <label className="block font-medium">Description</label>
                <textarea
                  value={editingProduct.description}
                  onChange={(e) =>
                    setEditingProduct({
                      ...editingProduct,
                      description: e.target.value,
                    })
                  }
                  className="p-2 border rounded w-full"
                />
              </div>
              <div className="mb-2">
                <label className="block font-medium">Category</label>
                <input
                  type="text"
                  value={editingProduct.category}
                  onChange={(e) =>
                    setEditingProduct({
                      ...editingProduct,
                      category: e.target.value,
                    })
                  }
                  className="p-2 border rounded w-full"
                />
              </div>
              <div className="mb-2">
                <label className="block font-medium">Image</label>
                <input
                  type="file"
                  onChange={(e) =>
                    setEditingProduct({
                      ...editingProduct,
                      image: e.target.files[0],
                    })
                  }
                  className="p-2 border rounded w-full"
                />
              </div>
              <button
                onClick={handleUpdateProduct}
                className="bg-blue-500 text-white px-4 py-2 rounded shadow hover:bg-blue-700 transition"
              >
                Update Product
              </button>
            </form>
          </div>
        )}
        {loading ? (
          <p>Loading products...</p>
        ) : products.length === 0 ? (
          <p>No products available.</p>
        ) : (
          <div className="overflow-auto">
            <table className="min-w-full bg-white border border-gray-200">
              <thead>
                <tr className="bg-gray-100">
                  <th className="py-2 px-4 border">Name</th>
                  <th className="py-2 px-4 border">Description</th>
                  <th className="py-2 px-4 border">Category</th>
                  <th className="py-2 px-4 border">Actions</th>
                </tr>
              </thead>
              <tbody>
                {products.map((product) => (
                  <tr key={product._id} className="hover:bg-gray-50">
                    <td className="py-2 px-4 border">{product.name}</td>
                    <td className="py-2 px-4 border">{product.description}</td>
                    <td className="py-2 px-4 border">{product.category}</td>
                    <td className="py-2 px-4 border">
                      <div className="flex space-x-2">
                        <button
                          onClick={() => handleEditProduct(product)}
                          className="bg-blue-500 text-white py-1 px-3 rounded-md shadow-lg hover:bg-blue-700 transition duration-300"
                        >
                          Edit
                        </button>
                        <button
                          onClick={() => {
                            setSelectedProductId(product._id);
                            setDialogOpen(true);
                          }}
                          className="bg-red-500 text-white py-1 px-3 rounded-md shadow-lg hover:bg-red-700 transition duration-300"
                        >
                          Delete
                        </button>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
      </div>

      <ConfirmationDialog
        isOpen={dialogOpen}
        message="Are you sure you want to delete this product?"
        onConfirm={handleDeleteProduct}
        onCancel={() => setDialogOpen(false)}
      />
    </div>
  );
};

export default ProductTable;
