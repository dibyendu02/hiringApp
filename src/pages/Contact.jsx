import React from "react";
import Navbar from "../components/Navbar";
import bg from "../assets/home/1.jpg";
import Footer from "../components/Footer";

const Contact = () => {
  return (
    <div className="w-[100%] h-full ">
      <Navbar />
      <div className="w-[100%] h-[120%] bg-red-400 overflow-x-hidden relative ">
        <img src={bg} className="w-full object-contain " />

        <div className="w-[100%]  md:absolute bg-[#c7c7c7] text-white top-24  md:px-28 p-10 pt-16 md:pt-20 pb-10 ">
          <div className="md:w-[45%] ">
            <p className="text-blue-950 text-4xl">Contact Us</p>
            <br />
            <p className="text-blue-950 text-4xl tracking-widest ">
              HOW CAN WE FILL YOUR STAFFING NEEDS?
            </p>

            <p className="text-blue-950 text-2xl mt-2">
              CALL TODAY: (888) 519-2065
            </p>
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

      <div className="bg-white md:w-[50%] w-full  md:absolute -bottom-[60%] left-20 md:rounded-xl p-5 ">
        <div className="flex flex-col gap-3 md:gap-10">
          <div className="flex md:flex-row flex-col gap-3   justify-between">
            <div className="flex flex-col gap-2">
              <span className="text-black">First Name</span>
              <input className="bg-transparent border-b focus:outline-none focus:border-gray-600 text-black p-2" />
            </div>
            <div className="flex flex-col gap-2 ">
              <span className="text-black">Last Name</span>
              <input className="bg-transparent border-b focus:outline-none focus:border-gray-600 text-black p-2" />
            </div>
            <div className="flex flex-col gap-2">
              <span className="text-black">Email</span>
              <input className="bg-transparent border-b focus:outline-none focus:border-gray-600 text-black p-2" />
            </div>
          </div>

          <div className="flex md:flex-row flex-col gap-3 justify-between">
            <div className="flex flex-col gap-2">
              <span className="text-black">Phone</span>
              <input className="bg-transparent border-b  focus:outline-none focus:border-gray-600 text-black p-2" />
            </div>

            <div className="flex flex-col gap-2">
              <span className="text-black">Job title</span>
              <input className="bg-transparent border-b focus:outline-none focus:border-gray-600 text-black p-2" />
            </div>
            <div className="flex flex-col gap-2">
              <span className="text-black">Subject</span>
              <input className="bg-transparent border-b focus:outline-none focus:border-gray-600 text-black p-2" />
            </div>
          </div>
          <div className="flex flex-col gap-2">
            <span className="text-black">Leave us a message...</span>
            <textarea className="w-full h-24 bg-transparent border-b focus:outline-none focus:border-gray-600 text-black resize-none p-2" />
          </div>
          <button className="bg-black text-white rounded-3xl w-36 py-3 px-4 my-4">
            Submit
          </button>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Contact;
