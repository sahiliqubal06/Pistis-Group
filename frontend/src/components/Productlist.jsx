import React from "react";
import list from "../../public/list.json";
import Cards from "./Cards";

const Productlist = () => {
  return (
    <>
      <div className="max-w-screen-2xl container mx-auto md:px-20 px-4">
        <div className="mt-28 items-center justify-center text-center">
          <h1 className="text-2xl md:text-4xl">Product List</h1>
          <p className="mt-12">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nihil
            cupiditate aut esse ad minima. Veritatis, accusantium dolore
            molestias odio quisquam laboriosam quia in. Earum optio, aliquam
            aliquid beatae minima tenetur repellat voluptatum dolorem, inventore
            deleniti molestiae numquam? Voluptas, dolore nobis.
          </p>
        </div>
        <div className="mt-12 grid grid-cols-1 md:grid-cols-4">
          {list.map((item) => (
            <Cards key={item.id} item={item} />
          ))}
        </div>
      </div>
    </>
  );
};

export default Productlist;
