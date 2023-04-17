import React from "react";

const SignInButtons = () => {
  return (
    <div className="grid gap-5">
      <div
        className="w-full h-[50px] rounded-[10px] bg-black flex gap-6 items-center pl-8 xsm:pl-20 sm:pl-14 cursor-pointer"
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
      <div className="w-full h-[50px] rounded-[10px] bg-gradient-to-b from-[#689edf] to-[#17A9FD] flex gap-6 items-center pl-8 xsm:pl-20 sm:pl-14 cursor-pointer">
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
  );
};

export default SignInButtons;
