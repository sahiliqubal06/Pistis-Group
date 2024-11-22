import React from "react";
import {
  FaMapMarkerAlt,
  FaPhoneAlt,
  FaEnvelope,
  FaWhatsapp,
} from "react-icons/fa";

const MessageForm = () => {
  const contactDetails = [
    {
      icon: <FaMapMarkerAlt className="text-blue-500" />,
      label: "Addresses",
      value: [
        {
          value: "123, Main Street, YourCity",
          link: "https://www.google.com/maps?q=123+Main+Street+YourCity",
        },
        {
          value: "456, Another Street, YourCity",
          link: "https://www.google.com/maps?q=456+Another+Street+YourCity",
        },
      ],
    },

    {
      icon: <FaPhoneAlt className="text-green-500" />,
      label: "Phone",
      value: "+1234567890",
      link: "tel:+1234567890",
    },
    {
      icon: <FaEnvelope className="text-red-500" />,
      label: "Email",
      value: "contact@example.com",
      link: "mailto:contact@example.com",
    },
    {
      icon: <FaWhatsapp className="text-green-600" />,
      label: "WhatsApp",
      value: "+1234567890",
      link: "https://wa.me/1234567890",
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
            <form className="space-y-4">
              <div>
                <label className="block font-medium mb-1" htmlFor="name">
                  Name
                </label>
                <input
                  id="name"
                  type="text"
                  className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>
              <div>
                <label className="block font-medium mb-1" htmlFor="email">
                  Email
                </label>
                <input
                  id="email"
                  type="email"
                  className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>
              <div>
                <label className="block font-medium mb-1" htmlFor="phone">
                  Phone
                </label>
                <input
                  id="phone"
                  type="text"
                  className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>
              <div>
                <label className="block font-medium mb-1" htmlFor="message">
                  Message
                </label>
                <textarea
                  id="message"
                  rows="4"
                  className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                ></textarea>
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
