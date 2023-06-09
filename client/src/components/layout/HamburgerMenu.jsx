import { useContext } from "react";

import { AuthContext } from "@/provider/AuthContext";

export const HamburgerMenu = () => {
  const { hamburger, setHamburger } = useContext(AuthContext);

  return (
    <div
      className={`${
        hamburger ? "border border-gradient" : "border border-black"
      } flex flex-col transition-colors rounded gap-1 items-center justify-center w-8 h-8 md:hidden`}
      onClick={() => setHamburger(!hamburger)}
    >
      <div
        className={`${
          !hamburger
            ? "bg-black"
            : "bg-gradient-to-r from-pink-500 to-violet-500 rotate-45 translate-y-[2.5px]"
        } h-[1.5px] rounded w-[60%] transition `}
      ></div>
      <div
        className={`${
          !hamburger ? "bg-black" : "hidden"
        } h-[1.5px] rounded w-[60%] transition `}
      ></div>
      <div
        className={`${
          !hamburger
            ? "bg-black"
            : "bg-gradient-to-r from-pink-500 to-violet-500 -rotate-45 -translate-y-[2.5px]"
        } h-[1.5px] rounded w-[60%] transition `}
      ></div>
    </div>
  );
};
