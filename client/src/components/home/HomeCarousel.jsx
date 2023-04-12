import React, { useState, useEffect } from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";

const imageData = [
  {
    label: "Image 1",
    alt: "image1",
    url:
      "https://res.cloudinary.com/dymjjmeyc/image/upload/v1681123414/nba-2k22-arcade-edition_pvp1jf.jpg"
    },
  {
    label: "Image 2",
    alt: "image2",
    url:
      "https://res.cloudinary.com/dymjjmeyc/image/upload/v1681123086/rdZaYt_rm1qsm.jpg"
  },
  {
    label: "Image 3",
    alt: "image3",
    url: "https://res.cloudinary.com/dymjjmeyc/image/upload/v1681122938/elden-ring-shadow-of-the-erdtree_bW5pbmaUmZqaraWkpJRmbmdlrWZlbWU_ydzuzv.jpg"
  },
  {
    label: "Image 4",
    alt: "image4",
    url:
      "https://res.cloudinary.com/dymjjmeyc/image/upload/v1681122480/MV5BMzI3ZjY0ZGMtMTFhOC00MDBmLTgzNjEtOTA4NTQzYzFiNmM3XkEyXkFqcGdeQXVyNTk5Nzg0MDE_._V1__kvuzzh.jpg"
  },
  {
    label: "Image 5",
    alt: "image5",
    url:
      "https://res.cloudinary.com/dymjjmeyc/image/upload/v1680949311/5538374_f9hv6h.jpg"
  },
  {
    label: "Image 6",
    alt: "image6",
    url:
      "https://res.cloudinary.com/dymjjmeyc/image/upload/v1681180261/hyperscape---season-2--1920x1080-1920x1080-484b31ca5ebc_vayv3c.png"
  },
];

const renderSlides = imageData.map((image) => (
  <div key={image.alt}>
  <img src={image.url} alt={image.alt} />
  </div>
));

export const HomeCarousel = () => {
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

export default HomeCarousel