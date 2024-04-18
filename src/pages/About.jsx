import React, { useEffect } from "react";
import "./About.css";
import logo from "./img.jpg";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { Link } from "react-router-dom";
import AOS from "aos";
import "aos/dist/aos.css";
const about = () => {
  useEffect(() => {
    AOS.init({ duration: 2000 });
  }, []);
  return (
    <div className="main w-full">
      <Navbar />

      <section className="main-1">
        <h1 data-aos="fade-right">About Us</h1>
      </section>
      <section className="main-2">
        <div className="main-2-para">
          <h1 className="text-3xl my-10 font-semibold">
            Driving success through expert IT Consultation & Product Development
          </h1>
          <p className="text-xl">
            " Pinaka specializes is a pioneer in IT consultancy, dedicated to
            shaping a future where technology empowers businesses. Our journey,
            marked by innovation and resilience, encompasses global expansion,
            strategic partnerships, and accolades in the ever-evolving digital
            era. Adaptable and forward-thinking, we navigate challenges with
            agility, leveraging cutting-edge technologies for success."
            <br />
          </p>
          <h1 className="text-3xl my-10 font-semibold">Mission</h1>
          <p className="text-xl">
            " At Pinaka Staffing, our mission is clear: to empower businesses
            with innovative, technology-driven solutions tailored for success in
            the digital era. "
            <br />
          </p>
          <h1 className="text-3xl my-10 font-semibold">Vision</h1>
          <p className="text-xl">
            " We envision a future where Pinaka Staffing serves as the catalyst
            for transformative technological advancements, fostering an
            environment where businesses thrive through cutting-edge solutions.
            "
            <br />
          </p>

          <div className="btn-container">
            <Link to="/contact" className="text-white">
              LEARN MORE
            </Link>
          </div>
        </div>
        <div className="img-container">
          <img src={logo} alt="" />
        </div>
      </section>
      <section className="main-3">
        <div className="last-container">
          <div className="overview">
            <h2>Overview</h2>
          </div>
          <div className="last-container-h2">
            <h2 data-aos="fade-right">
              Empowering success through customer-centricity
            </h2>
          </div>
          <div className="last-container-p">
            <p data-aos="fade-right">
              At Pinaka Staffing, we’re dedicated to your success. With a
              customer-first approach ingrained in our culture, we prioritize
              understanding your needs and delivering tailored solutions. Trust
              us to put you first every step of the way.
            </p>
          </div>
          <div className="core-values">
            <h2>Core Values</h2>
          </div>
          <div className="box-container">
            <div className="box">
              <div className="box-head relative">
                {/* <div className="bar"></div> */}
                <div className="bg-blue-600 absolute w-2 h-16 -left-3 top-0 rounded-md "></div>
                <h3 data-aos="fade-right">Innovation</h3>
              </div>
              <div className="box-desc">
                <p data-aos="fade-right">
                  We are driven by a relentless pursuit of innovation,
                  constantly exploring emerging technologies and pushing the
                  boundaries of what’s possible. Our innovative mindset enables
                  us to anticipate industry trends, adapt to change.
                </p>
              </div>
            </div>
            <div className="box">
              <div className="box-head relative">
                {/* <div className="bar"></div> */}
                <div className="bg-blue-600 absolute w-2 h-16 -left-3 top-0 rounded-md "></div>
                <h3 data-aos="fade-right">Collaboration</h3>
              </div>
              <div className="box-desc">
                <p data-aos="fade-right">
                  Collaboration lies at the heart of everything we do. We
                  believe in the power of teamwork and synergy, fostering an
                  environment where diverse perspectives are valued, and ideas
                  are shared freely. By collaborating closely with our clients,
                  partners, and internal teams.
                </p>
              </div>
            </div>
            <div className="box">
              <div className="box-head relative">
                {/* <div className="bar"></div> */}
                <div className="bg-blue-600 absolute w-2 h-16 -left-3 top-0 rounded-md "></div>
                <h3 data-aos="fade-right">Customer-Centricity</h3>
              </div>
              <div className="box-desc">
                <p data-aos="fade-right">
                  Our customers are at the forefront of everything we do. We are
                  committed to understanding their unique needs, challenges, and
                  goals, and to delivering solutions that address these
                  effectively. By placing the customer at the center of our
                  operations.
                </p>
              </div>
            </div>
            <div className="box">
              <div className="box-head relative">
                {/* <div className="bar"></div> */}
                <div className="bg-blue-600 absolute w-2 h-16 -left-3 top-0 rounded-md "></div>
                <h3 data-aos="fade-right">Integrity</h3>
              </div>
              <div className="box-desc">
                <p data-aos="fade-right">
                  Integrity is non-negotiable at Sapot Systems. We conduct
                  ourselves with honesty, transparency, and ethical integrity in
                  all our interactions, both internally and externally. Our
                  commitment to integrity extends to our relationships with
                  clients, partners, employees, and the communities in which we
                  operate, earning us trust and credibility in the industry.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
};

export default about;
