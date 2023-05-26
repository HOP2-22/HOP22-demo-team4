import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { FreeMode, Pagination } from "swiper";
import "swiper/css";
import "swiper/css/pagination";

const AccountImages = ({ data }) => {
  const images = [data?.mainImage, ...data?.images];

  return (
    <Swiper
      slidesPerView={3}
      spaceBetween={30}
      freeMode={true}
      pagination={{
        clickable: true,
      }}
      modules={[FreeMode, Pagination]}
      className="mySwiper"
      style={{
        height: "auto",
      }}
    >
      {images.map((item, index) => (
        <SwiperSlide
          key={index}
          style={{ objectFit: "cover", objectPosition: "center" }}
        >
          <img
            style={{
              width: "800px",
              height: "260px",
              objectFit: "cover",
              objectPosition: "center",
            }}
            src={item}
            key={index}
          />
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default AccountImages;
