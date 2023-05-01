import Image from "next/image";
import React from "react";

const Add_ItemImage = ({ link }) => {
  return (
    <div className="w-[100px] h-[100px] rounded-[12px] object-cover object-center">
      <Image
        src={link}
        draggable="false"
        alt="mainImage"
        width={100}
        height={100}
        className="w-full h-full object-cover object-center"
      />
    </div>
  );
};

export default Add_ItemImage;
