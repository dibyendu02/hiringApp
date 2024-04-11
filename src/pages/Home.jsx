import React from "react";
import Navbar from "../components/Navbar";
import bg from "../assets/home/home.webp";

const Home = () => {
  return (
    <div className="w-full bg-red-400">
      <Navbar />

      {/* <div className='w-full'>
        <img src={bg} alt="bg" className='w-full h-screen object-contain ' />
      </div> */}

      {/* <div className=' w-[95vw] h-40 bg-yellow-400 mt-10'>
       <p>hello</p> 
      </div> */}
      <div className=" w-[99vw] h-screen bg-black">
        <p>hello</p>
      </div>
    </div>
  );
};

export default Home;
