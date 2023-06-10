import React from "react";

const AdminInput = ({
  value,
  label,
  onChangeHandler,
  onkeydownHandler,
  inputRef,
  containerClassName,
  labelClassName,
  inputClassName,
}) => {
  return (
    <div
      className={`flex flex-col gap-2 ${
        containerClassName && `${containerClassName}`
      }`}
    >
      <label
        htmlFor=""
        className={`pl-2 text-indigo-900 font-medium text-[20px] ${
          labelClassName && `${labelClassName}`
        }`}
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
        className={`outline outline-indigo-500 rounded-[20px] px-5 py-[10px] ${
          inputClassName && `${inputClassName}`
        }`}
      />
    </div>
  );
};

export default AdminInput;
