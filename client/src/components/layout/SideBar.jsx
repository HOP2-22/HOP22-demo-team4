import React, { useContext } from "react";
import Link from "next/link";

import { HamburgerMenu } from "./HamburgerMenu";
import { AuthContext } from "@/provider/AuthContext";

import {
  LogOut,
  MessageCircle,
  Plus,
  ShoppingCart,
  UserCog,
} from "lucide-react";
import { useRouter } from "next/router";

const SideBar = () => {
  const { user, hamburger, setHamburger, logout } = useContext(AuthContext);

  const { push } = useRouter();

  return (
    <div
      className={`${
        !hamburger && "translate-x-full"
      } transition-transform duration-200 absolute z-50 top-0 left-0 w-full h-screen flex justify-end`}
    >
      <div className="w-1/4 h-full" onClick={() => setHamburger(false)}></div>
      <div className="z-[60] w-3/4 h-full bg-white px-6 py-5 flex flex-col gap-5">
        <HamburgerMenu />
        <div className="h-full flex flex-col">
          <Link
            onClick={() => setHamburger(false)}
            href={user ? "/chat" : "/auth/signin"}
            className="flex items-center gap-6 my-3"
          >
            <MessageCircle
              size={30}
              className="text-[#027ffe] hover:text-[#44BAF0] transition-colors duration-200"
            />
            <span className="w-[120px] absolute right-[95px] text-[20px] font-semibold text-[#027ffe]">
              Chat
            </span>
          </Link>
          <Link
            onClick={() => setHamburger(false)}
            href={user ? "/cart" : "/auth/signin"}
            className="flex items-center gap-6 my-3"
          >
            <span className="relative transition-transform scale-125 transform group hover:translate-x-2">
              <ShoppingCart className="text-[27px] text-[#027ffe] group-hover:text-[#44BAF0] transition-colors" />
              <div
                className={`${
                  user && user?.userFavorite?.length > 0 ? "flex" : "hidden"
                } absolute -right-[7px] -top-[9px] w-5 h-5 justify-center items-center bg-pink-600 transition-colors rounded-full`}
              >
                <p className="text-white text-[14px]">
                  {user?.userFavorite?.length}
                </p>
              </div>
            </span>
            <span className="w-[120px] absolute right-[95px] text-[20px] font-semibold text-[#027ffe]">
              Сагс
            </span>
          </Link>
          <Link
            onClick={() => setHamburger(false)}
            href={user ? "/profile" : "/auth/signin"}
            className="flex items-center gap-6 my-3"
          >
            <UserCog
              size={30}
              className="text-[#027ffe] hover:text-[#44BAF0] transition-colors duration-200"
            />
            <span className="w-[120px] absolute right-[95px] text-[20px] font-semibold text-[#027ffe]">
              Профайл
            </span>
          </Link>
          <Link
            onClick={() => setHamburger(false)}
            href={user ? "/add_item" : "/auth/signin"}
            className="flex items-center gap-6 my-3"
          >
            <div className="px-[2px] py-[2px] rounded-full border-2 group border-[#027ffe] hover:border-[#44BAF0] transition-colors duration-200 cursor-pointer">
              <Plus
                size={24}
                className="text-[#027ffe] group-hover:text-[#44BAF0] transition-colors duration-200"
              />
            </div>
            <span className="w-[120px] absolute right-[95px] text-[20px] font-semibold text-[#027ffe]">
              Бараа нэмэх
            </span>
          </Link>
          <div className="h-full flex flex-col justify-end gap-6">
            {user ? (
              <Link
                href={"/"}
                className="flex items-center"
                onClick={() => {
                  logout();
                  setHamburger(false);
                }}
              >
                <LogOut
                  size={30}
                  className="text-[#027ffe] hover:text-[#44BAF0] transition-colors duration-200"
                />
                <span className="w-[120px] absolute right-[95px] text-[20px] font-semibold text-[#027ffe]">
                  Гарах
                </span>
              </Link>
            ) : (
              <>
                <Link
                  href={"/auth/signin"}
                  className="bg-[#44BAF0] hover:bg-[#40abdd] transition-colors duration-200 text-white py-[10px] w-full rounded-[10px] flex justify-center"
                  onClick={() => {
                    setHamburger(false);
                  }}
                >
                  Нэвтрэх
                </Link>
                <Link
                  href={"/auth/signup"}
                  className="bg-[#027ffe] hover:bg-[#027fcf] transition-colors duration-200 text-white py-[10px] w-full rounded-[10px] flex justify-center"
                  onClick={() => {
                    setHamburger(false);
                  }}
                >
                  Бүртгүүлэх
                </Link>
              </>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default SideBar;
