// import axios from "axios";
// import React, { useState } from "react";

// const ProductManager = ({ setFeedback }) => {
//   const [productId, setProductId] = useState("");


//   const clearForm = () => {
//     setFormData({
//       name: "",
//       description: "",
//       category: "",
//       image: null,
//     });
//     setProductId("");
//   };



//   const handleGetProduct = async () => {
//     try {
//       const response = await axios.get(
//         `http://localhost:3000/api/product/getProduct/${productId}`
//       );
//       const { name, description, category } = response.data.product;
//       setFormData({ name, description, category, image: null });
//       setFeedback({
//         type: "success",
//         message: `Product details loaded for editing`,
//       });
//     } catch (error) {
//       setFeedback({
//         type: "error",
//         message: error.response?.data?.message || "Product not found",
//       });
//     }
//   };




//   return (
//     <div className="max-w-full mx-auto p-6 space-y-12 bg-gray-50">


//       <div className="p-6 bg-white shadow-md rounded-lg">
//         <h2 className="text-3xl font-bold mb-4 text-center text-blue-600">
//           Manage Product
//         </h2>

//         <div className="flex flex-col md:flex-row items-center space-y-4 md:space-y-0 md:space-x-4">
//           <input
//             type="text"
//             placeholder="Enter Product ID"
//             value={productId}
//             onChange={(e) => setProductId(e.target.value)}
//             className="p-3 w-full border rounded-md focus:ring-2 focus:ring-red-400 focus:outline-none"
//           />
//           <button
//             onClick={handleGetProduct}
//             className="w-full md:w-auto bg-green-500 text-white py-3 px-6 rounded-md font-semibold shadow-lg hover:bg-green-700  transform hover:-translate-y-1 transition duration-300"
//           >
//             Get Product
//           </button>
//           <button
//             onClick={handleDeleteProduct}
//             className="w-full md:w-auto bg-red-500 text-white py-3 px-6 rounded-md font-semibold shadow-lg hover:bg-red-700 transform hover:-translate-y-1 transition duration-300"
//           >
//             Delete
//           </button>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default ProductManager;
