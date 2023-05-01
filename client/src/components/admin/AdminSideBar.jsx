import React from "react";

const AdminSideBar = ({ children, className }) => {
  return (
    <div className="w-full h-screen flex">
      <div className="w-2/12 bg-black">a</div>
      <div className={`w-10/12 ${className}`}>{children}</div>
    </div>
  );
};

export default AdminSideBar;
