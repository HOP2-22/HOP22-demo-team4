import React, { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { FreeMode, Navigation, Thumbs } from "swiper";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

const AccountDetailPhoneImages = ({ data }) => {
  const [allImages, setAllImages] = useState([data.mainImage, ...data.images]);

  const [thumbsSwiper, setThumbsSwiper] = useState(null);

  return (
    <div className="block lg:hidden">
      <Swiper
        style={{
          "--swiper-navigation-color": "#fff",
          "--swiper-pagination-color": "#fff",
        }}
        loop={true}
        spaceBetween={10}
        navigation={true}
        thumbs={{ swiper: thumbsSwiper }}
        modules={[FreeMode, Navigation, Thumbs]}
        className="mySwiper2 w-full overflow-hidden h-[350px]"
      >
        {allImages.map((item, index) => (
          <SwiperSlide key={index}>
            <img
              className="w-full h-full object-contain object-center"
              src={item}
              key={index}
              alt="phoneImage"
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default AccountDetailPhoneImages;
