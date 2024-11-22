import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const Dashboard = () => {
  const navigate = useNavigate();

  const [messages, setMessages] = useState();

  useEffect(() => {
    const fetchMessages = async () => {
      try {
        const { data } = await axios.get("");
        setMessages(data);
      } catch (error) {
        console.log(
          "Error fetching messages:",
          error.response?.data.message || error.message
        );
      }
    };
    fetchMessages();
  }, []);

  const handleLogout = () => {
    localStorage.removeItem("isAuthenticated");
    navigate("/");
  };

  return (
    <div className="min-h-screen bg-gray-100">
      <header className="bg-blue-500 text-white py-4 px-6 flex justify-between items-center">
        <h1 className="text-2xl font-bold">Admin Dashboard</h1>
        <button
          className="bg-white text-blue-500 px-4 py-2 rounded hover:bg-gray-200"
          onClick={handleLogout}
        >
          Logout
        </button>
      </header>
      <div className="p-6">
        <section className="mb-6">
          <h2 className="text-xl font-semibold mb-4">Messages</h2>
          {/* <div className="bg-white p-4 rounded shadow">
            {messages.length > 0 ? (
              <ul>
                {messages.map((msg) => (
                  <li key={msg._id} className="py-2 border-b">
                    <span className="font-semibold">{msg.name}</span>(
                    {msg.email}, {msg.phone}):{msg.message}
                  </li>
                ))}
              </ul>
            ) : (
              <p>No messages found.</p>
            )}
          </div> */}
        </section>
      </div>
    </div>
  );
};

export default Dashboard;
