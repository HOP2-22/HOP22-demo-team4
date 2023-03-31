import { useState } from "react";

import HamburgerMenu from "./HamburgerMenu";

import { AiOutlineShoppingCart } from "react-icons/ai";
import { FiChevronDown } from "react-icons/fi";

export default function DesktopNavbar({
  user,
  logout,
  hamburger,
  setHamburger,
}) {
  const [account, setAccount] = useState(false);

  return (
    <>
      <div className="hidden sm:flex gap-14 items-center">
        <div className="relative group">
          <div
            className="text-white group-hover:text-gray-200 flex gap-1 items-center text-[19px] cursor-pointer"
            onClick={() => setAccount(!account)}
          >
            Account
            <span className="text-[22px] translate-y-[1px] group-hover:rotate-180">
              <FiChevronDown />
            </span>
          </div>
          <div className="hidden group-hover:flex flex-col absolute -right-5 w-[250px] h-[100px]">
            <div className="h-8 w-full relative">
              <div className="absolute right-5 rotate-45 w-9 h-9 rounded-[5px] border bg-white shadow"></div>
              <div className="absolute right-5 top-[11px] w-9 h-[1px] rounded-[5px] z-20 bg-white"></div>
            </div>
            <div className="relative top-2 px-3 py-4 h-[200px] w-full bg-white rounded-[10px] z-[10] border-[0.5px]">
              <div className="relative z-40 flex flex-col gap-4">
                <p className="font-medium text-[20px]">
                  {user ? `Hi, ${user?.name}` : "Welcome back!"}
                </p>
                {!user ? (
                  <div className="flex flex-col gap-2 w-full px-2">
                    <div
                      className="w-full rounded-full bg-[#6077C0] hover:bg-[#59689b] transition-colors text-white font-medium h-[32px] flex items-center justify-center cursor-pointer"
                      onClick={() => router.push("/auth/signin")}
                    >
                      Sign in
                    </div>
                    <div
                      className="w-full rounded-full border border-[#6077C0] text-[#6077C0]  hover:text-[#59689b] hover:border-[#59689b] transition-colors font-medium h-[32px] flex items-center justify-center cursor-pointer"
                      onClick={() => router.push("/auth/signup")}
                    >
                      Join now
                    </div>
                  </div>
                ) : (
                  <div className="flex flex-col gap-2 w-full px-2">
                    <div
                      className="w-full rounded-full border border-[#6077C0] text-[#6077C0]  hover:text-[#59689b] hover:border-[#59689b] transition-colors font-medium h-[32px] flex items-center justify-center cursor-pointer"
                      onClick={() => router.push(`/profile/${user?.id}`)}
                    >
                      Profile
                    </div>
                    <div
                      className="w-full rounded-full bg-[#6077C0] hover:bg-[#59689b] transition-colors text-white font-medium h-[32px] flex items-center justify-center cursor-pointer"
                      onClick={() => logout()}
                    >
                      Logout
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
        <div
          className="group text-[18px] text-white hover:text-gray-200 transition-colors duration-200 font-medium flex items-center gap-1 cursor-pointer"
          onClick={() => {
            router.push("/cart");
          }}
        >
          Shipping Cart
          <span className="relative text-[20px] text-white group-hover:text-gray-200 transition duration-200 scale-125 transform group-hover:translate-x-2  ">
            <AiOutlineShoppingCart />
            <div
              className={`${
                user && user?.userFavorite.length > 0 ? "flex" : "hidden"
              } absolute -right-3 -top-[10px] w-5 h-5 justify-center items-center bg-red-600 rounded-full text-[14px] text-white`}
            >
              {user.userFavorite.length}
            </div>
          </span>
        </div>
      </div>
      <HamburgerMenu hamburger={hamburger} setHamburger={setHamburger} />
    </>
  );
}
