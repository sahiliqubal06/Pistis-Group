import React from "react";
import Navbar from "../components/Navbar";
import Productlist from "../components/Productlist";
import Footer from "../components/Footer";

const Products = () => {
  return (
    <>
      <Navbar />
      <div className="min-h-screen">
      <Productlist />
      </div>
      <Footer />
    </>
  );
};

export default Products;
