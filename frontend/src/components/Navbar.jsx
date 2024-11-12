import { useState } from "react";
import { Link } from "react-router-dom";
const Navbar = () => {
  return (
    <nav className="bg-blue-600 p-4">
      <div className="container mx-auto flex justify-between items-center">
        <div className="text-white font-bold text-xl">Pistis Group</div>
        <div className="hidden md:flex space-x-4">
          <Link to="/" className="text-white hover:text-gray-300">
            Home
          </Link>
          <Link to="/about" className="text-white hover:text-gray-300">
            About Us
          </Link>
          <Link to="/products" className="text-white hover:text-gray-300">
            Products
          </Link>
          <Link to="/contact" className="text-white hover:text-gray-300">
            Contact Us
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
