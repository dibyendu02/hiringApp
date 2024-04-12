import React from "react";
import Navbar from "../components/Navbar";
import bg from "../assets/home/2.jpg";
import Footer from "../components/Footer";
import card from "../assets/home/laptop.png";
import bgVideo from "../assets/home/bgVideo.mp4";

const Home = () => {
  return (
    <div className="relative w-screen h-screen">
      <Navbar />

      <div
        className="w-[100%] h-[100%] overflow-hidden "
        style={{ backgroundImage: `url(${bg})`, backgroundSize: "cover" }}
      >
        {/* <img src={bg} className="w-full h-full  object-contain " /> */}

        <div className="w-[100%] h-[100%] overflow-y-scroll bg-transparent text-white top-24    pt-16 md:pt-20 ">
          <div className="w-full h-36 bg-white mt-3 p-5 md:pl-40 ">
            <p className="text-black w-80">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit.
              Doloremque, officia magnam omnis fugiat voluptates totam nam culpa
              alias cum?
            </p>
          </div>

          <div className="md:pl-40 mt-10 p-8">
            <h1 className="md:text-[5.5rem] text-7xl">Scalable Staffing </h1>
            <h1 className="md:text-[5.5rem] text-7xl font-bold">Solutions </h1>
            <p className="text-2xl md:w-[55%] w-[80%] pt-10 ">
              Falcon helps small businesses in the federal sector grow. We
              quickly provide screened cleared candidates, better pricing,
              customizable contracts and flexible payment terms.
            </p>
            <button className="bg-blue-800 w-36 h-12 flex justify-center items-center rounded-3xl font-normal mt-8">
              Learn More
            </button>
          </div>

          <div className="flex w-full justify-center mt-28 py-20 bg-transparent">
            <div className="flex flex-col md:flex-row">
              {/* Card 1 */}
              <div className="max-w-xs bg-red-600  p-4 pb-20">
                <h2 className="text-white text-xl font-semibold mb-2">
                  Card 1
                </h2>
                <p className="text-white">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                </p>
              </div>

              {/* Card 2 */}
              <div className="max-w-xs bg-blue-950  p-4 pb-20">
                <h2 className="text-white text-xl font-semibold mb-2">
                  Card 2
                </h2>
                <p className="text-white">
                  Sed do eiusmod tempor incididunt ut labore et dolore magna
                  aliqua.
                </p>
              </div>

              {/* Card 3 */}
              <div className="max-w-xs bg-red-600  p-4 pb-20">
                <h2 className="text-white text-xl font-semibold mb-2">
                  Card 3
                </h2>
                <p className="text-white">
                  Ut enim ad minim veniam, quis nostrud exercitation ullamco
                  laboris nisi ut aliquip ex ea commodo consequat.
                </p>
              </div>

              {/* Card 4 */}
              <div className="max-w-xs bg-blue-950  p-4 pb-20">
                <h2 className="text-white text-xl font-semibold mb-2">
                  Card 4
                </h2>
                <p className="text-white">
                  Duis aute irure dolor in reprehenderit in voluptate velit esse
                  cillum dolore eu fugiat nulla pariatur.
                </p>
              </div>
            </div>
          </div>

          {/* <div className="w-full h-screen ">
            <div className="bg-white px-8 py-3 md:w-80 w-60 md:ml-20 rounded-b-xl">
              <p className="text-black text-lg font-bold">What We Offer</p>
            </div>
            <div className="md:ml-20 m-5 flex flex-col gap-5 mt-20">
              <p className="text-xl ">
                Seeking qualified candidates can be time-consuming
              </p>
              <h6 className="md:w-[50%] text-4xl">
                We understand our clients needs which is why we ask the
                important questions and let our database filter out qualified
                candidates for your needs.
              </h6>
            </div>
          </div> */}

          <div className="relative w-full h-screen bg-blue-950">
            <video
              autoPlay
              loop
              muted
              className="absolute inset-0 w-full h-full object-cover"
            >
              <source src={bgVideo} type="video/mp4" />
              Your browser does not support the video tag.
            </video>
            <div className="absolute inset-0 flex flex-col ">
              <div className="bg-white px-8 py-3 md:w-80 w-60 md:ml-20 rounded-b-xl">
                <p className="text-black text-lg font-bold">What We Offer</p>
              </div>
              <div className="md:ml-20 m-5 flex flex-col gap-5 mt-20">
                <p className="text-xl">
                  Seeking qualified candidates can be time-consuming
                </p>
                <h6 className="md:w-[50%] text-4xl">
                  We understand our clients needs which is why we ask the
                  important questions and let our database filter out qualified
                  candidates for your needs.
                </h6>
              </div>
            </div>
          </div>

          <div className="w-full md:h-[80vh]  bg-white">
            <div className="bg-black px-8 py-3 md:w-80 w-60 md:ml-20 rounded-b-xl">
              <p className="text-white text-lg font-bold">Areas of Expertise</p>
            </div>
            <div className="flex flex-col h-full justify-between px-24 py-10 gap-20 items-center md:flex-row">
              <div className="flex flex-col gap-2 justify-center items-center h-[80%] ">
                <img
                  src={card}
                  alt="laptop"
                  className="w-full h-[60%] rounded-xl"
                />
                <p className="text-xl text-black">CYBER SECURITY</p>
              </div>
              <div className="flex flex-col gap-2 justify-center items-center h-[80%] ">
                <img
                  src={card}
                  alt="laptop"
                  className="w-full h-[60%] rounded-xl"
                />
                <p className="text-xl text-black text-center">
                  INFORMATION TECHNOLOGY
                </p>
              </div>
              <div className="flex flex-col gap-2 justify-center items-center h-[80%] ">
                <img
                  src={card}
                  alt="laptop"
                  className="w-full h-[60%] rounded-xl"
                />
                <p className="text-xl text-black">HEALTHCARE IT</p>
              </div>
            </div>
          </div>

          <div className="w-full md:h-[70vh] h-[130%] bg-blue-950">
            <div className="bg-white px-8 py-3 md:w-80 w-60 md:ml-20 rounded-b-xl">
              <p className="text-black text-lg font-bold">Testimonials</p>
            </div>
            <div className="flex md:flex-row flex-col items-center md:justify-center gap-8 md:gap-16 md:pl-40 mt-10">
              {/* Testimonial 1 */}
              <div className="max-w-xs  p-6 ">
                <p className="text-white md:h-48">
                  "Falcon IT Staffing Solutions provided us with top-notch
                  candidates, and their customer service is exceptional.I was
                  amazed by Falcon's efficiency and professionalism. They made
                  the hiring process a breeze."
                </p>
                <h2 className="text-white text-lg font-semibold mb-2">
                  John Doe
                </h2>
              </div>

              {/* Testimonial 2 */}
              <div className="max-w-xs  p-6 ">
                <p className="text-white md:h-48">
                  "We've been using Falcon for years, and they've never let us
                  down. Highly recommend!I was amazed by Falcon's efficiency and
                  professionalism. They made the hiring process a breeze."
                </p>
                <h2 className="text-white text-lg font-semibold mb-2">
                  Jane Smith
                </h2>
              </div>

              {/* Testimonial 3 */}
              <div className="max-w-xs  p-6 ">
                <p className="text-white md:h-48">
                  "I was amazed by Falcon's efficiency and professionalism. They
                  made the hiring process a breeze.I was amazed by Falcon's
                  efficiency and professionalism. They made the hiring process a
                  breeze."
                </p>
                <h2 className="text-white text-lg font-semibold mb-2">
                  Mary Johnson
                </h2>
              </div>
            </div>
          </div>

          <Footer />
        </div>
      </div>
    </div>
  );
};

export default Home;
