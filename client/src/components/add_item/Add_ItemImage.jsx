import React from "react";

const Add_ItemImage = ({ link }) => {
  return (
    <div className="w-[100px] h-[100px] rounded-[12px] bg-red-100 object-cover object-center">
      <img src={link} alt="" />
    </div>
  );
};

export default Add_ItemImage;
