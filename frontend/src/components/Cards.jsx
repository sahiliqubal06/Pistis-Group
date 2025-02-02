import React from "react";

const Cards = ({ item }) => {
  return (
    <>
      <div className="mt-4 my-3 p-3">
        <div className="card card-compact shadow-xl w-50 hover:scale-105 duration-200 ">
          <figure className="flex items-center justify-center h-48 w-full">
            <img
              src={item.image}
              alt={item.name}
              className="object-contain h-full w-full"
            />
          </figure>
          <div className="card-body bg-gray-200 ">
            <h2 className="card-title justify-center text-center text-teal-500">
              {item.name}
            </h2>
            <p>{item.description}</p>
            {/* <div className="card-actions justify-end">
              <div className="cursor-pointer px-2 py-1 rounded-full border-[2px] hover:bg-blue-500 hover:text-white">
                Learn More
              </div>
            </div> */}
          </div>
        </div>
      </div>
    </>
  );
};

export default Cards;
