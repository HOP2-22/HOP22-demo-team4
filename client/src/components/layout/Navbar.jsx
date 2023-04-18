import { useRouter } from "next/router";
import { useContext, useState } from "react";
import { toast } from "react-hot-toast";

import { AuthContext } from "@/provider/AuthContext";
import { MobileNavbar } from "./MobileNavbar";
import { DesktopNavbar } from "./DesktopNavbar";

export const Navbar = () => {
  const { push } = useRouter();

  const { user, logout } = useContext(AuthContext);

  const [hamburger, setHamburger] = useState(false);

  const showNotification = () => {
    toast((t) => (
      <span>
        Та энэ хуудас руу нэвтэрхийн тулд заавал нэвтэрсэн байх шаардлагатай
        <button
          onClick={() => {
            toast.dismiss(t.id);
            push("/auth/signin");
          }}
          className="py-1 ml-2 px-3 rounded-[5px] bg-[#44BAF0] text-white"
        >
          Зөвшөөрөх
        </button>
        <button
          onClick={() => {
            toast.dismiss(t.id);
          }}
          className="py-1 ml-2 px-3 rounded-[5px] bg-red-500 text-white"
        >
          Татгалзах
        </button>
      </span>
    ));
  };

  return (
    <div className="fixed w-full z-50 h-[70px] bg-white flex items-center justify-center px-10 shadow-md">
      <div
        className={`w-full lg:w-[900px] xl:w-[1100px] 2xl:w-[1180px] 3xl:w-[1330px] h-full`}
      >
        <div className="w-full h-full flex justify-between items-center">
          <p
            className="bg-clip-text text-transparent bg-gradient-to-b from-pink-500 to-violet-500 text-[32px] font-Black cursor-pointer"
            onClick={() => {
              push("/");
            }}
          >
            SwapZone
          </p>
          <DesktopNavbar
            user={user}
            logout={logout}
            hamburger={hamburger}
            setHamburger={setHamburger}
            showNotification={showNotification}
          />
        </div>
        <MobileNavbar
          user={user}
          logout={logout}
          hamburger={hamburger}
          showNotification={showNotification}
        />
      </div>
    </div>
  );
};
