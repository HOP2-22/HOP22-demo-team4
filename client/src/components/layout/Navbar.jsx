import { useRouter } from "next/router";
import { useContext } from "react";

import { AuthContext } from "@/provider/AuthContext";
import { DesktopNavbar } from "./DesktopNavbar";

export const Navbar = ({ children, className }) => {
  const { push } = useRouter();

  const { user, logout } = useContext(AuthContext);

  return (
    <>
      <div className="fixed w-full z-50 h-[70px] bg-white flex items-center justify-center px-10 shadow-md">
        <div
          className={`w-full lg:w-[900px] xl:w-[1100px] 2xl:w-[1180px] 3xl:w-[1330px] h-full flex justify-between items-center`}
        >
          <p
            className="bg-clip-text text-transparent bg-gradient-to-b from-pink-500 to-violet-500 text-[32px] font-Black cursor-pointer"
            onClick={() => {
              push("/");
            }}
          >
            SwapZone
          </p>
          <DesktopNavbar user={user} logout={logout} />
        </div>
      </div>
      <div className={`${className}`}>{children}</div>
    </>
  );
};
