import React, { useRef } from "react";

import AuthForm from "./AuthForm";
import AuthButton from "./AuthButton";

const ResetTokenBody = ({ formData, setFormData, change }) => {
  const passwordRef = useRef();
  const verifyRef = useRef();

  const handleKeyDown = (event) => {
    if (event.key === "Enter") {
      if (formData.password.length === 0) return passwordRef.current.focus();
      if (formData.verify.length === 0) return verifyRef.current.focus();
      change();
    }
  };

  const handlePassValue = (event) => {
    setFormData({ ...formData, password: event.target.value });
  };

  const handleVerifyValue = (event) => {
    setFormData({ ...formData, verify: event.target.value });
  };

  return (
    <div className="pt-[30px] pb-10 flex flex-col gap-5">
      <AuthForm
        type={"password"}
        inputRef={passwordRef}
        title={"Нууц үг:"}
        handleValue={handlePassValue}
        keyDownFunc={handleKeyDown}
        value={formData.password}
        placeholder={"Нууц үг ээ бичнэ үү"}
      />
      <AuthForm
        type={"password"}
        inputRef={verifyRef}
        handleValue={handleVerifyValue}
        keyDownFunc={handleKeyDown}
        value={formData.verify}
        placeholder={"Нууц үг ээ давтан бичнэ үү"}
      />
      <AuthButton onClickFunc={change}>Солих</AuthButton>
    </div>
  );
};

export default ResetTokenBody;
