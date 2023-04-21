import React from "react";

const AuthTitle = ({ children, className }) => {
  return (
    <p className={`w-full text-center text-[24px] font-semibold ${className}`}>
      {children}
    </p>
  );
};

export default AuthTitle;
