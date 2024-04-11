import React from "react";
import Navbar from "../components/Navbar";
import bg from "../assets/home/1.jpg";

const Contact = () => {
  return (
    <div className="w-[100%] h-full">
      <Navbar />
      <div className="w-[100%] overflow-x-hidden relative">
        <img src={bg} className="w-full object-cover " />

        <div className="w-[100%]  absolute bg-[#c7c7c7] text-white top-24 px-28 pt-20 pb-10 ">
          <div className="w-[40%]">
            <p className="text-blue-950 text-4xl">Contact Us</p>
            <br />
            <p className="text-blue-950 text-4xl tracking-widest">
              HOW CAN WE FILL YOUR STAFFING NEEDS?
            </p>
            <p className="text-blue-950 text-2xl">CALL TODAY: (888) 519-2065</p>
            <p className="text-blue-950 text-xl">
              Email: bshepherdson@falconitss.com.
            </p>

            <br />

            <p className="text-blue-950 text-lg font-bold">
              Connect with our TALENT DATABASE:
            </p>
            <p className="text-blue-950 text-xl">
              500,000 + IT Professionals w/ Fed Government Staffing, Security
              Clearance, Fully Vetted
            </p>

            <br />

            <p className="text-blue-950 text-lg">Available 7 days a week</p>
          </div>
        </div>
      </div>

      {/* <div
        style={{
          backgroundImage: `url(${bg})`, // Corrected here
        }}
        className=" h-full w-full"
      ></div> */}
    </div>
  );
};

export default Contact;
