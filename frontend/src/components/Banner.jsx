import React from "react";

const Banner = () => {
  return (
    <>
      <div className="max-w-screen-2xl container mx-auto md:px-20 px-4 flex flex-col md:flex-row my-10">
        <div className="w-full order-2 md:order-1 md:w-1/2 mt-12 md:mt-36">
          <div className="space-y-8">
            <h1 className="text-2xl md:text-4xl font-bold">Welcome to the Pistis Group.</h1>
            <p className="md:text-xl text-sm">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo
              blanditiis velit harum? Odio quidem sunt impedit repudiandae
              consequuntur eius pariatur.
            </p>
          </div>
        </div>
        <div className="w-full md:w-1/2 order-1 mt-20">
        <img src="/images/banner1.jpg"/>
        </div>
      </div>
    </>
  );
};

export default Banner;
