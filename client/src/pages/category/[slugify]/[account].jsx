import { Box, Typography } from "@mui/material";
import { useRouter } from "next/router";

import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/navigation";
import "swiper/css/thumbs";

// import required modules
import { FreeMode, Navigation, Thumbs } from "swiper";

import { Container } from "@/components/Container";
import { Layout } from "@/components/layout/Layout";
import { CartTable } from "@/components/cart/CartTable";
import { AuthContext } from "@/provider/AuthContext";
import axios from "axios";
import { useState } from "react";

const CategoryAccount = ({ data }) => {
  console.log(data);
  const [allImages, setAllImages] = useState([data.mainImage, ...data.images]);
  // const [imgs, setImgs] = useState(['img1', 'img2'])
  const [selectedImg, setSelectedImg] = useState(allImages[0]);

  const [thumbsSwiper, setThumbsSwiper] = useState("");

  // const onClickHandler = (index)=> {
  //   setSelectedImg(img[index])
  // }
  const onClickHandler = (index) => {
    setSelectedImg(data.img[index]);
  };

  return (
    <Layout>
      <Container>
        <Box sx={{ paddingTop: "70px" }}>
          <Box sx={styles.mainBox}>
            <Box sx={styles.imagesContainer}>
              {/* <img src={`${data?.mainImage}`} alt="" /> */}
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
                className="mySwiper2"
              >
                <SwiperSlide>
                  {allImages.map((item, index) => {
                    return <img src={item} key={index} />;
                  })}
                </SwiperSlide>
              </Swiper>
              <Swiper
                // onSwiper={setThumbsSwiper}
                loop={true}
                spaceBetween={10}
                slidesPerView={4}
                freeMode={true}
                watchSlidesProgress={true}
                modules={[FreeMode, Navigation, Thumbs]}
                className="mySwiper"
              >
                <SwiperSlide>
                  {allImages.map((item, index) => {
                    return (
                      <img sx={{ width: "100px" }} src={item} key={index} />
                    );
                  })}
                </SwiperSlide>
              </Swiper>
            </Box>
            <Box sx={styles.descContainer} pt={3} pl={2} pr={2}>
              <Box>
                <Typography sx={{ fontSize: "16px" }}>
                  Category / {`${data?.category.name}`}
                </Typography>
              </Box>
              <Box>
                <Typography
                  variant="h4"
                  sx={{
                    fontFamily: "unset",
                  }}
                >{`${data?.title}`}</Typography>
              </Box>
            </Box>
          </Box>
          <Box
            sx={{
              backgroundColor: "yellow",
              height: "100px",
              width: "100%",
            }}
          ></Box>
        </Box>
      </Container>
    </Layout>
  );
};

export default CategoryAccount;

export async function getServerSideProps(context) {
  const id = context.query.account;

  const res = await fetch(`http://localhost:8000/api/v1/account/${id}`);

  const data = await res.json();

  return {
    props: { data: data.data },
  };
}

{
  /* <Box>
  {allImages.map((item, index) => {
    return (
      <img
        src={item}
        key={index}
        style={{
          width: "200px",
        }}
      />
    );
  })}
</Box>; */
}

// import React, { useRef, useState } from "react";
// // Import Swiper React components
// import { Swiper, SwiperSlide } from "swiper/react";

// // Import Swiper styles
// import "swiper/css";
// import "swiper/css/pagination";

// import "./styles.css";

// // import required modules
// import { Pagination } from "swiper";

// export default function App() {
//   const [imgs, setImgs] = useState(['img1', 'img2'])
// const [selectedImg, setSelectedImg] = useState(img[0]);

// const onClickHandler = (index)=> {
//   setSelectedImg(img[index])
// }
//   return (
//     <>
//     <img src={img}>
//       <Swiper
//         slidesPerView={3}
//         spaceBetween={30}
//         pagination={{
//           clickable: true,
//         }}
//         modules={[Pagination]}
//         className="mySwiper"
//       >
//         {
//           imgs.map((img, index) +> {
//             return <SwiperSlide onClick={()=> onClickHandler(index)}>
//             <img src={img}>
//             </SwiperSlide>
//           })
//         }
//       </Swiper>
//     </>
//   );
// }

const styles = {
  mainBox: {
    color: "black",
  },
  imagesContainer: {
    width: {
      xs: "100%",
    },
  },
  descContainer: {
    height: "700px",
    // paddingTop: "100px",
  },
  // title: {

  // }
  //   lg: "",
  // md: "",
  // sm: "",
  // xs: "",
};
