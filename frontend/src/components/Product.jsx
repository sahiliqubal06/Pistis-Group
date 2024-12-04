import React, { useEffect, useState } from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import Cards from "./Cards";
import axios from "axios";

const Product = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  const fetchProducts = async () => {
    try {
      const { data } = await axios.get(
        "http://localhost:3000/api/product/getAllProducts"
      );
      const shuffledProducts = data.products.sort(() => Math.random() - 0.5);
      setProducts(shuffledProducts);
      setLoading(false);
    } catch (error) {
      console.error(
        "Error fetching products:",
        error.response?.data.message || error.message
      );
    }
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  var settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 3,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <>
      <div className="max-w-screen-2xl container mx-auto md:px-10 px-4">
        <div>
          <h1 className="font-bold text-4xl pb-2 justify-center text-center text-blue-700">
            Our Products
          </h1>
          <p className="text-xl mt-4 text-justify">
            At Pistis Group, we take pride in offering a comprehensive range of
            surgical products tailored to meet the diverse needs of healthcare
            professionals. Our catalog includes precision-engineered surgical
            instruments, diagnostic devices, and medical supplies designed to
            enhance efficiency and ensure optimal patient outcomes. Each product
            in our inventory is sourced from trusted manufacturers and undergoes
            rigorous quality checks to guarantee reliability and safety. Whether
            you require tools for routine procedures or advanced surgical
            interventions, our solutions are crafted to support excellence in
            every aspect of patient care.
          </p>
        </div>
        <div className="mt-4">
          {loading ? (
            <p>loading...</p>
          ) : products.length > 0 ? (
            <Slider {...settings}>
              {products.map((item) => (
                <Cards item={item} key={item._id} />
              ))}
            </Slider>
          ) : (
            <p>No products found!</p>
          )}
        </div>
      </div>
    </>
  );
};

export default Product;
