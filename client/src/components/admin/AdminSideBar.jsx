import React, { useState } from "react";

import { Guard } from "../Guard";

const AdminSideBar = ({ children, className }) => {
  const [show, setShow] = useState(false);

  return (
    <Guard role="admin" setShow={setShow}>
      {show && (
        <div className="w-full h-screen flex">
          <div className="w-2/12 bg-black">a</div>
          <div className={`w-10/12 ${className}`}>{children}</div>
        </div>
      )}
    </Guard>
  );
};

export default AdminSideBar;
