import React from "react";

const Cards = ({ item }) => {
  console.log(item);
  return (
    <>
      <div className="mt-4 my-3 p-3">
        <div className="card card-compact shadow-xl w-50 hover:scale-105 duration-200 dark:bg-slate-900 dark:text-white dark:border">
          <figure>
            <img src={item.image} alt="Shoes" />
          </figure>
          <div className="card-body">
            <h2 className="card-title">{item.name}</h2>
            <p>{item.title}</p>
            <div className="card-actions justify-end">
              <div className="cursor-pointer px-2 py-1 rounded-full border-[2px] hover:bg-blue-500 hover:text-white">
                Learn More
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Cards;
