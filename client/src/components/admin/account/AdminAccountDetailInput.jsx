import React from "react";

const AdminAccountDetailInput = ({ title, onChangeFunc, value, type }) => {
  return (
    <div className="w-full flex flex-col gap-2">
      <p className="pl-3 text-[20px] font-medium">{title}: </p>
      <input
        type={type}
        onChange={onChangeFunc}
        value={value}
        className="w-2/3 py-2 px-4 border rounded-[8px] focus:outline-none"
      />
    </div>
  );
};

export default AdminAccountDetailInput;
