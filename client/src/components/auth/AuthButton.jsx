import React from "react";

const AuthButton = ({ children, onClickFunc, className, titleClassName }) => {
  return (
    <div
      className={`w-full h-[45px] rounded-[10px] bg-[#027ffe] flex justify-center items-center cursor-pointer ${className}`}
      onClick={() => onClickFunc()}
    >
      <p className={`text-white text-[18px] font-medium ${titleClassName}`}>
        {children}
      </p>
    </div>
  );
};

export default AuthButton;
