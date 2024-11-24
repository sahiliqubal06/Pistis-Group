import React, { useEffect, useState } from "react";
import Login from "./Login";

const Navbar = () => {
  const [sticky, setSticky] = useState(false);
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setSticky(true);
      } else {
        setSticky(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const navItems = (
    <>
      <li>
        <a href="/">Home</a>
      </li>
      <li>
        <a href="/products">Products</a>
      </li>
      <li>
        <a href="/contactus">Contact Us</a>
      </li>
      <li>
        <a href="/aboutus">About Us</a>
      </li>
    </>
  );
  return (
    <>
      <div
        className={`  px-4 fixed top-0 left-0 right-0 z-50 bg-blue-950 text-white ${
          sticky
            ? "sticky-navbar shadow-md duration-300 text-emerald-500 transition-all ease-in-out"
            : ""
        }`}
      >
        <div className="navbar">
          <div className="navbar-start">
            <div className="dropdown">
              <div
                tabIndex={0}
                role="button"
                className="btn btn-ghost lg:hidden"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h7m-7 6h16"
                  />
                </svg>
              </div>
              <ul
                tabIndex={0}
                className="menu menu-sm dropdown-content rounded-box z-[1] mt-3 w-52 p-2 shadow bg-stone-800 text-white "
              >
                {navItems}
              </ul>
            </div>
            <div className="flex items-center space-x-2 ">
              <a href="/" className="flex items-center space-x-2 ">
                <img
                  src="/logo1.png"
                  alt="Pistis Group Logo"
                  className="h-8 w-auto cursor-pointer rounded-box hover:scale-110 hover:shadow-lg transition-transform duration-300"
                />
                <span className="text-2xl font-bold text-white hidden sm:inline hover:text-green-600">
                  Pistis Group
                </span>
              </a>
            </div>
          </div>
          <div className="navbar-center hidden lg:flex">
            <ul className="menu menu-horizontal px-1 text-2xl">{navItems}</ul>
          </div>
          <div className="navbar-end">
            <div className="">
              <a
                className="px-2 py-2 text-white font-bold rounded-full bg-blue-600 hover:bg-blue-700 hover:text-black duration-300 cursor-pointer"
                onClick={() =>
                  document.getElementById("my_modal_3").showModal()
                }
              >
                Office Login
              </a>
              <Login />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
