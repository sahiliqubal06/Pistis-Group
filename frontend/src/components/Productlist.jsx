import React, { useEffect, useState } from "react";
import axios from "axios";
import Cards from "./Cards";

const Productlist = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  const fetchProducts = async () => {
    try {
      const { data } = await axios.get(
        "http://localhost:3000/api/product/getAllProducts"
      );
      setProducts(data.products);
      setLoading(false);
    } catch (error) {
      console.error(
        "Error fetching products:",
        error.response?.data.message || error.message
      );
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  return (
    <>
      <div className="max-w-screen-2xl container mx-auto md:px-10 px-4 mt-28">
        <div className="items-center justify-center text-center">
          <p className="mt-12 text-xl text-justify">
            We specialize in providing a wide range of high-quality medical and
            surgical disposable products designed to meet the diverse needs of
            healthcare providers. Our product lineup includes disposable gloves,
            surgical masks, drapes, gowns, syringes, catheters, and more,
            ensuring optimal hygiene and safety in every medical setting. Each
            product is sourced from trusted manufacturers and adheres to
            stringent quality standards, making them reliable for use in
            hospitals, clinics, and diagnostic centers. Whether you're
            performing critical surgeries or routine medical procedures, our
            disposable products are tailored to support efficiency, cleanliness,
            and patient care.
          </p>
        </div>
        <div className="mt-4">
          <h1 className="text-4xl md:text-4xl font-bold text-center text-blue-700">
            Product List
          </h1>
        </div>
        <div className="mt-4 grid grid-cols-1 md:grid-cols-4">
          {loading ? (
            <p>Loading products...</p>
          ) : products.length > 0 ? (
            products.map((item) => <Cards key={item._id} item={item} />)
          ) : (
            <p>No products found.</p>
          )}
        </div>
      </div>
    </>
  );
};

export default Productlist;
