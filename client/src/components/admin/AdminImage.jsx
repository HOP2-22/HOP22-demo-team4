import React from "react";

const AdminImage = ({ link, width, height }) => {
  return (
    <img
      src={link}
      draggable="false"
      alt="mainImage"
      className={`${width} ${height} object-contain object-center`}
    />
  );
};

export default AdminImage;
