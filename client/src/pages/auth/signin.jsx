import axios from "axios";
import { useContext, useRef, useState } from "react";
import { useRouter } from "next/router";
import Cookies from "js-cookie";

import { AuthContext } from "@/provider/AuthContext";
import AuthForm from "@/components/auth/AuthForm";
import AuthButton from "@/components/auth/AuthButton";
import SignInButtons from "@/components/auth/SignInButtons";
import { toast } from "react-hot-toast";

const image =
  "https://res.cloudinary.com/dymjjmeyc/image/upload/v1679913069/AccountTrader/0x0_zfidbn.jpg";

export const SignIn = () => {
  const { push } = useRouter();

  const { setUser } = useContext(AuthContext);

  const login = async () => {
    try {
      const response = await axios.post(
        `http://localhost:8000/api/v1/user/auth/login`,
        {
          email: formData.email,
          password: formData.password,
        }
      );

      if (response.data.success !== true)
        return toast.error("Талбарыг зөв гүйцэт бөглө");

      setUser(response.data.data.user);

      if (response.data.data.user.role === "admin") {
        push("/admin");
        return;
      }

      Cookies.set("token", response.data.data.token);

      push("/");
    } catch (error) {
      console.log(error);
    }
  };

  const emailRef = useRef();
  const passwordRef = useRef();

  const handleKeyDown = (event) => {
    if (event.key === "Enter") {
      if (formData.email.length === 0) return emailRef.current.focus();
      if (formData.password.length === 0) return passwordRef.current.focus();
      login();
    }
  };

  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const handleEmailValue = (event) => {
    setFormData({ ...formData, email: event.target.value });
  };

  const handlePassValue = (event) => {
    setFormData({ ...formData, password: event.target.value });
  };

  return (
    <div className="relative w-full h-screen">
      <img
        src={image}
        className="object-cover object-center w-full h-full"
        alt=""
      />
      <div className="absolute top-0 left-0 w-full h-full flex justify-center items-center bg-black/30 px-3 xsm:px-6 sm:px-0">
        <div className="bg-white rounded-[15px] w-full sm:w-[420px] px-5 py-8">
          <p className="w-full text-center text-[24px] font-semibold">
            Нэвтрэх
          </p>
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
            <AuthButton title={"Нэвтрэх"} onClickFunc={login} />
          </div>
          <SignInButtons />
        </div>
      </div>
    </div>
  );
};

export default SignIn;
