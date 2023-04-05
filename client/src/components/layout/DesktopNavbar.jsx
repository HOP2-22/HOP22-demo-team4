import { useState } from "react";

import HamburgerMenu from "./HamburgerMenu";

import { AiOutlineShoppingCart } from "react-icons/ai";
import { BiUserCircle } from "react-icons/bi";
import { useRouter } from "next/router";

export default function DesktopNavbar({
  user,
  logout,
  hamburger,
  setHamburger,
}) {
  const router = useRouter();
  const [account, setAccount] = useState(false);

  return (
    <div>
      <div className="hidden sm:flex gap-14 items-center">
        <div className="relative group">
          <div
            className="text-black group-hover:text-[#FF6900] transition-colors flex gap-1 items-center text-[19px] cursor-pointer"
            onClick={() => setAccount(!account)}
          >
            Account
            <span className="text-[22px] translate-y-[1px]">
              <BiUserCircle />
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
                      className="btn transition-colors w-full rounded-full font-medium h-[32px] flex items-center justify-center cursor-pointer"
                      onClick={() => router.push("/auth/signin")}
                    >
                      Sign in
                    </div>
                    <div
                      className="w-full rounded-full border border-[#a1d4e8] text-[#a1d4e8]  hover:text-[#c8e4ee] hover:border-[#c8e4ee] transition-colors font-medium h-[32px] flex items-center justify-center cursor-pointer"
                      onClick={() => router.push("/auth/signup")}
                    >
                      Join now
                    </div>
                  </div>
                ) : (
                  <div className="flex flex-col gap-2 w-full px-2">
                    <div
                      className="w-full rounded-full border border-[#a1d4e8] text-[#a1d4e8]  hover:text-[#c8e4ee] hover:border-[#c8e4ee] transition-colors font-medium h-[32px] flex items-center justify-center cursor-pointer"
                      onClick={() =>
                        router.push({
                          pathname: "/profile",
                          // query: { id: user._id },
                        })
                      }
                    >
                      Profile
                    </div>
                    <div
                      className="btn transition-colors w-full rounded-full font-medium h-[32px] flex items-center justify-center cursor-pointer"
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
          className="group text-[18px] hover:text-[#FF6900] transition-colors font-medium flex items-center gap-1 cursor-pointer"
          onClick={() => {
            router.push("/cart");
          }}
        >
          Shipping Cart
          <span className="relative text-[20px] group-hover:text-[#FF6900] transition-transform scale-125 transform group-hover:translate-x-2  ">
            <AiOutlineShoppingCart />
            <div
              className={`${
                user && user?.userFavorite.length > 0 ? "flex" : "hidden"
              } absolute -right-[9px] -top-[8px] w-[18px] h-[18px] justify-center items-center bg-[#a1d4e8] text-white transition-colors rounded-full text-[13px]`}
            >
              {user?.userFavorite.length}
            </div>
          </span>
        </div>
      </div>
      <HamburgerMenu hamburger={hamburger} setHamburger={setHamburger} />
    </div>
  );
}
