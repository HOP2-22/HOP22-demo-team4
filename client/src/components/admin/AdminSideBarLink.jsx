import React from "react";

const AdminSideBarLink = ({ title, children }) => {
  return (
    <div className="pl-4 flex gap-5 items-center">
      {children}
      <p className="text-white text-[24px]">{title}</p>
    </div>
  );
};

export default AdminSideBarLink;
