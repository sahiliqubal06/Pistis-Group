import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import MessageTable from "../components/MessageTable";
import AddProduct from "../components/AddProduct";
import ProductTable from "../components/ProductTable";

const Dashboard = () => {
  const navigate = useNavigate();

  const [feedback, setFeedback] = useState(null);

  const handleLogout = () => {
    localStorage.removeItem("isAuthenticated");
    navigate("/");
  };

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
        <button
          className="bg-white text-blue-500 px-4 py-2 rounded-full hover:bg-gray-200"
          onClick={handleLogout}
        >
          Logout
        </button>
      </header>
      <div className="p-6">
        {feedback && (
          <div
            className={`p-4 mb-4 text-white rounded ${
              feedback.type === "success" ? "bg-green-500" : "bg-red-500"
            }`}
          >
            {feedback.message}
          </div>
        )}
        <MessageTable setFeedback={setFeedback} />
        <AddProduct setFeedback={setFeedback} />
        <ProductTable setFeedback={setFeedback} />
      </div>
    </div>
  );
};

export default Dashboard;
