import React from "react";

const CatDetailImage = ({ label, src, changeFunction }) => {
  return (
    <div className="w-full mt-7">
      <p className="pb-2 text-indigo-500 text-[28px]">{label}:</p>
      <div className="relative w-3/5 max-h-[400px]">
        <img
          src={src}
          className="w-full max-h-[400px] object-contain object-center"
          alt="admin category detail image"
        />
        <div className="absolute top-0 left-0 h-full w-full bg-black/30 flex items-center justify-center">
          <div className="relative py-5 px-8 rounded-[10px] text-white bg-gray-500/80 hover:bg-gray-500 transition-colors duration-200 text-[18px] tracking-wide">
            <p>Change photo</p>
            <input
              type="file"
              className="absolute top-0 left-0 w-full h-[100px] bg-transparent z-40 opacity-0 cursor-pointer"
              onChange={changeFunction}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default CatDetailImage;
