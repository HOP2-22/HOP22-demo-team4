import React, { useState, useEffect } from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";

const imageData = [
  {
    label: "Image 1",
    alt: "image1",
    url:
      "https://1000logos.net/wp-content/uploads/2021/02/Clash-of-Clans-logo.png"
    },
  {
    label: "Image 2",
    alt: "image2",
    url:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/f/fc/Valorant_logo_-_pink_color_version.svg/2560px-Valorant_logo_-_pink_color_version.svg.png"
  },
  {
    label: "Image 3",
    alt: "image3",
    url: "https://www.freeiconspng.com/thumbs/clash-royale-png/clash-royale-picture-images-hd-4.png"
  },
  {
    label: "Image 4",
    alt: "image4",
    url:
      "https://www.freepnglogos.com/uploads/genshin-impact-logo-png/genshin-impact-shadow-logo-by-kurikuo-steamgriddb-4.png"
  },
  {
    label: "Image 5",
    alt: "image5",
    url:
      "https://logos-world.net/wp-content/uploads/2021/02/Grand-Theft-Auto-V-GTA-5-Logo.png"
  },
  {
    label: "Image 6",
    alt: "image6",
    url:
      "https://pngimg.com/d/minecraft_PNG38.png"
  },
];

const renderSlides = imageData.map((image) => (
  <div key={image.alt}>
  <img src={image.url} alt={image.alt} />
  </div>
));

export default function Carouselll() {
  const [currentIndex, setCurrentIndex] = useState();
  function handleChange(index) {``
    setCurrentIndex(index);
  }
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex(currentIndex + 1 < imageData.length ? currentIndex+1 : 1)
    }, 5000);
    return () => clearInterval(interval);
  }, []);
  return (
    <div className="Carousel-app">
      <Carousel
        showThumbs={false}
        showArrows={true}
        autoPlay={true}
        infiniteLoop={true}
        selectedItem={imageData[currentIndex]}
        onChange={handleChange}
        className="carousel-container"
      >
      {renderSlides}
      </Carousel>
    </div>
  );
}