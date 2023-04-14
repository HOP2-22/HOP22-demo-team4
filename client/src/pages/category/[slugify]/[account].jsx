import { Box, Typography } from "@mui/material";
import { useRouter } from "next/router";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/navigation";
import "swiper/css/thumbs";
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

  const [thumbsSwiper, setThumbsSwiper] = useState(null);

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
                  <img src="https://swiperjs.com/demos/images/nature-1.jpg" />
                </SwiperSlide>
                <SwiperSlide>
                  <img src="https://swiperjs.com/demos/images/nature-2.jpg" />
                </SwiperSlide>
                <SwiperSlide>
                  <img src="https://swiperjs.com/demos/images/nature-3.jpg" />
                </SwiperSlide>
                <SwiperSlide>
                  <img src="https://swiperjs.com/demos/images/nature-4.jpg" />
                </SwiperSlide>
                <SwiperSlide>
                  <img src="https://swiperjs.com/demos/images/nature-5.jpg" />
                </SwiperSlide>
                <SwiperSlide>
                  <img src="https://swiperjs.com/demos/images/nature-6.jpg" />
                </SwiperSlide>
                <SwiperSlide>
                  <img src="https://swiperjs.com/demos/images/nature-7.jpg" />
                </SwiperSlide>
                <SwiperSlide>
                  <img src="https://swiperjs.com/demos/images/nature-8.jpg" />
                </SwiperSlide>
                <SwiperSlide>
                  <img src="https://swiperjs.com/demos/images/nature-9.jpg" />
                </SwiperSlide>
                <SwiperSlide>
                  <img src="https://swiperjs.com/demos/images/nature-10.jpg" />
                </SwiperSlide>
              </Swiper>
              <Swiper
                onSwiper={setThumbsSwiper}
                loop={true}
                spaceBetween={10}
                slidesPerView={4}
                freeMode={true}
                watchSlidesProgress={true}
                modules={[FreeMode, Navigation, Thumbs]}
                className="mySwiper"
              >
                <SwiperSlide>
                  {/* <img src={allImages} /> */}
                  {/* {  imgs.map((data, index) => {
             return <SwiperSlide onClick={()=> onClickHandler(index)}>
             <img src={data.images}>
             </SwiperSlide>
           })
        } */}
                </SwiperSlide>
              </Swiper>
            </Box>
            <Box sx={styles.descContainer}>
              <Box>
                <Typography>{`${data?.title}`}</Typography>
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
        {/* <Box>
          <img src={allImages}></img>
        </Box>
        <img src={`${data?.mainImage}`} alt="" />
        <Typography>{`${data?.title}`}</Typography>
        <Box pt={12}></Box>
        <button onClick={() => console.log(allImages)}>click</button> */}
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
    display: {
      xl: "flex",
      md: "flex",
      sm: "flex",
    },
  },
  imagesContainer: {
    width: {
      md: "30%",
      sm: "45%",
      xs: "100%",
    },
    backgroundColor: "gray",
    height: "700px",
  },
  descContainer: {
    width: {
      md: "70%",
      sm: "55%",
      xs: "100%",
    },
    backgroundColor: "blue",
    height: "700px",
  },
  //   lg: "",
  // md: "",
  // sm: "",
  // xs: "",
};
