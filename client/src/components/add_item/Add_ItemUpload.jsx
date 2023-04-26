import React from "react";

import { Plus } from "lucide-react";

const Add_ItemUpload = ({ handlePhotoUpload }) => {
  return (
    <div className="relative w-[100px] h-[100px] rounded-[12px] bg-[#cbd5e1] object-cover object-center flex justify-center items-center">
      <input
        type="file"
        className="absolute top-0 left-0 w-full h-[100px] bg-transparent z-40 opacity-0"
        multiple
        onChange={handlePhotoUpload}
      />
      <Plus size={38} color="black" />
    </div>
  );
};

export default Add_ItemUpload;
