import React from "react";
import Navbar from "../components/Navbar";
import "./Services.css";
import Footer from "../components/Footer";
import { Link } from "react-router-dom";
const Services = () => {
  return (
    <div>
      <Navbar />
      <div className="service-container">
        <section className="service-header">
          <h2>Areas of Expertise</h2>
        </section>
        <section className="grid-container">
          <div className="grid-item">
            <div className="grid-item-header">
              <div className="grid-item-header-bar"></div>
              <h2>APPLICATIONS DEVELOPMENT & INTEGRATION</h2>
            </div>
            <div className="grid-item-list">
              <ul>
                <li>ERP (Oracle, SAP, Sarbanes Oxley PeopleSoft)</li>
                <li>Configuration and Release Management</li>
                <li>C, C++, C# .NET, ASP, Visual Basic</li>
                <li>Data Modeling and Simulation</li>
                <li>Java, J2EE, JavaScript</li>
                <li>Database Design, Development and Implementation</li>
                <li>HTML, SGML, CSS</li>
                <li>Enterprise Architecture and Planning</li>
                <li>Applications Development</li>
                <li>Quality Assurance/Software Testing</li>
                <li>Architecture/System Analysis</li>
                <li>Risk Mitigation & Management</li>
                <li>Client/Server Web Design and Development</li>
              </ul>
            </div>
          </div>
          <div className="grid-item">
            <div className="grid-item-header">
              <div className="grid-item-header-bar"></div>
              <h2>NETWORK ENGINEERING AND OPERATIONS</h2>
            </div>
            <div className="grid-item-list">
              <ul>
                <li>Computer Network Defense and Exploitation</li>
                <li>Network Architecture, Design, and Assessment</li>
                <li>Disaster Recovery Operations and Maintenance</li>
                <li>Network Systems Installation</li>
                <li>Domain Name System Server Support</li>
                <li>Network Switch, Router, and Hub Configuration</li>
                <li>Enterprise Network Integration Management</li>
                <li>Network Administration and Operations</li>
                <li>Telephony and Wireless Technology</li>
                <li>Voice Over Internet Protocol Operations</li>
              </ul>
            </div>
          </div>
          <div className="grid-item">
            <div className="grid-item-header">
              <div className="grid-item-header-bar"></div>
              <h2>SYSTEM AND DATABASE ADMINISTRATION</h2>
            </div>
            <div className="grid-item-list">
              <ul>
                <li>Database Administration and Management</li>
                <li>System and Database Account Management</li>
                <li>Data Warehouse Operations and Management</li>
                <li>System and Database Configuration Management</li>
                <li>Enterprise Architecture System Administration</li>
                <li>Windows NT and Active Directory Service Administration</li>
                <li>Operations and Maintenance Microsoft Exchange</li>
                <li>UNIX (Solaris, AIX), Linux, and Microsoft Systems</li>
                <li>Record and Information Management Administration</li>
              </ul>
            </div>
          </div>
          <div className="grid-item">
            <div className="grid-item-header">
              <div className="grid-item-header-bar"></div>
              <h2>CYBER SECURITY & INFORMATION ASSURANCE</h2>
            </div>
            <div className="grid-item-list">
              <ul>
                <li>Administration and Support for LANs, WANs, SANS</li>
                <li>Intrusion Detection, Penetration, and Boundary Testing</li>
                <li>Computer and Network Forensics</li>
                <li>National Institute of Standards and Technology Policy</li>
                <li>Cyber Risk and Strategic Analysis Processes</li>
                <li>Cyber Security Assessment and Management Tools</li>
                <li>Network Security Incident Response Operations</li>
                <li>DOD Information Assurance Certification and Reporting</li>
                <li>Network Infrastructure Operations and Maintenance</li>
                <li>Federal Information Security Management Act</li>
                <li>
                  Network Security Architecture and Vulnerability Assessment
                </li>
                <li>Network Security Planning</li>
              </ul>
            </div>
          </div>
          <div className="grid-item">
            <div className="grid-item-header">
              <div className="grid-item-header-bar"></div>
              <h2>PROJECT/ PROGRAM MANAGEMENT SERVICES</h2>
            </div>
            <div className="grid-item-list">
              <ul>
                <li>Business Systems Analysis</li>
                <li>Process Improvement/Six Sigma</li>
                <li>Configuration Management</li>
                <li>Project/Program Managers</li>
                <li>Contract Management Support</li>
                <li>Proposal Coordination and Management</li>
                <li>Cost and Budget Analysis</li>
                <li>Quality Assurance</li>
                <li>Earned Value Management</li>
                <li>Strategic and Capacity Planning</li>
                <li>Master Planning and Scheduling</li>
                <li>Strength, Weakness, Opportunity, and Threat Analysis</li>
                <li>Metrics: Measurement and Analysis</li>
                <li>Technical Trainers</li>
                <li>Probabilistic Risk Assessment and Management</li>
                <li>Technical Writers</li>
              </ul>
            </div>
          </div>
          <div className="grid-item">
            <div className="grid-item-header">
              <div className="grid-item-header-bar"></div>
              <h2>HEALTHCARE IT</h2>
            </div>
            <div className="grid-item-list">
              <ul>
                <li>Clinical Informatics</li>
                <li>Clinical Application Analysts</li>
                <li>ICD-10 Project Manager</li>
                <li>ICD-10 Testing Coordinators/Coders</li>
                <li>HL7/ Interface Analyst/Developer</li>
                <li>Meaningful Use Business Analyst</li>
                <li>Clinical Applications Trainers</li>
              </ul>
            </div>
          </div>
        </section>
        <section className="grid-container-2">
          <div className="grid-item">
            <div className="grid-item-header">
              <div className="grid-item-header-bar"></div>
              <h2>FINANCE & ACCOUNTING</h2>
            </div>
            <div className="grid-item-list">
              <ul>
                <li>Accounting Manager</li>
                <li>Accounts Payable Clerk</li>
                <li>Assistant Controller</li>
                <li>Budget Analyst</li>
                <li>Billing Clerk/Manager</li>
                <li>Controller</li>
                <li>Cost Accountant</li>
                <li>Credit and Collections Clerk/Manager</li>
                <li>Financial Analyst</li>
                <li>Internal Auditor</li>
              </ul>
            </div>
          </div>
          <div className="grid-item">
            <div className="grid-item-header">
              <div className="grid-item-header-bar"></div>
              <h2>EXECUTIVE SEARCH</h2>
            </div>
            <div className="grid-item-list">
              <ul>
                <li>CEO</li>
                <li>COO</li>
                <li>CFO</li>
                <li>Vice President</li>
                <li>Treasurer</li>
                <li>Director</li>
              </ul>
            </div>
          </div>
        </section>
        <section className="grid-container-3">
          <div className="grid-container-3-desc">
            <h2>
              We provide candidates on a Nationwide scale, now billing in 42 of
              the 50 states. We invest in taking the time to meet and maintain
              relationships across country as well as invest the time in
              learning the nuances for local markets.
            </h2>
          </div>
          <div className="flex justify-center py-4">
            <Link
              to="/contact"
              className="rounded-[40px] bg-blue-800 hover:bg-blue-300 text-white hover:text-black font-normal hover:bottom-0 px-5 py-3"
            >
              FIND TALENT
            </Link>
          </div>
        </section>
      </div>
      <Footer />
    </div>
  );
};

export default Services;
