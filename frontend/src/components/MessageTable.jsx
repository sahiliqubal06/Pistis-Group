import React, { useEffect, useState } from "react";
import axios from "axios";
import ConfirmationDialog from "./ConfirmationDialog";

const MessageTable = ({ setFeedback }) => {
  const [messages, setMessages] = useState([]);
  const [loading, setLoading] = useState(true);
  const [dialogOpen, setDialogOpen] = useState(false);
  const [selectedMessageId, setSelectedMessageId] = useState(null);

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

  const handleDelete = async () => {
    try {
      await axios.delete(
        `http://localhost:3000/api/message/delete/${selectedMessageId}`
      );
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
    } finally {
      setDialogOpen(false);
    }
  };

  return (
    <div className="mb-6">
      <div className="bg-white p-4 rounded shadow overflow-auto">
        <h2 className="text-3xl font-bold mb-4 text-center text-blue-600">
          Messages
        </h2>
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
                      onClick={() => {
                        setSelectedMessageId(msg._id);
                        setDialogOpen(true);
                      }}
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
      <ConfirmationDialog
        isOpen={dialogOpen}
        message="Are you sure want to delete this message?"
        onConfirm={handleDelete}
        onCancel={() => setDialogOpen(false)}
      />
    </div>
  );
};

export default MessageTable;
