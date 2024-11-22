import React from "react";
import { useNavigate } from "react-router-dom";

const Dashboard = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-gray-100">
      <header className="bg-blue-500 text-white py-4 px-6 flex justify-between items-center">
        <h1 className="text-2xl font-bold">Admin Dashboard</h1>
        <button
          className="bg-white text-blue-500 px-4 py-2 rounded hover:bg-gray-200"
          onClick={() => navigate("/")}
        >
          Go to Home
        </button>
      </header>
      <div className="p-6">
        <section className="mb-6">
          <h2 className="text-xl font-semibold mb-4">Messages</h2>
        </section>
      </div>
    </div>
  );
};

export default Dashboard;
