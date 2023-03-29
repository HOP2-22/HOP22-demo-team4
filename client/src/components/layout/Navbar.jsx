import { BooleanContext } from "@/provider/BooleanContext";
import { useContext, useEffect } from "react";
import Container from "../Container";

export default function Navbar() {
  return (
    <div className="w-full h-[60px] bg-blue-500 flex items-center justify-between px-10">
      <Container>
        <div className="w-full h-full flex justify-between items-center">
          <div className="flex">
            <div className="">Cart</div>
            <div className="">Favorite</div>
          </div>
          <p className="text-white text-[32px] font-Black ">Account Trader</p>
          <div className="flex gap-4 items-center">
            <div className="w-[80px] py-[10px] rounded-[10px] bg-green-500 text-white flex items-center justify-center cursor-pointer">
              Log in
            </div>
            <div className="w-[80px] py-[10px] rounded-[10px] bg-green-500 text-white flex items-center justify-center cursor-pointer">
              Sign up
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
}
