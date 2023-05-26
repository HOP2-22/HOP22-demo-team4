import React from "react";
import { toast } from "react-hot-toast";

import Add_ItemEachElementTitle from "./Add_ItemEachElementTitle";

import { X } from "lucide-react";

const Add_ItemDescription = ({ descs, setDescs }) => {
  const descChangeHandler = (event, index, key) => {
    setDescs((prev) =>
      prev.map((d, i) => (i == index ? { ...d, [key]: event.target.value } : d))
    );
  };

  const removeItem = (index) => {
    let newArray = [];
    newArray = descs.filter((item, indexOfFilter) => indexOfFilter !== index);

    setDescs(newArray);
  };

  return (
    <div className="col-span-12">
      <Add_ItemEachElementTitle className={"pb-5"}>
        Зарын дэлгэрэнгүй тайлбар:
      </Add_ItemEachElementTitle>
      <div className="flex flex-col gap-4">
        {descs.map(({ title, desc }, index) => {
          return (
            <div className="grow h-full flex gap-3 sm:gap-5" key={index}>
              <p className="text-[18px] font-medium mt-1 sm:mt-0">
                {index + 1}.
              </p>
              <div className="flex flex-col sm:flex-row w-full gap-4">
                <div className="w-full sm:w-[30%]">
                  <p className="mb-1">Гарчиг:</p>
                  <input
                    type="text"
                    className="w-full px-2 py-[6px] focus:outline-[#44BAF0] rounded-[10px]"
                    value={title}
                    onChange={(event) => {
                      descChangeHandler(event, index, "title");
                    }}
                  />
                </div>
                <div className="w-full sm:w-[70%]">
                  <p className="mb-1">Дэлгэрэнгүй:</p>
                  <input
                    type="text"
                    className="w-full px-2 py-[6px] focus:outline-[#44BAF0] rounded-[10px]"
                    value={desc}
                    onChange={(event) => {
                      descChangeHandler(event, index, "desc");
                    }}
                  />
                </div>
              </div>
              <div className="w-auto h-[48px] flex items-end rounded-full">
                <X
                  className="w-[24px] h-[24px] cursor-pointer"
                  onClick={() => {
                    removeItem(index);
                  }}
                  color="#027ffe"
                />
              </div>
            </div>
          );
        })}
        <div className="w-full flex justify-end mt-4">
          <button
            className="px-4 py-[10px] flex justify-center items-center bg-[#44BAF0] transition hover:bg-[#027ffe] text-white rounded-[8px] leading-[14px] cursor-pointer"
            onClick={() => {
              if (
                descs.slice(-1)[0].title !== "" &&
                descs.slice(-1)[0].desc !== ""
              ) {
                setDescs((prevArr) => [...prevArr, { title: "", desc: "" }]);
              } else {
                toast.error("Сүүлийн дэлэгрэнгүй хоосон байна.");
              }
            }}
          >
            Дэлгэрэнгүй нэмэх
          </button>
        </div>
      </div>
    </div>
  );
};

export default Add_ItemDescription;
