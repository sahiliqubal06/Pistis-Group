import React from "react";
import Home from "./pages/Home";
import { Route, Routes } from "react-router-dom";
import Products from "./pages/Products";
import ContactUs from "./pages/ContactUs";
import WhatsappChat from "./components/WhatsappChat";
import AboutUs from "./pages/AboutUs";
import Dashboard from "./pages/Dashboard";

const App = () => {
  return (
    <>
      <div className="dark:bg-slate-900 dark:text-white">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/products" element={<Products />} />
          <Route path="/contactus" element={<ContactUs />} />
          <Route path="/aboutus" element={<AboutUs />} />
          <Route path="/dashboard" element={<Dashboard />} />
        </Routes>
        <WhatsappChat />
      </div>
    </>
  );
};

export default App;
