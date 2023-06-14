import React from "react";
import { toast } from "react-hot-toast";

import AllTypes from "./AllTypes";

import { X } from "lucide-react";

const CatDetailTypes = ({ category, setCategory, typeValue, setTypeValue }) => {
  const deleteType = (typeD) => {
    setCategory((prev) => {
      let newTypes = prev.type.filter((type) => type !== typeD);

      return {
        ...prev,
        type: newTypes,
      };
    });
  };

  const addType = () => {
    if (
      typeValue === "sandBox" ||
      typeValue === "BR" ||
      typeValue === "MOBA" ||
      typeValue === "sports" ||
      typeValue === "CG" ||
      typeValue === "AA" ||
      typeValue === "strategy" ||
      typeValue === "fps" ||
      typeValue === "rpg"
    ) {
      if (category?.type?.includes(typeValue)) {
        return toast.error("Төрөл нэмэгдсэн байна");
      }

      setCategory((prev) => {
        {
          let newCats = [...prev.type, typeValue];

          return { ...prev, type: newCats };
        }
      });

      setTypeValue("");
    } else {
      toast.error("Төрөл өө зөв оруулна уу");
    }
  };

  const addTypeKeyDownHandler = (event) => {
    if (event.key === "Enter") {
      if (
        typeValue === "sandBox" ||
        typeValue === "BR" ||
        typeValue === "MOBA" ||
        typeValue === "sports" ||
        typeValue === "CG" ||
        typeValue === "AA" ||
        typeValue === "strategy" ||
        typeValue === "fps" ||
        typeValue === "rpg"
      ) {
        if (category?.type?.includes(typeValue)) {
          return toast.error("Төрөл нэмэгдсэн байна");
        }

        setCategory((prev) => {
          {
            let newCats = [...prev.type, typeValue];

            return { ...prev, type: newCats };
          }
        });

        setTypeValue("");
      } else {
        toast.error("Төрөл өө зөв оруулна уу");
      }
    }
  };

  return (
    <div className="flex flex-col gap-2">
      <AllTypes value={"All types"} />
      <p className="text-indigo-500 text-[28px]">Types:</p>
      <div className="flex flex-wrap items-center gap-8">
        {category?.type?.map((type, index) => (
          <div key={type?.id || index} className="relative w-auto">
            <div className="py-3 px-5 rounded-lg bg-yellow-600 text-white">
              {category?.type[index]}
            </div>
            <div
              className="absolute -top-2 -left-2 py-1 px-1 bg-gray-500 rounded-full cursor-pointer"
              onClick={() => {
                deleteType(type);
              }}
            >
              <X size={18} color="white" />
            </div>
          </div>
        ))}
      </div>
      <div className="flex items-end gap-10 pt-5">
        <input
          type="text"
          value={typeValue}
          onKeyDown={addTypeKeyDownHandler}
          onChange={(event) => setTypeValue(event.target.value)}
          className="border border-indigo-500 rounded px-5 py-[10px] focus:outline-none"
        />
        <button
          onClick={() => addType()}
          className="w-[100px] h-10 rounded-[10px] text-white bg-blue-500 hover:bg-blue-400 transition-colors duration-200 cursor-pointer"
        >
          Add
        </button>
      </div>
    </div>
  );
};

export default CatDetailTypes;
