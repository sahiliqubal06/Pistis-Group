import React from "react";

const Banner = () => {
  return (
    <>
      <div className="max-w-screen-2xl container mx-auto md:px-20 px-4 flex flex-col md:flex-row">
        <div className="w-full order-2 md:order-1 md:w-1/2 mt-12 md:mt-32">
          <div className="space-y-12">
            <h1 className="text-4xl font-bold">Welcome to the Pistis Group.</h1>
            <p className="text-xl">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo
              blanditiis velit harum? Odio quidem sunt impedit repudiandae
              consequuntur eius pariatur.
            </p>
          </div>
        </div>
        <div className="w-full md:w-1/2 order-1">
        <img src="/images/banner1.jpg"/>
        </div>
      </div>
    </>
  );
};

export default Banner;
