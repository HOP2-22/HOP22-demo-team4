import { Minus } from "lucide-react";
import React from "react";

const AdminAccountDesc = ({ desc, setAccount, index }) => {
  const handleTitle = (event) => {
    setAccount((prev) => {
      let newDescs = prev.descriptions;

      newDescs[index].title = event.target.value;

      return { ...prev, descriptions: newDescs };
    });
  };

  const handleDesc = (event) => {
    setAccount((prev) => {
      let newDescs = prev.descriptions;

      newDescs[index].desc = event.target.value;

      return { ...prev, descriptions: newDescs };
    });
  };

  return (
    <div className="w-full py-4 flex">
      <div className="flex gap-5 w-2/5">
        <p className="text-[18px] font-bold">{index + 1}.</p>
        <input
          type="text"
          className="w-4/5 border border-indigo-400 py-2 pl-5 pr-3 rounded-[10px] focus:outline-none font-medium text-[18px]"
          onChange={handleTitle}
          value={desc.title}
        />
      </div>

      <div className="w-[55%] pl-4 pr-14">
        <input
          type="text"
          className="w-full border border-indigo-400 py-2 pl-5 pr-3 rounded-[10px] focus:outline-none font-medium text-[18px]"
          onChange={handleDesc}
          value={desc.desc}
        />
      </div>
      <div className="w-[5%] h-full flex justify-center items-center">
        <div
          className="p-1 rounded-full bg-rose-500 cursor-pointer"
          onClick={() => {
            setAccount((prev) => {
              let newDescs = prev.descriptions.filter(
                (_, ind) => ind !== index
              );

              return { ...prev, descriptions: newDescs };
            });
          }}
        >
          <Minus size={30} color="white" />
        </div>
      </div>
    </div>
  );
};

export default AdminAccountDesc;
