import React from "react";

const PermissionDetailEachDetailAndDesc = ({ title, desc }) => {
  return (
    <div className="flex gap-3 items-center">
      <p className="text-2xl font-medium">{title}:</p>
      <p className="text-gray-800 text-[18px] pt-1">{desc}</p>
    </div>
  );
};

export default PermissionDetailEachDetailAndDesc;
