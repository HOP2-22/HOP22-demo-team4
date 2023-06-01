import { Box } from "@mui/material";
import React, { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { FreeMode, Navigation, Thumbs } from "swiper";

const AccountDetailDesktopImages = ({ data }) => {
  const [allImages, setAllImages] = useState([data.mainImage, ...data.images]);

  const [thumbsSwiper, setThumbsSwiper] = useState(null);

  return (
    <Box className=" bg-black width-full hidden lg:flex flex-col lg:flex-row h-[600px] relative">
      <Swiper
        style={{
          "--swiper-navigation-color": "#fff",
          "--swiper-pagination-color": "#fff",
          width: "80%",
          display: "flex",
          flexDirection: "row",
        }}
        loop={true}
        spaceBetween={10}
        navigation={true}
        thumbs={{ swiper: thumbsSwiper }}
        modules={[FreeMode, Navigation, Thumbs]}
        className="mySwiper2"
      >
        {allImages.map((item, index) => (
          <SwiperSlide key={index}>
            <img
              style={{
                width: "100%",
                height: "100%",
                objectFit: "cover",
                objectPosition: "center",
              }}
              src={item}
              key={index}
              alt="phoneImage"
            />
          </SwiperSlide>
        ))}
      </Swiper>
      <Swiper
        direction="vertical"
        loop={true}
        spaceBetween={10}
        slidesPerView={4}
        freeMode={true}
        watchSlidesProgress={true}
        modules={[FreeMode, Navigation, Thumbs]}
        className="mySwiper"
        style={{
          display: "flex",
          flexDirection: "column",
          width: "20%",
        }}
      >
        {allImages.map((item, index) => (
          <SwiperSlide
            key={index}
            style={{
              display: "flex",
              flexDirection: "column",
            }}
          >
            <img width={1200} height={700} src={item} key={index} />
          </SwiperSlide>
        ))}
      </Swiper>
    </Box>
  );
};

export default AccountDetailDesktopImages;
