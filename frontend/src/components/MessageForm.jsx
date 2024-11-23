import React, { useState } from "react";
import {
  FaMapMarkerAlt,
  FaPhoneAlt,
  FaEnvelope,
  FaWhatsapp,
} from "react-icons/fa";
import axios from "axios";

const MessageForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const [errors, setErrors] = useState({});
  const [successMessage, setSuccessMessage] = useState("");

  const validateForm = () => {
    const newErrors = {};
    if (!formData.name) newErrors.name = "Name is required!";
    if (!formData.email) {
      newErrors.email = "Email is required!";
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = "Invalid email address!";
    }
    if (!formData.phone) {
      newErrors.phone = "Phone number is required!";
    } else if (!/^\d{10}$/.test(formData.phone)) {
      newErrors.phone = "Phone number must be exactly 10 digits!";
    }
    if (!formData.message) newErrors.message = "Message is required!";
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (e) => {
    const { id, value } = e.target;
    setFormData((prev) => ({ ...prev, [id]: value }));
    setErrors((prev) => ({ ...prev, [id]: "" }));
    setSuccessMessage("");
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!validateForm()) return;
    try {
      const { data } = await axios.post(
        "http://localhost:3000/api/message/send",
        formData
      );
      setSuccessMessage(data.message);
      setFormData({ name: "", email: "", phone: "", message: "" });
      setErrors({});
      window.dispatchEvent(new Event("updateMessages"));
    } catch (error) {
      setSuccessMessage("");
      setErrors({
        form: error.response?.data?.message || "Error sending message",
      });
    }
  };
  const contactDetails = [
    {
      icon: <FaMapMarkerAlt className="text-blue-500" />,
      label: "Addresses",
      value: [
        {
          value: "Birgunj",
          link: "https://www.google.com/maps?q=123+Main+Street+YourCity",
        },
        {
          value: "Kathmandu",
          link: "https://www.google.com/maps?q=456+Another+Street+YourCity",
        },
      ],
    },

    {
      icon: <FaPhoneAlt className="text-green-500" />,
      label: "Phone",
      value: "+9779840108594",
      link: "tel:+9779840108594",
    },
    {
      icon: <FaEnvelope className="text-red-500" />,
      label: "Email",
      value: "pistisgroups@gmail.com",
      link: "mailto:pistisgroups@gmail.com",
    },
    {
      icon: <FaWhatsapp className="text-green-600" />,
      label: "WhatsApp",
      value: "+9779840108594",
      link: "https://wa.me/+9779840108594",
    },
  ];

  return (
    <>
      <div className=" mt-28 ">
        <h1 className="text-2xl md:text-4xl font-bold justify-center text-center">
          Reach Out to Us
        </h1>
        <p className=" text-center mx-auto max-w-2xl leading-relaxed mt-3 text-xl">
          Have any questions or need assistance? Feel free to send us a message!
          and we’ll get back to you promptly.
        </p>
      </div>
      <div className="max-w-screen-2xl container mx-auto md:px-10 px-4 flex flex-col md:flex-row mb-10">
        <div className="w-full order-1 md:order-1 md:w-1/2 mt-12">
          <div className="max-w-md mx-auto p-6 bg-white rounded-lg ">
            <div className="space-y-6">
              {contactDetails.map((item, index) => (
                <div key={index} className="flex items-center space-x-4">
                  <div className="text-2xl">{item.icon}</div>
                  <div>
                    <p className="font-semibold">{item.label}</p>
                    {Array.isArray(item.value) ? (
                      <div className="space-y-2 ml-6">
                        {item.value.map((address, addressIndex) => (
                          <div key={addressIndex}>
                            <p className="font-semibold">{address.label}</p>
                            <a
                              href={address.link}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="text-blue-600 hover:underline"
                            >
                              {address.value}
                            </a>
                          </div>
                        ))}
                      </div>
                    ) : (
                      <a
                        href={item.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-blue-600 hover:underline"
                      >
                        {item.value}
                      </a>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
        <div className="w-full md:w-1/2 order-1 mt-8 bg-white">
          <div className="w-full max-w-lg bg-white p-8 rounded-md ">
            <form className="space-y-4" onSubmit={handleSubmit}>
              {successMessage && (
                <p className="text-green-500 text-lg font-medium text-center">
                  {successMessage}
                </p>
              )}
              {[
                { id: "name", label: "Name", type: "text" },
                { id: "email", label: "Email", type: "email" },
                { id: "phone", label: "Phone", type: "text" },
              ].map(({ id, label, type }) => (
                <div key={id}>
                  <label className="block font-medium mb-1" htmlFor={id}>
                    {label}
                  </label>
                  <input
                    id={id}
                    type={type}
                    value={formData[id]}
                    onChange={handleChange}
                    className={`w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 
                      ${errors[id] ? "border-red-500" : "focus:ring-blue-500"}`}
                  />
                  {errors[id] && (
                    <p className="text-red-500 text-sm mt-1">{errors[id]}</p>
                  )}
                </div>
              ))}
              <div>
                <label className="block font-medium mb-1" htmlFor="message">
                  Message
                </label>
                <textarea
                  id="message"
                  rows="4"
                  value={formData.message}
                  onChange={handleChange}
                  className={`w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2
                    ${
                      errors.message ? "border-red-500" : "focus:ring-blue-500"
                    }`}
                ></textarea>
                {errors.message && (
                  <p className="text-red-500 text-sm mt-1">{errors.message}</p>
                )}
              </div>
              <div>
                <button
                  type="submit"
                  className="w-full bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-700 transition duration-200"
                >
                  Send Message
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default MessageForm;
