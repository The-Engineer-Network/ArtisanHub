import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination } from "swiper/modules";

const PortfolioCarousel = () => {
  const works = [
    "/src/assets/work1.jpg",
    "/src/assets/work2.jpg",
    "/src/assets/work3.jpg",
  ];

  return (
    <div className="bg-white rounded-2xl shadow-md p-6">
      <h2 className="text-xl font-semibold mb-4 text-gray-800">My Works</h2>

      <Swiper
        pagination={{ clickable: true }}
        spaceBetween={20}
        slidesPerView={1}
        modules={[Pagination]}
        className="rounded-lg overflow-hidden"
      >
        {works.map((img, index) => (
          <SwiperSlide key={index}>
            <img
              src={img}
              alt={`Work ${index + 1}`}
              className="w-full h-72 object-cover rounded-lg"
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default PortfolioCarousel;
