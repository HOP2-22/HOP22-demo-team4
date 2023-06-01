import React from "react";

const AdminInput = ({
  value,
  label,
  onChangeHandler,
  onkeydownHandler,
  inputRef,
}) => {
  return (
    <div className="flex flex-col gap-2">
      <label
        htmlFor=""
        className="pl-2 text-indigo-900 font-medium text-[20px]"
      >
        {label ? label : "label"}
      </label>
      <input
        type="text"
        value={value}
        onChange={onChangeHandler}
        onKeyDown={(event) => {
          if (onkeydownHandler) {
            onkeydownHandler(event);
          }
        }}
        ref={inputRef}
        className="w-[300px] outline outline-indigo-500 rounded-[20px] px-5 py-[10px]"
      />
    </div>
  );
};

export default AdminInput;
