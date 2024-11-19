import React from "react";
import list from "../../public/list.json";
import Cards from "./Cards";

const Productlist = () => {
  return (
    <>
      <div className="max-w-screen-2xl container mx-auto md:px-20 px-4">
        <div className="mt-28 items-center justify-center text-center">
          <h1 className="text-4xl md:text-4xl font-bold">Product List</h1>
          <p className="mt-12 text-xl text-justify">
            We specialize in providing a wide range of high-quality medical and
            surgical disposable products designed to meet the diverse needs of
            healthcare providers. Our product lineup includes disposable gloves,
            surgical masks, drapes, gowns, syringes, catheters, and more,
            ensuring optimal hygiene and safety in every medical setting. Each
            product is sourced from trusted manufacturers and adheres to
            stringent quality standards, making them reliable for use in
            hospitals, clinics, and diagnostic centers. Whether you're
            performing critical surgeries or routine medical procedures, our
            disposable products are tailored to support efficiency, cleanliness,
            and patient care.
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
