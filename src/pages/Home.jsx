import React, { useEffect, useState } from "react";
import Navbar from "../components/Navbar";
import bg from "../assets/home/2.jpg";
import Footer from "../components/Footer";
import card1 from "../assets/home/laptop.png";
import card2 from "../assets/home/hacking.png";
import card3 from "../assets/home/doctor.png";
import bgVideo from "../assets/home/bgVideo.mp4";
import human1 from "../assets/home/human1.png";
import human2 from "../assets/home/human2.png";
import human3 from "../assets/home/human3.png";
import developer from "../assets/home/developer.png";
import { FaDollarSign } from "react-icons/fa6";

import AOS from "aos";
import "aos/dist/aos.css";
import Carousel from "../components/Carousel";
import FAQ from "../components/Faq";
import CardCarousel from "../components/Carousel";
import { Link } from "react-router-dom";

const FAQs = [
  {
    question: "How to hire through Pinaka Staffing ?",
    answer: `It's very simple, you just need to fill the contact form on the contact page and we would be getting in touch with you for your hiring assistance.`,
  },
  {
    question:
      "What are the domians where Pinaka Staffing can provide manpower ?",
    answer: `We cover a large spectrum, it includes technology, human resource, management.`,
  },
  {
    question: "How can I post a job on your platform?",
    answer: `Posting a job is simple! Just sign up as an employer, log in to your account, and navigate to the "Post a Job" section. Fill out the required details about the job, such as job title, description, requirements, and location, and your job will be live on our platform for job seekers to view.`,
  },
  {
    question: "Can I contact the company directly regarding a job listing?",
    answer: `Absolutely! We encourage communication between job seekers and employers. Each job listing includes contact information for the hiring company. You can reach out to them directly via email or phone to express your interest in the position or ask any questions you may have.`,
  },
];

const Home = () => {
  const items = ["Item 1", "Item 2", "Item 3", "Item 4"]; // Replace with your actual carousel items

  const [openIndex, setOpenIndex] = useState(null);

  useEffect(() => {
    AOS.init({ duration: 2000 });
  }, []);
  return (
    <div className="relative w-screen h-screen">
      <Navbar />

      <div
        className="w-[100%] h-[100%] overflow-hidden "
        style={{ backgroundImage: `url(${bg})`, backgroundSize: "cover" }}
      >
        {/* <img src={bg} className="w-full h-full  object-contain " /> */}

        <div className="w-[100%] h-[100%] overflow-y-scroll bg-transparent text-white top-24    pt-16 md:pt-20 ">
          {/* <div className="w-full h-36 bg-white mt-3 p-5 md:pl-40 ">
            <p
              className="text-black w-80 md:w-96 md:text-xl text-lg"
              data-aos="fade-right"
            >
              Pinaka Staffing specializes in recruiting for companies
              nationwide, offering staffing solutions for both temporary and
              permanent positions.
            </p>
          </div> */}

          <div className="md:pl-40 mt-20 p-8" data-aos="fade-right">
            <h1 className="md:text-[5.5rem] text-7xl">Scalable Staffing </h1>
            <h1 className="md:text-[5.5rem] text-7xl font-bold">Solutions </h1>
            <p className="text-2xl md:w-[55%] w-[90%] pt-10 ">
              Pinaka helps small businesses in the federal sector grow. We
              quickly provide screened cleared candidates, better pricing,
              customizable contracts and flexible payment terms.
            </p>
            <p className="text-2xl md:w-[55%] w-[90%] pt-2">
              This campaign will only be used for sharing relevant job openings
              with the candidates.
            </p>
            <Link
              to="/about"
              className="bg-blue-800 w-36 h-12 flex justify-center text-white hover:text-blue-200 font-normal items-center rounded-3xl mt-8"
            >
              Learn More
            </Link>
          </div>

          <div className="flex w-full justify-center mt-28 py-20 bg-transparent">
            <div className="flex flex-col md:flex-row">
              {/* Card 1 */}
              <div className="max-w-xs bg-red-600  p-10 pb-20 relative">
                <div className="bg-blue-950 absolute w-2 h-20 left-4 top-8 rounded-md "></div>
                <h2 className="text-white text-lg font-bold mb-2">
                  INDUSTRIES:
                </h2>
                <p className="text-white">Federal and Commercial Sectors</p>
              </div>

              {/* Card 2 */}
              <div className="max-w-xs bg-blue-950  p-10 pb-20 relative">
                <div className="bg-red-600 absolute w-2 h-20 left-4 top-8 rounded-md "></div>
                <h2 className="text-white text-lg font-bold mb-2">
                  TECHNICAL EXPERTISE:
                </h2>
                <p className="text-white">
                  Cyber Security, Software Development, Network Engineering and
                  more
                </p>
              </div>

              {/* Card 3 */}
              <div className="max-w-xs bg-red-600  p-10 pb-20 relative">
                <div className="bg-blue-950 absolute w-2 h-20 left-4 top-8 rounded-md "></div>
                <h2 className="text-white text-lg font-bold mb-2">
                  TALENT DATABASE:
                </h2>
                <p className="text-white">
                  500,000 + IT Professionals w/ Fed Gov Security Clearance,
                  Fully Vetted
                </p>
              </div>

              {/* Card 4 */}
              <div className="max-w-xs bg-blue-950  p-10 pb-20 relative">
                <div className="bg-red-600 absolute w-2 h-20 left-4 top-8 rounded-md "></div>
                <h2 className="text-white text-lg font-bold mb-2">
                  QUALIFIED:
                </h2>
                <p className="text-white">
                  Helping Military Veterans find employment
                </p>
              </div>
            </div>
          </div>

          {/* What we offer */}

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

          {/* Why Choose Us */}

          <div className="relative w-full  md:h-[135%] h-[180%] bg-blue-950">
            <img src={developer} alt="developer" className="content-cover" />
            <div className="absolute xl:w-[45%] md:w-[65%] md:left-32  inset-0 flex flex-col ">
              <div className="bg-white px-8 py-3 md:w-80 w-60  rounded-b-xl">
                <p className="text-black text-lg font-bold">Why Choose Us</p>
              </div>
              <div className="w-full flex flex-col md:flex-row md:p-5 ">
                <div className="md:w-1/2 w-full p-5 flex flex-col gap-5 xl:gap-10">
                  <div className="border w-14 h-14 flex justify-center items-center border-white p-2 rounded-md  ">
                    <FaDollarSign color="white" size={30} className="" />
                  </div>
                  <h6 className="text-2xl">Flexible Payment Terms</h6>
                  <p>
                    Scalable pricing options/packages for small and large
                    businesses alike.
                  </p>
                </div>
                <div className="md:w-1/2 w-ful p-5 flex flex-col gap-5 xl:gap-10">
                  <div className="border w-14 h-14 flex justify-center items-center border-white p-2 rounded-md  ">
                    <FaDollarSign color="white" size={30} className="" />
                  </div>
                  <h6 className="text-2xl">Zero Cost Replacement Provision</h6>
                  <p>
                    We provide replacement candidates for those who did not
                    quite meet your work standards within reason.
                  </p>
                </div>
              </div>
              <div className="w-full flex flex-col md:flex-row p-5 ">
                <div className="md:w-1/2 w-full p-5 flex flex-col gap-5 xl:gap-10">
                  <div className="border w-14 h-14 flex justify-center items-center border-white p-2 rounded-md  ">
                    <FaDollarSign color="white" size={30} className="" />
                  </div>
                  <h6 className="text-2xl">
                    Temp, Temp to Perm & Perm Placement Solutions
                  </h6>
                  <p>
                    We have the opportunity to support an employment structure
                    that is best suited to fit your needs.
                  </p>
                </div>
                <div className="md:w-1/2 w-full p-5 flex flex-col gap-5 xl:gap-10">
                  <div className="border w-14 h-14 flex justify-center items-center border-white p-2 rounded-md  ">
                    <FaDollarSign color="white" size={30} className="" />
                  </div>
                  <h6 className="text-2xl">Cleared & Uncleared Recruiting</h6>
                  <p>
                    Our vast database and industry experience provides a robust
                    pool of both cleared and uncleared candidates.
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="w-full md:h-[80vh]  bg-white">
            <div className="bg-black px-8 py-3 md:w-80 w-60 md:ml-20 rounded-b-xl">
              <p className="text-white text-lg font-bold">Areas of Expertise</p>
            </div>
            <div className="flex flex-col h-full justify-between md:px-24 py-10 gap-20 items-center md:flex-row">
              <div className="flex flex-col gap-2 justify-center items-center w-[80%] h-[80%] ">
                <img
                  src={card2}
                  alt="laptop"
                  className="w-[full] md:h-[60%] h-full rounded-xl"
                />
                <p className="text-xl text-black">CYBER SECURITY</p>
              </div>
              <div className="flex flex-col gap-2 justify-center items-center w-[80%] h-[80%] ">
                <img
                  src={card1}
                  alt="laptop"
                  className="w-full h-[60%] rounded-xl"
                />
                <p className="text-xl text-black text-center">
                  INFORMATION TECHNOLOGY
                </p>
              </div>
              <div className="flex flex-col gap-2 justify-center items-center w-[80%] h-[80%] ">
                <img
                  src={card3}
                  alt="laptop"
                  className="w-full h-[60%] rounded-xl"
                />
                <p className="text-xl text-black">HEALTHCARE IT</p>
              </div>
            </div>
          </div>

          {/* Testimonial */}
          {/* <div className="w-full md:h-[70vh] h-[150%] bg-blue-950">
            <div className="bg-white px-8 py-3 md:w-80 w-60 md:ml-20 rounded-b-xl">
              <p className="text-black text-lg font-bold">Testimonials</p>
            </div>
            <div className="flex md:flex-row flex-col items-center md:justify-center gap-8 md:gap-16  mt-10 ">
              
              <div className="max-w-xs  p-6 ">
                <p className="text-white md:h-60">
                  "Pinaka Staffing Solutions provided us with top-notch
                  candidates, and their customer service is exceptional.I was
                  amazed by Pinaka's efficiency and professionalism. They made
                  the hiring process a breeze."
                </p>

                <div className="flex gap-2 items-center">
                  <img src={human3} className="w-10 h-10 rounded-full" />
                  <h2 className="text-white text-lg font-semibold mb-2">
                    John Doe
                  </h2>
                </div>
              </div>

             
              <div className="max-w-xs  p-6 ">
                <p className="text-white md:h-60">
                  "Incredible experience with Pinaka Staffing Solutions! Their
                  team provided us with highly qualified candidates, and their
                  customer service exceeded our expectations. Pinaka's
                  professionalism and efficiency made the entire hiring process
                  seamless."
                </p>

                <div className="flex gap-2 items-center">
                  <img src={human2} className="w-10 h-10 rounded-full" />
                  <h2 className="text-white text-lg font-semibold mb-2">
                    Jake Smith
                  </h2>
                </div>
              </div>

             
              <div className="max-w-xs  p-6 ">
                <p className="text-white md:h-60">
                  "Pinaka Staffing Solutions went above and beyond to deliver
                  outstanding candidates for our company. Their exceptional
                  customer service and expertise made working with them a
                  pleasure. "
                </p>
                <div className="flex gap-2 items-center">
                  <img src={human1} className="w-10 h-10 rounded-full" />
                  <h2 className="text-white text-lg font-semibold mb-2">
                    Mary Johnson
                  </h2>
                </div>
              </div>
            </div>
          </div> */}
          {/* Carousel  */}
          <div className="w-full bg-black flex flex-col items-center">
            <h1 className="text-center md:py-16 py-5 md:w-[60%] text-4xl px-10">
              Placing our candidates in a job within 72 hours of their initial
              interview date.
            </h1>
            <CardCarousel />
          </div>

          {/* FAQ  */}

          <div className="w-full h-[80%] md:h-full  bg-white">
            <div className="bg-black px-8 py-3 md:w-80 w-60 md:ml-20 rounded-b-xl">
              <p className="text-white text-lg font-bold">FAQs</p>
            </div>
            <div className="w-full md:ml-40 mt-20 md:max-w-md">
              {FAQs.map((item, index) => (
                <FAQ
                  key={index}
                  question={item.question}
                  answer={item.answer}
                />
              ))}
            </div>
          </div>

          <Footer />
        </div>
      </div>
    </div>
  );
};

export default Home;
