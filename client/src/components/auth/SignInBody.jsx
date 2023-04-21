import React, { useRef } from "react";
import Link from "next/link";

import AuthForm from "./AuthForm";
import AuthButton from "./AuthButton";

const SignInBody = ({ login, formData, setFormData }) => {
  const emailRef = useRef();
  const passwordRef = useRef();

  const handleKeyDown = (event) => {
    if (event.key === "Enter") {
      if (formData.email.length === 0) return emailRef.current.focus();
      if (formData.password.length === 0) return passwordRef.current.focus();
      login();
    }
  };

  const handleEmailValue = (event) => {
    setFormData({ ...formData, email: event.target.value });
  };

  const handlePassValue = (event) => {
    setFormData({ ...formData, password: event.target.value });
  };

  return (
    <div className="pt-[30px] pb-10 flex flex-col gap-5">
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
      <div className="w-full flex items-center justify-between">
        <Link href={"/auth/forget"}>
          <p className="cursor-pointer bg-clip-text text-transparent bg-gradient-to-r from-pink-500 to-violet-500 border-b-[1.5px] border-gradient">
            Нууц үгээ мартсан уу?
          </p>
        </Link>
        <Link href={"/auth/signup"}>
          <p className="cursor-pointer bg-clip-text text-transparent bg-gradient-to-t from-pink-500 to-violet-500 border-b-[1.5px] border-gradient">
            Бүртгүүлэх
          </p>
        </Link>
      </div>
      <AuthButton onClickFunc={login}>Нэвтрэх</AuthButton>
    </div>
  );
};

export default SignInBody;
