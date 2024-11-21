import React from "react";
import list from "../../public/list.json";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import Cards from "./Cards";

const Product = () => {
  const filterData = list.filter((data) => data.category === "surgical gloves");
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
          <h1 className="font-bold text-4xl pb-2 justify-center text-center">Our Products</h1>
          <p className="text-xl text-justify">
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
        <div className="mt-2">
          <Slider {...settings}>
            {filterData.map((item) => (
              <Cards item={item} key={item.id} />
            ))}
          </Slider>
        </div>{" "}
      </div>
    </>
  );
};

export default Product;
