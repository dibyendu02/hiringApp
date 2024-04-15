import React, { useRef } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation"; // Import navigation styles

import "./carousel.css";

// import required modules
import { Pagination, Navigation } from "swiper/modules";

import slide1 from "../assets/slides/slide1.png";
import slide2 from "../assets/slides/slide2.png";
import slide3 from "../assets/slides/slide3.png";
import slide4 from "../assets/slides/slide4.png";
import slide5 from "../assets/slides/slide5.png";
import slide6 from "../assets/slides/slide6.png";

const CardCarousel = () => {
  // Create a ref for Swiper instance
  const swiperRef = useRef(null);

  // Function to navigate to the previous slide
  const navigatePrev = () => {
    if (swiperRef.current) {
      swiperRef.current.slidePrev();
    }
  };

  // Function to navigate to the next slide
  const navigateNext = () => {
    if (swiperRef.current) {
      swiperRef.current.slideNext();
    }
  };

  return (
    <div className="w-full flex items-center h-full bg-black relative">
      <div className="swiper-button-prev" onClick={navigatePrev}></div>
      <div className="swiper-button-next" onClick={navigateNext}></div>
      <Swiper
        slidesPerView={1}
        spaceBetween={30}
        loop={true}
        // navigation={true} // Enable navigation buttons
        navigation={{
          prevEl: ".swiper-button-prev",
          nextEl: ".swiper-button-next",
        }} // Enable navigation buttons
        modules={[Navigation]} // Include Navigation module
        className="mySwiper"
        ref={swiperRef} // Assign the ref to the Swiper instance
        breakpoints={{
          // When window width is <= 640px (mobile), set slidesPerView to 1
          640: {
            slidesPerView: 1,
          },
          // When window width is > 640px (larger screens), set slidesPerView back to 4
          1024: {
            slidesPerView: 4,
          },
        }}
      >
        <SwiperSlide>
          <img src={slide1} />
          <p>Cyber Security and Information Assurance</p>
        </SwiperSlide>
        <SwiperSlide>
          <img src={slide2} />
          <p>Personal Attention</p>
        </SwiperSlide>
        <SwiperSlide>
          <img src={slide3} />
          <p>Precise Decision Making</p>
        </SwiperSlide>
        <SwiperSlide>
          <img src={slide4} />
          <p>Industry Connections</p>
        </SwiperSlide>
        <SwiperSlide>
          <img src={slide5} />
          <p>Network Engineering and Operations</p>
        </SwiperSlide>
        <SwiperSlide>
          <img src={slide6} />
          <p>System and Database Administration</p>
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default CardCarousel;
