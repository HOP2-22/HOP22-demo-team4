import { useContext, useState } from "react";
import { useRouter } from "next/router";

import { HamburgerMenu } from "./HamburgerMenu";
import NavbarHoverButton from "./NavbarHoverButton";
import { AuthContext } from "@/provider/AuthContext";

import { AiOutlineShoppingCart } from "react-icons/ai";
import { BiUserCircle } from "react-icons/bi";
import { Plus } from "lucide-react";
import Link from "next/link";

export const DesktopNavbar = ({
  user,
  logout,
  hamburger,
  setHamburger,
  showNotification,
}) => {
  const { push } = useRouter();
  const [account, setAccount] = useState(false);

  return (
    <div>
      <div className="hidden md:flex gap-14 items-center">
        {user && (
          <Link href={"/add_item"}>
            <p className="group text-[#027ffe] hover:text-[#44BAF0] transition-colors duration-200 cursor-pointer flex items-center gap-1 text-[19px]">
              Зар нэмэх
              <span>
                <Plus
                  size={22}
                  className="text-[#027ffe] group-hover:text-[#44BAF0] transition-colors duration-200"
                />
              </span>
            </p>
          </Link>
        )}

        <div className="relative group">
          <div
            className="text-[#027ffe] group-hover:text-[#44BAF0] transition-colors duration-200 flex gap-1 items-center text-[19px] cursor-pointer"
            onClick={() => setAccount(!account)}
          >
            Хэрэглэгч
            <span className="text-[22px] translate-y-[1px]">
              <BiUserCircle />
            </span>
          </div>
          <div className="hidden group-hover:flex flex-col absolute -right-5 w-[250px] h-[100px]">
            <div className="h-8 w-full relative">
              <div className="absolute right-5 rotate-45 w-9 h-9 rounded-[5px] border bg-white shadow"></div>
              <div className="absolute right-5 top-[11px] w-9 h-[1px] rounded-[5px] z-20 bg-white"></div>
            </div>
            <NavbarHoverButton user={user} logout={logout} />
          </div>
        </div>
        <div
          className="group flex items-center gap-1 cursor-pointer"
          onClick={() => {
            if (user) {
              push("/cart");
            } else {
              showNotification();
            }
          }}
        >
          <p className="text-[18px] text-[#027ffe] group-hover:text-[#44BAF0] transition-colors font-medium">
            Сагс
          </p>
          <span className="relative transition-transform scale-125 transform group-hover:translate-x-2">
            <AiOutlineShoppingCart className="text-[20px] text-[#027ffe] group-hover:text-[#44BAF0]" />
            <div
              className={`${
                user && user?.userFavorite?.length > 0 ? "flex" : "hidden"
              } absolute -right-[5px] -top-[7px] w-4 h-4 justify-center items-center bg-pink-600 transition-colors rounded-full`}
            >
              <p className="text-white text-[12px]">
                {user?.userFavorite?.length}
              </p>
            </div>
          </span>
        </div>
      </div>
      <HamburgerMenu hamburger={hamburger} setHamburger={setHamburger} />
    </div>
  );
};
