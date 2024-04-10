import React from "react";

const Navbar = () => {
  return (
    <nav className="bg-white fixed top-0 left-0 w-full z-10 shadow-md flex">
      <div className="container mx-auto px-4  ">
        
      </div>

      <div className="container mx-auto px-4  ">
        <div className="flex justify-center py-4 ">
          <ul className="flex items-center bg-blue-950 px-10 py-3 rounded-[40px] ">
            <li className="mx-4 ">
              <a href="#services" className="text-white font-normal">Services</a>
            </li>
            <li className="mx-4">
              <a href="#about" className="text-white font-normal">About</a>
            </li>
            <li className="mx-4">
              <a href="#contact" className="text-white font-normal">Contact Us</a>
            </li>
          </ul>
        </div>
      </div>

      <div className="container mx-auto px-4  ">
        <div className="flex justify-center py-4">
          <a href="#" className="rounded-[40px] bg-red-600 hover:bg-red-400 text-white hover:text-black font-normal hover:bottom-0 px-5 py-3">
            FIND TALENT
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
