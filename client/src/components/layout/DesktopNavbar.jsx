import Link from "next/link";

import { HamburgerMenu } from "./HamburgerMenu";

import {
  LogOut,
  MessageCircle,
  Plus,
  ShoppingCart,
  UserCog,
} from "lucide-react";

export const DesktopNavbar = ({ user, logout }) => {
  return (
    <>
      <div className="hidden md:flex gap-6 items-center">
        {user ? (
          <>
            <Link href={"/chat"}>
              <span className="relative transition-transform scale-125 transform group hover:translate-x-2">
                <MessageCircle
                  size={30}
                  className="text-[#027ffe] hover:text-[#44BAF0] transition-colors duration-200"
                />
                <div
                  className={`${
                    user && user?.chatrooms?.length > 0 ? "flex" : "hidden"
                  } absolute -right-[5px] -top-[7px] w-5 h-5 justify-center items-center bg-pink-600 transition-colors rounded-full`}
                >
                  <p className="text-white text-[14px]">
                    {user?.chatrooms?.length}
                  </p>
                </div>
              </span>
            </Link>
            <Link href={"/cart"}>
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
            </Link>
            <Link href={"/profile"}>
              <UserCog
                size={30}
                className="text-[#027ffe] hover:text-[#44BAF0] transition-colors duration-200"
              />
            </Link>
            <Link href={"/add_item"}>
              <div className="px-[2px] py-[2px] rounded-full border-2 group border-[#027ffe] hover:border-[#44BAF0] transition-colors duration-200 cursor-pointer">
                <Plus
                  size={24}
                  className="text-[#027ffe] group-hover:text-[#44BAF0] transition-colors duration-200"
                />
              </div>
            </Link>
            <Link href={"/"} onClick={() => logout()}>
              <LogOut
                size={30}
                className="text-[#027ffe] hover:text-[#44BAF0] transition-colors duration-200"
              />
            </Link>
          </>
        ) : (
          <>
            <Link
              href={"/auth/signin"}
              className="bg-[#44BAF0] hover:bg-[#40abdd] transition-colors duration-200 text-white py-[10px] w-[120px] rounded-[10px] flex justify-center"
            >
              Нэвтрэх
            </Link>
            <Link
              href={"/auth/signup"}
              className="bg-[#027ffe] hover:bg-[#027fcf] transition-colors duration-200 text-white py-[10px] w-[120px] rounded-[10px] flex justify-center"
            >
              Бүртгүүлэх
            </Link>
          </>
        )}
      </div>
      <HamburgerMenu />
    </>
  );
};
