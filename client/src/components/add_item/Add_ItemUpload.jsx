import React from "react";

import { Plus } from "lucide-react";

const Add_ItemUpload = ({ handle }) => {
  return (
    <div className="relative w-[100px] h-[100px] rounded-[12px] bg-[#cbd5e1] object-cover object-center flex justify-center items-center cursor-pointer transition hover:bg-[#acb3ba]">
      <input
        type="file"
        className="absolute top-0 left-0 w-full h-[100px] bg-transparent z-40 opacity-0 cursor-pointer"
        onChange={handle}
      />
      <Plus size={38} color="black" />
    </div>
  );
};

export default Add_ItemUpload;
