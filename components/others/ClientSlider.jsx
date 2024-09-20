"use client";

import { clients } from "@/data/brands";
import Image from "next/image";
import { Autoplay } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

export default function ClientSlider() {
  return (
    <Swiper
      spaceBetween={10} // Add some space between slides
      slidesPerView={6}
      breakpoints={{
        1199: {
          slidesPerView: 6,
        },
        768: {
          slidesPerView: 4,
        },
        0: {
          slidesPerView: 2,
        },
      }}
      loop={false} // Ensure loop is disabled to prevent duplication
      watchSlidesProgress
      modules={[Autoplay]}
      autoplay={{ delay: 3000, disableOnInteraction: false }} // Add autoplay delay
      resizeObserver
      className="small-item-carousel"
    >
      {clients.map((client) => (
        <SwiperSlide key={client.id}>
          <div className="logo-item">
            <Image
              src={client.imgSrc}
              width="150"
              height="90"
              alt={client.name}
              className="image-filter"
            />
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  );
}
