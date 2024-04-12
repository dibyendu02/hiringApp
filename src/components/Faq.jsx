import React, { useState } from "react";

const FAQ = ({ question, answer }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleAccordion = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="border-b border-gray-300 ">
      <div
        className="flex items-center justify-between px-4 py-3 cursor-pointer"
        onClick={toggleAccordion}
      >
        <h3 className="text-md text-black font-semibold">{question}</h3>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className={`h-6 w-6 transition-transform transform text-black ${
            isOpen ? "rotate-180" : ""
          }`}
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M19 9l-7 7-7-7"
          />
        </svg>
      </div>
      {isOpen && (
        <div className="border-t border-black px-4 py-2">
          <p className="text-sm text-black">{answer}</p>
        </div>
      )}
    </div>
  );
};

export default FAQ;
