import React, { useState } from "react";
import { Box } from "@mui/material";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { FreeMode, Navigation, Thumbs } from "swiper";

const AccountDetailPhoneImages = ({ data }) => {
  const [allImages, setAllImages] = useState([data.mainImage, ...data.images]);

  const [thumbsSwiper, setThumbsSwiper] = useState(null);

  return (
    <Box sx={styles.imgContainer} className="block lg:hidden">
      <Swiper
        style={{
          "--swiper-navigation-color": "#fff",
          "--swiper-pagination-color": "#fff",
          width: "100%",
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
            <img style={styles.phoneImage} src={item} key={index} />
          </SwiperSlide>
        ))}
      </Swiper>
      <Swiper
        loop={true}
        spaceBetween={10}
        slidesPerView={4}
        freeMode={true}
        watchSlidesProgress={true}
        modules={[FreeMode, Navigation, Thumbs]}
        className="mySwiper"
      >
        {allImages.map((item, index) => (
          <SwiperSlide key={index}>
            <Image width={1200} height={500} src={item} key={index} alt="" />
          </SwiperSlide>
        ))}
      </Swiper>
    </Box>
  );
};

export default AccountDetailPhoneImages;

const styles = {
  phoneImage: {
    height: {
      xl: "300px",
      lg: "300px",
      md: "100%",
      xs: "100%",
    },
    objectFit: "cover",
    objectPosition: "center",
  },
  imgContainer: {
    backgroundColor: "black",
    width: "100%",
    height: "100%",
  },
};
