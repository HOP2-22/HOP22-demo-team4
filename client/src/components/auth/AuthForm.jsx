import React from "react";

const AuthForm = ({
  type,
  title,
  inputRef,
  handleValue,
  keyDownFunc,
  value,
  placeholder,
  className,
  titleClassName,
  inputClassName,
}) => {
  return (
    <div className={`${className}`}>
      <p className={`text-[18px] font-medium pl-1 pb-1 ${titleClassName}`}>
        {title}
      </p>
      <input
        onCopy={(e) => type === "passport" && e.preventDefault()}
        ref={inputRef}
        type={type}
        onChange={handleValue}
        onKeyDown={keyDownFunc}
        value={value}
        className={`rounded-[5px] w-full py-2 px-4 border focus:outline-none ${inputClassName}`}
        placeholder={placeholder}
      />
    </div>
  );
};

export default AuthForm;
