import React from "react";

const AuthButton = ({ title, onClickFunc }) => {
  return (
    <div
      className="w-full h-[45px] rounded-[10px] bg-[#027ffe] flex justify-center items-center"
      onClick={() => onClickFunc()}
    >
      <p className="text-white text-[18px] font-medium cursor-pointer">
        {title}
      </p>
    </div>
  );
};

export default AuthButton;
