import React, { useState, useEffect } from "react";

const Carousel = ({ items }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % items.length);
    }, 3000); // Adjust the duration for the carousel rotation

    return () => clearInterval(interval);
  }, [items.length]);

  return (
    <div className="relative overflow-hidden">
      <div className="absolute inset-y-0 left-0 flex">
        {items.map((item, index) => (
          <div
            key={index}
            className={`w-screen transform transition-transform duration-500 ease-in-out ${
              index === currentIndex ? "" : "translate-x-full"
            }`}
          >
            <div className="w-20 h-20 bg-white">{item}</div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Carousel;
