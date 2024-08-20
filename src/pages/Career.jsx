import React, { useEffect, useState } from "react";
import Navbar from "../components/Navbar";
import bg from "../assets/home/1.jpg";
import Footer from "../components/Footer";
import AOS from "aos";
import "aos/dist/aos.css";

const Career = () => {
  useEffect(() => {
    AOS.init({ duration: 2000 });
  }, []);

  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    jobTitle: "",
    subject: "",
    message: "",
    resume: null,
    agreement: false, // Added field for agreement checkbox
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData({
      ...formData,
      [name]: type === "checkbox" ? checked : value,
    });
  };

  const handleFileChange = (e) => {
    setFormData({
      ...formData,
      resume: e.target.files[0], // Handle file upload
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const formDataToSend = new FormData();
    for (const key in formData) {
      formDataToSend.append(key, formData[key]);
    }

    console.log("Email sent successfully");
    window.location.reload();
  };

  return (
    <div className="w-full h-full ">
      <Navbar />
      <div className="w-[100%] md:h-[165vh] bg-red-400 overflow-hidden relative ">
        <img src={bg} className="w-full h-full  object-cover " />

        <div className="w-[100%]  md:absolute bg-[#c7c7c7] text-white top-24  md:px-28 p-10 pt-16 md:pt-20 pb-10 ">
          <div className="md:w-[45%] " data-aos="fade-right">
            <p className="text-blue-950 text-4xl">Contact Us</p>
            <br />
            <p className="text-blue-950 text-4xl tracking-widest ">
              HOW CAN WE FILL YOUR STAFFING NEEDS?
            </p>

            <p className="text-blue-950 text-2xl mt-2">
              CALL TODAY: +1 256 743 0829
            </p>
            <p className="text-blue-950 text-xl">
              Email: resume@pinakastaffing.com
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

      <div className="bg-white md:w-[50%] w-full  md:absolute -bottom-[80%] left-20 md:rounded-xl p-5 ">
        <form onSubmit={handleSubmit} className="flex flex-col gap-5">
          <div className="flex md:flex-row flex-col gap-3 justify-between">
            <div className="flex flex-col gap-2">
              <span className="text-black">First Name</span>
              <input
                className="bg-transparent border-b focus:outline-none focus:border-gray-600 text-black p-2"
                type="text"
                name="firstName"
                value={formData.firstName}
                onChange={handleChange}
              />
            </div>
            <div className="flex flex-col gap-2">
              <span className="text-black">Last Name</span>
              <input
                className="bg-transparent border-b focus:outline-none focus:border-gray-600 text-black p-2"
                type="text"
                name="lastName"
                value={formData.lastName}
                onChange={handleChange}
              />
            </div>
            <div className="flex flex-col gap-2">
              <span className="text-black">Email</span>
              <input
                className="bg-transparent border-b focus:outline-none focus:border-gray-600 text-black p-2"
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
              />
            </div>
          </div>

          <div className="flex md:flex-row flex-col gap-3 justify-between">
            <div className="flex flex-col gap-2">
              <span className="text-black">Phone</span>
              <input
                className="bg-transparent border-b focus:outline-none focus:border-gray-600 text-black p-2"
                type="text"
                inputMode="numeric"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
              />
            </div>
            <div className="flex flex-col gap-2">
              <span className="text-black">Job Title</span>
              <input
                className="bg-transparent border-b focus:outline-none focus:border-gray-600 text-black p-2"
                type="text"
                name="jobTitle"
                value={formData.jobTitle}
                onChange={handleChange}
              />
            </div>
            <div className="flex flex-col gap-2">
              <span className="text-black">Subject</span>
              <input
                className="bg-transparent border-b focus:outline-none focus:border-gray-600 text-black p-2"
                type="text"
                name="subject"
                value={formData.subject}
                onChange={handleChange}
              />
            </div>
          </div>

          <div className="flex flex-col gap-2">
            <span className="text-black">Message</span>
            <textarea
              className="h-24 bg-transparent border-b focus:outline-none focus:border-gray-600 text-black p-2"
              type="text"
              name="message"
              value={formData.message}
              onChange={handleChange}
            />
          </div>

          <div className="flex flex-col gap-2">
            <span className="text-black">Upload Resume</span>
            <input
              className="bg-transparent border-b focus:outline-none focus:border-gray-600 text-black p-2"
              type="file"
              name="resume"
              onChange={handleFileChange}
            />
          </div>

          <div className="flex flex-col gap-2">
            <label className="text-black flex items-start gap-2 ">
              <input
                type="checkbox"
                name="agreement"
                checked={formData.agreement}
                onChange={handleChange}
                style={{ marginTop: 5 }}
              />
              By checking this box you agree to receive recurring messages from
              Pinaka Staffing LLC, Reply STOP to Opt out. Reply HELP for help.
              Message frequency varies. Message and data rates may apply.
              Carriers are not liable for delayed or undelivered messages.
            </label>
          </div>

          <button
            className="bg-black text-white rounded-3xl w-36 py-3 flex justify-center my-4"
            type="submit"
          >
            Submit
          </button>
        </form>
      </div>

      <Footer />
    </div>
  );
};

export default Career;
