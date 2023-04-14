import axios from "axios";
import { useContext, useRef, useState } from "react";
import { useRouter } from "next/router";
import Cookies from "js-cookie";

import { Box, Button, Stack } from "@mui/material";

import { AuthContext } from "@/provider/AuthContext";

const image =
  "https://res.cloudinary.com/dymjjmeyc/image/upload/v1679913069/AccountTrader/0x0_zfidbn.jpg";

export const SignIn = () => {
  const router = useRouter();

  const { setUser } = useContext(AuthContext);

  const login = async () => {
    try {
      const response = await axios.post(
        `http://localhost:8000/user/auth/login`,
        {
          email: formData.email,
          password: formData.password,
        }
      );

      console.log(response.data);
      // Cookies.set("token", res.data.token);
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

  return (
    <div className="relative w-full h-screen">
      <img
        src={image}
        className="object-cover object-center w-full h-full"
        alt=""
      />
      <div className="absolute top-0 left-0 w-full h-full flex justify-center items-center bg-black/30 px-3 xsm:px-6 sm:px-0">
        <div className="bg-white rounded-[15px] w-full px-5 py-8">
          <p className="w-full text-center text-[24px] font-semibold">
            Нэвтрэх
          </p>
          <div className="pt-[30px] pb-10 flex flex-col gap-5">
            <div className="">
              <p className="text-[18px] font-medium pl-1 pb-1">И-мэйл:</p>
              <input
                ref={emailRef}
                type="text"
                onChange={(event) =>
                  setFormData({ ...formData, email: event.target.value })
                }
                onKeyDown={handleKeyDown}
                value={formData.email}
                className="rounded-[5px] w-full py-2 px-4 border focus:outline-none"
                placeholder="И-мэйл ээ бичнэ үү"
              />
            </div>
            <div className="">
              <p className="text-[18px] font-medium pl-1 pb-1">Нууц үг:</p>
              <input
                ref={passwordRef}
                type="text"
                onChange={(event) =>
                  setFormData({ ...formData, password: event.target.value })
                }
                onKeyDown={handleKeyDown}
                value={formData.password}
                className="rounded-[5px] w-full py-2 px-4 border focus:outline-none"
                placeholder="Нууц үг ээ бичнэ үү"
              />
            </div>
            <div className="w-full h-[45px] rounded-[10px] bg-[#027ffe] flex justify-center items-center">
              <p className="text-white text-[18px] font-medium cursor-pointer">
                Нэвтрэх
              </p>
            </div>
          </div>
          <div className="grid gap-5">
            <div
              className="w-full h-[50px] rounded-[10px] bg-black flex gap-6 items-center pl-8 sm:pl-14 cursor-pointer"
              onClick={() => {}}
            >
              <img
                src="https://res.cloudinary.com/dalheltnm/image/upload/v1681460197/Brand%20logo/google-icon_kt3dwd.svg"
                alt=""
                className="h-8"
              />
              <p className="text-white text-[18px] font-semibold sm:text-[20px] sm:font-bold">
                Sign up with Google
              </p>
            </div>
            <div className="w-full h-[50px] rounded-[10px] bg-gradient-to-b from-[#689edf] to-[#17A9FD] flex gap-6 items-center pl-8 sm:pl-14 cursor-pointer">
              <img
                src="https://res.cloudinary.com/dalheltnm/image/upload/v1681462186/Brand%20logo/facebook-xxl_q0heqk.png"
                alt=""
                className="h-8"
              />
              <p className="text-white text-[17px] font-semibold sm:text-[20px] sm:font-bold">
                Sign up with Facebook
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignIn;
