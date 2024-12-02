import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import MessageTable from "../components/MessageTable";
import AddProduct from "../components/AddProduct";
import ProductTable from "../components/ProductTable";
import Logout from "../components/Logout";
import axios from "axios";

const Dashboard = () => {
  const [messageTableFeedback, setMessageTableFeedback] = useState(null);
  const [AddProductFeedback, setAddProductFeedback] = useState(null);
  const [productTableFeedback, setProductTableFeedback] = useState(null);

  return (
    <div className="min-h-screen bg-gray-100">
      <header className="bg-blue-950 text-white py-4 px-6 flex items-center justify-between ">
        <div className="flex items-center space-x-2 ">
          <a href="/" className="flex items-center space-x-2 ">
            <img
              src="/logo1.png"
              alt="Pistis Group Logo"
              className="h-8 w-auto cursor-pointer rounded-box hover:scale-110 hover:shadow-lg transition-transform duration-300"
            />
            <span className="text-2xl font-bold text-white hidden sm:inline hover:text-green-800">
              Pistis Group
            </span>
          </a>
        </div>
        <h1 className="text-2xl font-bold flex-grow text-center">
          Admin Dashboard
        </h1>
        <Logout />
      </header>
      <div className="p-6 space-y-6">
        <MessageTable
          feedback={messageTableFeedback}
          setFeedback={setMessageTableFeedback}
        />
        <AddProduct
          feedback={AddProductFeedback}
          setFeedback={setAddProductFeedback}
        />
        <ProductTable
          feedback={productTableFeedback}
          setFeedback={setProductTableFeedback}
        />
      </div>
    </div>
  );
};

export default Dashboard;
