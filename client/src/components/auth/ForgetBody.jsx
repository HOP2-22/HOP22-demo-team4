import React, { useRef } from "react";
import Link from "next/link";

import AuthForm from "./AuthForm";
import AuthButton from "./AuthButton";

const ForgetBody = ({ setEmail, email, sendEmail }) => {
  const emailRef = useRef();

  const handleKeyDown = (event) => {
    if (event.key === "Enter") {
      if (email.length === 0) return emailRef.current.focus();
      sendEmail();
    }
  };

  const handleEmailValue = (event) => {
    setEmail(event.target.value);
  };

  return (
    <div className="pt-[30px] pb-10 flex flex-col gap-5">
      <AuthForm
        type={"email"}
        inputRef={emailRef}
        title={"Сэргээх и-мэйл:"}
        handleValue={handleEmailValue}
        keyDownFunc={handleKeyDown}
        value={email}
        placeholder={"Сэргээх и-мэйл ээ бичнэ үү"}
      />
      <div className="w-full flex items-center justify-between">
        <Link href={"/auth/signin"}>
          <p className="cursor-pointer bg-clip-text text-transparent bg-gradient-to-r from-pink-500 to-violet-500 border-b-[1.5px] border-gradient">
            Нэвтрэх
          </p>
        </Link>
        <Link href={"/auth/signup"}>
          <p className="cursor-pointer bg-clip-text text-transparent bg-gradient-to-t from-pink-500 to-violet-500 border-b-[1.5px] border-gradient">
            Бүртгүүлэх
          </p>
        </Link>
      </div>
      <AuthButton onClickFunc={sendEmail}>Сэргээх</AuthButton>
    </div>
  );
};

export default ForgetBody;
