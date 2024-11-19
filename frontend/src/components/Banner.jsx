import React from "react";

const Banner = () => {
  return (
    <>
      <div className="max-w-screen-2xl container mx-auto md:px-20 px-4 flex flex-col md:flex-row mb-10">
        <div className="w-full order-2 md:order-1 md:w-1/2 mt-12 md:mt-36">
          <div className="space-y-8">
            <h1 className="text-2xl md:text-4xl font-bold">
              Welcome to the Pistis Group.
            </h1>
            <p className="md:text-xl text-sm text-justify">
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
        <div className="w-full md:w-1/2 order-1 mt-20">
          <img
            src="/images/banner1.jpg"
            className="md:w-[550px] md:h-[460px] md:ml-12"
          />
        </div>
      </div>
    </>
  );
};

export default Banner;
