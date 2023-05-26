import React from "react";

const Add_ItemImage = ({ link }) => {
  return (
    <img
      src={link}
      draggable="false"
      alt="mainImage"
      className="w-full h-full object-cover object-center"
    />
  );
};

export default Add_ItemImage;
