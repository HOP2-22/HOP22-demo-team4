import React, { useRef } from "react";
import Link from "next/link";

import AuthForm from "./AuthForm";
import AuthButton from "./AuthButton";

const SignupBody = ({ formData, setFormData, signup }) => {
  const nameRef = useRef();
  const emailRef = useRef();
  const passwordRef = useRef();
  const verifyRef = useRef();

  const handleKeyDown = (event) => {
    if (event.key === "Enter") {
      if (formData.name.length === 0) return nameRef.current.focus();
      if (formData.email.length === 0) return emailRef.current.focus();
      if (formData.password.length === 0) return passwordRef.current.focus();
      if (formData.verify.length === 0) return verifyRef.current.focus();
      signup();
    }
  };

  const handleNameValue = (event) => {
    setFormData({ ...formData, name: event.target.value });
  };

  const handleEmailValue = (event) => {
    setFormData({ ...formData, email: event.target.value });
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
        type={"text"}
        inputRef={nameRef}
        title={"Нэр:"}
        handleValue={handleNameValue}
        keyDownFunc={handleKeyDown}
        value={formData.name}
        placeholder={"Нэр ээ бичнэ үү"}
      />
      <AuthForm
        type={"email"}
        inputRef={emailRef}
        title={"И-мэйл:"}
        handleValue={handleEmailValue}
        keyDownFunc={handleKeyDown}
        value={formData.email}
        placeholder={"И-мэйл ээ бичнэ үү"}
      />
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
      <AuthButton onClickFunc={signup}>Бүртгүүлэх</AuthButton>
      <div className="flex justify-center">
        <Link href={"/auth/signin"}>
          <p className="cursor-pointer bg-clip-text text-transparent bg-gradient-to-t from-pink-500 to-violet-500 border-b-[1.5px] border-gradient">
            Бүртгүүлэх ээ зогсоогоод нэвтрэх үү ?
          </p>
        </Link>
      </div>
    </div>
  );
};

export default SignupBody;
