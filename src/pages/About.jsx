import React from "react";
import "./About.css";
import logo from "./img.jpg";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { Link } from "react-router-dom";
const about = () => {
  return (
    <div className="main w-full">
      <Navbar />

      <section className="main-1">
        <h1>About Us</h1>
      </section>
      <section className="main-2">
        <div className="main-2-para">
          <p>
            "Pinaka specializes in staffing small businesses in the federal
            sector. As Founder and CEO, I started Falcon because there was a
            need for better pricing, customizable contracts and flexible payment
            terms for small federal contractors. Most importantly, small
            businesses needed the same service and attention provided to the
            large well-known government contractors. Pinaka takes special pride
            in helping Service Disabled Veteran Owned Businesses (SDVOSB’s),
            Women-Owned Small Businesses (WOSB’s), Minority Owned and many
            more."
            <br />
            <span style={{ color: "red" }}>
              —Brandon Shepherdson CEO & Founder, Pinaka & Staffing Solutions
            </span>
            <br />
            Seeking qualified candidates can be time-consuming. We understand
            our clients needs which is why we ask the important questions and
            let our database filter out qualified candidates for your needs.
            Qualified candidates still require additional screening, we make
            sure they have the certifications and clearances needed to meet the
            job requirements.Since 2013 this process has been repeated thousands
            of times for top federal government agencies. We deliver results
            within 72 hours. For more information about government agencies we
            service, see below
            <br />
            <br />
            NEED STAFFING ASSISTANCE?
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
            <h2>
              Pinaka & Staffing Solutions, Pinaka assists businesses with
              temporary and direct hire staffing in the Public and Private
              Sectors. Falcon provides contingent recruiting services to
              government contractors across the United States, with a special
              focus on helping small business grow by offering affordable hiring
              solutions.
            </h2>
          </div>
          <div className="last-container-p">
            <p>
              Pinaka & Staffing Solutions and Falcon offer staffing solutions
              tailored to the needs of businesses in both the Public and Private
              Sectors. Pinaka specializes in temporary and direct hire staffing,
              catering to a diverse range of industries. Meanwhile, Falcon
              focuses on providing contingent recruiting services to government
              contractors nationwide.
            </p>
          </div>
          <div className="core-values">
            <h2>Core Values</h2>
          </div>
          <div className="box-container">
            <div className="box">
              <div className="box-head">
                <div className="bar"></div>
                <h3>Small Business Services</h3>
              </div>
              <div className="box-desc">
                <p>
                  Falcon offers affordable hiring solutions and customizable
                  contracts and payment terms.
                </p>
              </div>
            </div>
            <div className="box">
              <div className="box-head">
                <div className="bar"></div>
                <h3>Contingent Recruiting</h3>
              </div>
              <div className="box-desc">
                <p>
                  These services include pricing, incumbent capture, key
                  personnel resumes and contingent offer letters.
                </p>
              </div>
            </div>
            <div className="box">
              <div className="box-head">
                <div className="bar"></div>
                <h3>Cleared Talent Recruiting</h3>
              </div>
              <div className="box-desc">
                <p>
                  Top Secret, Interim Secret, Secret, Top Secret/SCI, Top
                  Secret/SCI with CI Poly, Top Secret/SCI with Lifestyle Poly.
                </p>
              </div>
            </div>
            <div className="box">
              <div className="box-head">
                <div className="bar"></div>
                <h3>Military Veteran Recruiting</h3>
              </div>
              <div className="box-desc">
                <p>
                  Help military veterans assimilate into the workforce, help
                  businesses meet their military veterans hiring goals.
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
