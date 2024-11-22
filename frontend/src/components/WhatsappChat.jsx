import React from "react";
import { FaWhatsapp } from "react-icons/fa";
import { useLocation } from "react-router-dom";

const WhatsAppChat = () => {
  const location = useLocation();

  if (location.pathname === "/dashboard") {
    return null;
  }

  const phoneNumber = "+916287365656"; // Replace with your WhatsApp number
  const message = "Hello! I need assistance."; // Default message

  const whatsappLink = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(
    message
  )}`;

  return (
    <div className="fixed bottom-6 right-2">
      <a
        href={whatsappLink}
        target="_blank"
        rel="noopener noreferrer"
        className="bg-green-500 hover:bg-green-600 text-white px-4 py-3 rounded-full shadow-lg flex items-center gap-2"
        aria-label="Chat with us on WhatsApp"
      >
        <FaWhatsapp className="text-2xl" />
        <span className="font-semibold text-sm">Chat with us</span>
      </a>
    </div>
  );
};

export default WhatsAppChat;
