import React, { useState, useEffect } from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";

const imageData = [
  {
    label: "Image 1",
    alt: "image1",
    url: "https://res.cloudinary.com/dymjjmeyc/image/upload/v1681123414/nba-2k22-arcade-edition_pvp1jf.jpg",
  },
  {
    label: "Image 2",
    alt: "image2",
    url: "https://res.cloudinary.com/dymjjmeyc/image/upload/v1681123086/rdZaYt_rm1qsm.jpg",
  },
];

const renderSlides = imageData.map((image) => (
  <img
    src={image.url}
    alt={image.alt}
    className="w-full h-[260px] xsm:h-[305px] sm:h-[370px] md:h-[320px] lg:h-[440px] xl:h-[570px] 2xl:h-[620px] 3xl:h-[700px] object-cover object-center"
  />
));

export const HomeCarousel = () => {
  const [currentIndex, setCurrentIndex] = useState();

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex(
        currentIndex + 1 < imageData.length ? currentIndex + 1 : 1
      );
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="pt-[70px] w-full h-auto">
      <Carousel
        showThumbs={false}
        showArrows={false}
        autoPlay={false}
        infiniteLoop={true}
        selectedItem={imageData[currentIndex]}
      >
        {renderSlides}
      </Carousel>
    </div>
  );
};

export default HomeCarousel;
