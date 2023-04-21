import React from "react";

import Add_ItemEachElementTitle from "./Add_ItemEachElementTitle";

const Add_ItemTitleAndPrice = ({ infoAccount, setInfoAccount }) => {
  const handlePrice = (event) => {
    setInfoAccount({ ...infoAccount, price: event.target.value });
  };

  return (
    <div className="col-span-12 flex flex-col">
      <div className="flex flex-col gap-2">
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
