import React from "react";

const AllTypes = ({ value }) => {
  return (
    <div className="flex gap-3 items-center">
      <p className="text-[22px] text-indigo-700">{value}:</p>
      <p className="text-[18px] text-black">sandBox ,</p>
      <p className="text-[18px] text-black">BR ,</p>
      <p className="text-[18px] text-black">MOBA ,</p>
      <p className="text-[18px] text-black">sports ,</p>
      <p className="text-[18px] text-black">CG ,</p>
      <p className="text-[18px] text-black">AA ,</p>
      <p className="text-[18px] text-black">strategy ,</p>
      <p className="text-[18px] text-black">fps ,</p>
      <p className="text-[18px] text-black">rpg ,</p>
    </div>
  );
};

export default AllTypes;
