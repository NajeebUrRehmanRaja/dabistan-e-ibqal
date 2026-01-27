"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, 
    // Pagination, 
    Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
// import "swiper/css/pagination";
import Image from "next/image";

export default function Carousel() {
  return (
    <Swiper
      modules={[Navigation,
        //  Pagination,
         Autoplay]}
      slidesPerView={1}
      spaceBetween={20}
      loop
      autoplay={{ delay: 3000 }}
    //   pagination={{ clickable: true }}
      navigation
      className="w-full h-[400px]"
    >
      <SwiperSlide>
        <Image
          src="/banner_bg.jpg"
          alt="Slide 1"
          fill
          // className="w-full h-full"
        />
      </SwiperSlide>

      <SwiperSlide>
        <Image
          src="/banner_1.jpg"
          alt="Slide 2"
          fill
          // className="w-full h-full"
        />
      </SwiperSlide>
      <SwiperSlide>
        <Image
          src="/banner_2.jpg"
          alt="Slide 2"
          fill
          // className="w-full h-full"
        />
      </SwiperSlide>
      <SwiperSlide>
        <Image
          src="/banner_3.jpg"
          alt="Slide 2"
          fill
          // className="w-full h-full"
        />
      </SwiperSlide>
      <SwiperSlide>
        <Image
          src="/tomb_iqbal.jpg"
          alt="Slide 2"
          fill
          // className="w-full h-full"
        />
      </SwiperSlide>
    </Swiper>
  );
}
