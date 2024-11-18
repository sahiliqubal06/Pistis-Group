import React from "react";
import Navbar from "../components/Navbar";
import MessageForm from "../components/MessageForm";
import Footer from "../components/Footer";

const ContactUs = () => {
  return (
    <>
      <Navbar />
      <div className="min-h-screen">
        <MessageForm />
      </div>
      <Footer />
    </>
  );
};

export default ContactUs;
