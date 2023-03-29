import { BooleanContext } from "@/provider/BooleanContext";
import { useContext, useEffect } from "react";

export default function Navbar() {
  return (
    <div className="w-full h-[60px] bg-blue-500 flex items-center justify-between px-10">
      <p>Account Trader</p>
      <div className="flex gap-4 items-center">
        <div className="w-[80px] py-[10px] rounded-[10px] bg-green-500 text-white flex items-center justify-center cursor-pointer">
          Log in
        </div>
        <div className="w-[80px] py-[10px] rounded-[10px] bg-green-500 text-white flex items-center justify-center cursor-pointer">
          Sign up
        </div>
      </div>
    </div>
  );
}
