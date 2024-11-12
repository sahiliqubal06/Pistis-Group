import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { Pagination, Navigation, Autoplay } from 'swiper/modules';

const Banner= () => {
  const images = [
    '/images/banner1.jpg',
    '/images/banner2.jpg',
    '/images/banner3.jpg',
    // Add more images as needed
  ];

  return (
    <div className="w-full h-[500px] bg-gray-100 over overflow-hidden">
      <Swiper
        pagination={{ clickable: true }}
        navigation={true}
        modules={[Pagination, Navigation, Autoplay]}
        loop={true}
        autoplay={{delay:3000, disableOnInteraction:false}}
        className="w-full h-full"
      >
        {images.map((src, index) => (
          <SwiperSlide key={index} className="flex items-center justify-center">
            <img
              src={src}
              alt={`Slide ${index + 1}`}
              className="w-full h-full object-cover"
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default Banner;
