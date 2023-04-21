import React from "react";

const AuthButton = ({ children, onClickFunc, className, titleClassName }) => {
  return (
    <div
      className={`w-full h-[45px] rounded-[10px] bg-[#027ffe] flex justify-center items-center ${className}`}
      onClick={() => onClickFunc()}
    >
      <p
        className={`text-white text-[18px] font-medium cursor-pointer ${titleClassName}`}
      >
        {children}
      </p>
    </div>
  );
};

export default AuthButton;
