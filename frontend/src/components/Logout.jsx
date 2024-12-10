import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const Logout = () => {
  const [successMessage, setSuccessMessage] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const navigate = useNavigate();

  const handleLogout = async () => {
    try {
      const response = await axios.post(
        "https://pistis-group.onrender.com/api/auth/logout",
        {},
        {
          withCredentials: true,
        }
      );
      if (response.data.success) {
        localStorage.removeItem("isAuthenticated");
        setSuccessMessage("Logout successful! Redirecting...");
        setTimeout(() => navigate("/"), 2000);
      } else {
        setErrorMessage(
          response.data.message || "Logout failed!. Please try again."
        );
      }
    } catch (error) {
      console.error("Error during logout:", error);
      if (error.response) {
        setErrorMessage(
          error.response.data.message || "An error occurred during logout."
        );
      } else {
        setErrorMessage("Network or server error occurred!");
      }
    }
  };

  return (
    <div>
      <button
        className="bg-white text-blue-500 px-4 py-2 rounded-full hover:bg-gray-200"
        onClick={handleLogout}
      >
        Logout
      </button>
      {successMessage && (
        <p className="text-green-500 mt-4">{successMessage}</p>
      )}
      {errorMessage && <p className="text-red-500 mt-4">{errorMessage}</p>}
    </div>
  );
};

export default Logout;
