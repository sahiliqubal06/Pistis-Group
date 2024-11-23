import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const Dashboard = () => {
  const navigate = useNavigate();

  const [messages, setMessages] = useState([]);
  const [loading, setLoading] = useState(true);
  const [feedback, setFeedback] = useState(null);

  const fetchMessages = async () => {
    try {
      const { data } = await axios.get(
        "http://localhost:3000/api/message/getall"
      );
      setMessages(data.messages);
      setLoading(false);
    } catch (error) {
      console.error(
        "Error fetching messages:",
        error.response?.data.message || error.message
      );
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchMessages();

    const updateListener = () => fetchMessages();
    window.addEventListener("updateMessages", updateListener);
    return () => {
      window.removeEventListener("updateMessages", updateListener);
    };
  }, []);

  const handleDelete = async (id) => {
    try {
      const confirmDelete = window.confirm(
        "Are you sure want to delete this message?"
      );
      if (!confirmDelete) return;
      await axios.delete(`http://localhost:3000/api/message/delete/${id}`);
      setFeedback({
        type: "success",
        message: "Message deleted successfully!",
      });
      fetchMessages();
    } catch (error) {
      console.error(
        "Error deleting message:",
        error.response?.data.message || error.message
      );
      setFeedback({
        type: "error",
        message: "Failed to delete message. Please try again!",
      });
    }
  };

  const handleLogout = () => {
    localStorage.removeItem("isAuthenticated");
    navigate("/");
  };

  return (
    <div className="min-h-screen bg-gray-100">
      <header className="bg-blue-500 text-white py-4 px-6 flex flex-wrap justify-between items-center">
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
          {feedback && (
            <div
              className={`p-4 mb-4 text-white rounded ${
                feedback.type === "success" ? "bg-green-500" : "bg-red-500"
              }`}
            >
              {feedback.message}
            </div>
          )}
          <h2 className="text-xl font-semibold mb-4 text-center justify-center">
            Messages
          </h2>
          <div className="bg-white p-4 rounded shadow overflow-auto">
            {loading ? (
              <p>Loading messages...</p>
            ) : messages.length > 0 ? (
              <table className="min-w-full border-collapse border border-gray-300 text-sm">
                <thead className="bg-gray-200">
                  <tr>
                    <th className="border border-gray-300 px-4 py-2 text-left">
                      Name
                    </th>
                    <th className="border border-gray-300 px-4 py-2 text-left">
                      Email
                    </th>
                    <th className="border border-gray-300 px-4 py-2 text-left">
                      Phone
                    </th>
                    <th className="border border-gray-300 px-4 py-2 text-left">
                      Message
                    </th>
                    <th className="border border-gray-300 px-4 py-2 text-left">
                      Remove
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {messages.map((msg) => (
                    <tr key={msg._id} className="hover:bg-gray-100">
                      <td className="border border-gray-300 px-4 py-2 ">
                        {msg.name}
                      </td>
                      <td className="border border-gray-300 px-4 py-2 ">
                        {msg.email}
                      </td>
                      <td className="border border-gray-300 px-4 py-2 ">
                        {msg.phone}
                      </td>
                      <td className="border border-gray-300 px-4 py-2 ">
                        {msg.message}
                      </td>
                      <td className="border border-gray-300 px-4 py-2 text-center">
                        <button
                          className="bg-red-500 text-white px-3 py-1 rounded hover:bg-red-600"
                          onClick={() => handleDelete(msg._id)}
                        >
                          Delete
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            ) : (
              <p>No messages found.</p>
            )}
          </div>
        </section>
      </div>
    </div>
  );
};

export default Dashboard;
