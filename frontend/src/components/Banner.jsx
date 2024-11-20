import React from "react";

const Banner = () => {
  return (
    <>
      <div className="px-4 flex flex-col md:flex-row mb-10 mt-20 gap-6">
        <div className="w-full order-1 md:order-1 md:w-1/2  md:mt-36">
          <div className="space-y-8">
            <h1 className="text-2xl md:text-4xl font-bold justify-center text-center">
              Welcome to the {""}
              <span className="text-green-500">Pistis Group</span>.
            </h1>
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
          </div>
        </div>
        <div className="w-full md:w-1/2 order-2 mt-20 sm:mt-20 grid grid-cols-2 gap-0 md:grid-cols-2 lg:grid-cols-3 overflow-hidden">
          <img
            src="/images/banner1.jpg"
            alt="Image 1"
            className="w-full h-full object-cover border-none"
          />
          <img
            src="/images/banner2.jpg"
            alt="Image 2"
            className="w-full h-full object-cover border-none"
          />
          <img
            src="/images/banner3.jpg"
            alt="Image 3"
            className="w-full h-full object-cover border-none"
          />
          <img
            src="/images/banner4.jpg"
            alt="Image 4"
            className="w-full h-full object-cover border-none"
          />
          <img
            src="/images/banner5.jpg"
            alt="Image 5"
            className="w-full h-full object-cover border-none "
          />
          <img
            src="/images/banner6.jpg"
            alt="Image 6"
            className="w-full h-full object-cover border-none"
          />
        </div>
      </div>
    </>
  );
};

export default Banner;
