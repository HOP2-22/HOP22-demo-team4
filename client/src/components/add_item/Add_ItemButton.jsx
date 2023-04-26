import React from "react";

const Add_ItemButton = ({ func }) => {
  return (
    <div className="col-span-12 flex justify-center" onClick={() => func()}>
      <p className="px-4 py-[10px] flex justify-center items-center bg-[#44BAF0] transition hover:bg-[#027ffe] text-white rounded-[8px] leading-[14px] cursor-pointer">
        Зар үүсгэх
      </p>
    </div>
  );
};

export default Add_ItemButton;
