import { Plus } from "lucide-react";
import React from "react";
import { toast } from "react-hot-toast";

const AddType = ({ addType, inputValue }) => {
  return (
    <div
      className="py-[10px] w-[70px] flex justify-center rounded-[15px] bg-indigo-400 text-white cursor-pointer"
      onClick={() => {
        if (
          inputValue === "sandBox" ||
          inputValue === "BR" ||
          inputValue === "MOBA" ||
          inputValue === "sports" ||
          inputValue === "CG" ||
          inputValue === "AA" ||
          inputValue === "strategy" ||
          inputValue === "fps" ||
          inputValue === "rpg"
        ) {
          addType(inputValue);
        } else {
          toast.error("Төрөл өө зөв оруулна уу");
        }
      }}
    >
      <Plus />
    </div>
  );
};

export default AddType;
