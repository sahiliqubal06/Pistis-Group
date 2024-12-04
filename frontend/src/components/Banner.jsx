import React from "react";

const Banner = () => {
  return (
    <>
      <div>
        <h1 className="text-2xl md:text-4xl font-bold justify-center text-center mt-28">
          Welcome to the {""}
          <span className="text-green-500">Pistis Group</span>.
        </h1>
      </div>
      <div className="max-w-screen-2xl container mx-auto md:px-10 px-4 flex flex-col md:flex-row mb-10 gap-10">
        <div className="w-full order-2 md:order-1 md:w-1/2 mt-20">
          <div className="space-y-8">
            <p className="md:text-xl text-xl text-justify">
              We are dedicated to revolutionizing the healthcare industry by
              supplying premium-quality surgical products that meet the highest
              international standards.
              <br />
              Beyond providing products, we strive to build lasting
              relationships with the healthcare community, offering personalized
              support, timely delivery, and a commitment to excellence that sets
              us apart. At Pistis Group, your trust drives our passion to
              empower the future of healthcare.
            </p>
            <p className="md:text-xl text-xl text-justify">
              Our mission is not just to provide top-notch medical equipment but
              also to support healthcare professionals in saving lives and
              improving patient outcomes. We understand the critical nature of
              your work, and every product we deliver is a testament to our
              unwavering dedication to quality and reliability.
              <br />
              Partnering with us means choosing innovation, precision, and care.
              Together, we aim to redefine standards and set new benchmarks in
              healthcare delivery.
            </p>
          </div>
        </div>
        <div className="w-full md:w-1/2 mt-10 order-1 grid grid-cols-2 gap-0 md:grid-cols-2 lg:grid-cols-3 overflow-hidden group transition-all duration-300 group-hover:gap-4 rounded-badge">
          <img
            src="/images/banner1.jpg"
            alt="Image 1"
            className="w-full h-full object-cover border-none transform transition-transform duration-300 group-hover:scale-105 "
          />
          <img
            src="/images/banner2.jpg"
            alt="Image 2"
            className="w-full h-full object-cover border-none transform transition-transform duration-300 group-hover:scale-105"
          />
          <img
            src="/images/banner3.jpg"
            alt="Image 3"
            className="w-full h-full object-cover border-none transform transition-transform duration-300 group-hover:scale-105"
          />
          <img
            src="/images/banner4.jpg"
            alt="Image 4"
            className="w-full h-full object-cover border-none transform transition-transform duration-300 group-hover:scale-105"
          />
          <img
            src="/images/banner5.jpg"
            alt="Image 5"
            className="w-full h-full object-cover border-none transform transition-transform duration-300 group-hover:scale-105"
          />
          <img
            src="/images/banner6.jpg"
            alt="Image 6"
            className="w-full h-full object-cover border-none transform transition-transform duration-300 group-hover:scale-105"
          />
        </div>
      </div>
    </>
  );
};

export default Banner;
