import React from "react";
import {
  Box,
  Typography,
  Stack,
  Paper,
  TableRow,
  TableHead,
  TableContainer,
  Table,
  TableBody,
  TableCell,
} from "@mui/material";
// import { useRouter } from "next/router";
import { useState } from "react";
import { FreeMode, Navigation, Thumbs } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/navigation";
import "swiper/css/thumbs";
import Image from "next/image";

export const Title = ({ title, createdAt }) => {
  return (
    <Box sx={{ marginTop: "40px" }}>
      <Typography
        variant="h4"
        sx={{
          fontFamily: "unset",
        }}
      >{`${title}`}</Typography>
      <Typography
        sx={{
          fontFamily: "unset",
          fontSize: "14px",
        }}
      >{`${createdAt.slice(0, 10)}`}</Typography>
    </Box>
  );
};
export const Images = ({ data }) => {
  const [allImages, setAllImages] = useState([data.mainImage, ...data.images]);
  const [selectedImg, setSelectedImg] = useState(allImages[0]);

  const [thumbsSwiper, setThumbsSwiper] = useState(null);

  return (
    <Box className=" bg-black width-full hidden lg:flex flex-col lg:flex-row h-[600px] relative">
      <Swiper
        style={{
          "--swiper-navigation-color": "#fff",
          "--swiper-pagination-color": "#fff",
          width: "80%",
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
            />
          </SwiperSlide>
        ))}
      </Swiper>
      <Swiper
        // onSwiper={setThumbsSwiper}
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
            <Image width={1200} height={700} src={item} key={index} />
          </SwiperSlide>
        ))}
      </Swiper>
    </Box>
  );
};

export const PhoneImages = ({ data }) => {
  const [allImages, setAllImages] = useState([data.mainImage, ...data.images]);
  const [selectedImg, setSelectedImg] = useState(allImages[0]);

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
        // onSwiper={setThumbsSwiper}
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
            <Image width={1200} height={500} src={item} key={index} />
          </SwiperSlide>
        ))}
      </Swiper>
    </Box>
  );
};

export const Price = ({ price }) => {
  return (
    <Box sx={{ marginTop: "40px" }}>
      <Box>
        <Typography sx={styles.priceTypo}>
          Үнэ:
          <a style={{ color: "#027ffe", marginLeft: "5px" }}>{`${price}`}</a>
        </Typography>
      </Box>
      <Box sx={styles.buttonContainer}>
        <Stack direction="row" spacing={1} justifyContent="space-between">
          <Box sx={styles.shopButton}>Сагсанд хийх</Box>
          <Box sx={styles.buyButton}>Худалдаж авах</Box>
        </Stack>
      </Box>
    </Box>
  );
};

export const SimilarItem = ({ category }) => {
  return (
    <Box sx={{ marginTop: "40px" }}>
      <Typography sx={{ fontSize: "16px" }}>
        Category / {`${category.name}`}
      </Typography>
      <Typography sx={styles.similar}>Төстэй бараанууд:</Typography>
    </Box>
  );
};

export const AccountInfo = ({ data }) => {
  return (
    <Box sx={styles.descContainer}>
      <Box>
        <TableContainer component={Paper}>
          <Table sx={{ minWidth: 650 }} aria-label="caption table">
            <TableHead>
              <TableRow>
                <TableCell sx={styles.tableInfoTitle}>Title:</TableCell>
                <TableCell sx={styles.tableInfoDesc}>Descriptions:</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {data.descriptions.map((desc) => {
                return (
                  <TableRow>
                    <TableCell component="th" scope="row">
                      {desc.title}
                    </TableCell>
                    <TableCell component="th" scope="row">
                      {desc.desc}
                    </TableCell>
                  </TableRow>
                );
              })}
            </TableBody>
          </Table>
        </TableContainer>
      </Box>
    </Box>
  );
};

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
  imagesContainer: {
    backgroundColor: "black",
    width: "100%",
    display: "flex",
    height: "600px",
    position: "relative",
  },
  imgContainer: {
    backgroundColor: "black",
    width: "100%",
    height: "100%",
  },
  descContainer: {
    marginTop: "40px",
  },
  title: {
    fontSize: "24px",
    alignItems: "center",
    display: "flex",
    fontWeight: 800,
  },
  buttonContainer: {
    width: "100%",
    marginTop: "25px",
  },
  shoppingCart: {
    height: "30px",
    width: "49%",
  },
  priceTypo: {
    fontSize: "28px",
    fontWeight: 500,
  },
  buyButton: {
    backgroundColor: "#027ffe",
    borderRadius: "10px",
    width: "49%",
    height: "60px",
    fontFamily: "inherit",
    fontSize: "16px",
    color: "#ffffff",
    fontWeight: 600,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  shopButton: {
    backgroundColor: "#44BAF0",
    borderRadius: "10px",
    width: "49%",
    height: "60px",
    fontFamily: "inherit",
    fontSize: "16px",
    color: "#ffffff",
    fontWeight: 600,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  description: {
    display: "flex",
    alignItems: "center",
  },
  tableInfoTitle: {
    fontSize: "18px",
    fontWeight: "600px",
    width: "30%",
  },
  tableInfoDesc: {
    fontSize: "18px",
    fontWeight: "600px",
    width: "70%",
  },
  similar: {
    fontSize: "24px",
    fontWeight: 400,
  },
};
