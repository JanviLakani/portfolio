import React from "react";
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import { Navigation, Pagination } from 'swiper/modules';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import "./projectSlice.css"

function ProjectimagesSwiper(props) {
       const images = [
    "/public/img/Astrology.jpeg",
    "/public/img/travelling.jpeg",
    "/public/img/project3.jpg",
    "/public/img/business_woman.jpeg",
    "/public/img/office_girl.jpg",
  ];
    return (
         <>
      <Swiper
        slidesPerView={1}
        spaceBetween={10}
         navigation={true}
        speed={2500}
        
        breakpoints={{
          640: {
            slidesPerView: 2,
            spaceBetween: 20,
          },
          768: {
            slidesPerView: 2,
            spaceBetween: 40,
          },
          1024: {
            slidesPerView: 4,
            spaceBetween: 50,
          },
        }}
        modules={[ Navigation]}
        className="proSwiper"
      >
        <SwiperSlide>Slide 1 janvi lakani</SwiperSlide>
        <SwiperSlide>Slide 2</SwiperSlide>
        <SwiperSlide>Slide 3</SwiperSlide>
        <SwiperSlide>Slide 4</SwiperSlide>
        <SwiperSlide>Slide 5</SwiperSlide>
        <SwiperSlide>Slide 6</SwiperSlide>
        <SwiperSlide>Slide 7</SwiperSlide>
        <SwiperSlide>Slide 8</SwiperSlide>
        <SwiperSlide>Slide 9</SwiperSlide>
      </Swiper>
    </>
    );
}

export default ProjectimagesSwiper;