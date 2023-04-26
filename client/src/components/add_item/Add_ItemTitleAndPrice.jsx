import React from "react";

import Add_ItemEachElementTitle from "./Add_ItemEachElementTitle";

const Add_ItemTitleAndPrice = ({ infoAccount, setInfoAccount }) => {
  const handleTitle = (event) => {
    setInfoAccount({ ...infoAccount, title: event.target.value });
  };

  const handlePrice = (event) => {
    setInfoAccount({ ...infoAccount, price: event.target.value });
  };

  return (
    <div className="w-full col-span-12 grid sm:grid-cols-2 gap-5">
      <div className="w-full flex flex-col">
        <Add_ItemEachElementTitle>Гарчиг:</Add_ItemEachElementTitle>
        <input
          type="text"
          className="w-full py-[6px] px-3 border border-black/50 rounded-[7px] focus:outline-[#44BAF0]"
          onChange={handleTitle}
        />
      </div>
      <div className="w-full flex flex-col">
        <Add_ItemEachElementTitle>Үнэ:</Add_ItemEachElementTitle>
        <input
          type="number"
          className="w-full py-[6px] px-3 border border-black/50 rounded-[7px] focus:outline-[#44BAF0]"
          onChange={handlePrice}
        />
      </div>
    </div>
  );
};

export default Add_ItemTitleAndPrice;
