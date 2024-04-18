import React, { useState } from "react";
import { Link } from "react-router-dom";
import { CiMenuBurger } from "react-icons/ci";
import logo from "../assets/logo.jpg";

const Navbar = () => {
  const [showMenu, setShowMenu] = useState(false);
  return (
    <nav className="bg-white fixed top-0 left-0 w-full z-10 shadow-md flex">
      <div className=" mx-auto px-4 flex items-center   ">
        <h3 className="text-black">
          <Link
            to="/"
            onClick={() => {
              setShowMenu(false);
            }}
          >
            <img src={logo} alt="logo" className="w-32 h-20" />
          </Link>
        </h3>
      </div>

      <div className=" mx-auto px-4  ">
        <div className="flex justify-center py-4 ">
          <ul className="md:flex items-center bg-red-600 px-10 py-3 rounded-[40px] hidden ">
            {/* <li className="mx-4 ">
              <Link to="/" className="text-white font-normal">
                Home
              </Link>
            </li> */}
            <li className="mx-4 ">
              <Link to="/services" className="text-white font-normal">
                Area of Expertise
              </Link>
            </li>
            <li className="mx-4">
              <Link to="/about" className="text-white font-normal">
                About
              </Link>
            </li>
            <li className="mx-4">
              <Link to="/contact" className="text-white font-normal">
                Contact Us
              </Link>
            </li>
          </ul>
        </div>
      </div>

      <div className=" mx-auto px-4  ">
        <div className="flex justify-center py-4">
          <Link
            to="/contact"
            className="rounded-[40px] bg-red-600 hover:bg-red-400 text-white hover:text-black font-normal hover:bottom-0 px-5 py-3"
          >
            FIND TALENT
          </Link>
        </div>
      </div>

      <div
        className="flex justify-center items-center mr-5 md:hidden"
        onClick={() => {
          setShowMenu(showMenu ? false : true);
        }}
      >
        <CiMenuBurger color="black" size={24} />
      </div>

      {showMenu && (
        <div className="absolute h-[100vh] w-full bg-blue-950 flex justify-center items-center top-20">
          <ul className="flex flex-col gap-10 items-center">
            <li className="mx-4 ">
              <Link
                to="/services"
                className="text-white text-2xl font-normal"
                onClick={() => {
                  setShowMenu(false);
                }}
              >
                Services
              </Link>
            </li>
            <li
              className="mx-4"
              onClick={() => {
                setShowMenu(false);
              }}
            >
              <Link to="/about" className="text-white text-2xl font-normal">
                About
              </Link>
            </li>
            <li className="mx-4">
              <Link
                to="/contact"
                className="text-white text-2xl font-normal"
                onClick={() => {
                  setShowMenu(false);
                }}
              >
                Contact Us
              </Link>
            </li>
          </ul>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
