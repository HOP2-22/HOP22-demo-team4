// import { toast } from "react-hot-toast";
import { useRouter } from "next/router";
import { useContext, useState } from "react";

import { AuthContext } from "@/provider/AuthContext";
import { MobileNavbar } from "./MobileNavbar";
import { Container } from "../Container";
import { DesktopNavbar } from "./DesktopNavbar";

export const Navbar = () => {
  const router = useRouter();

  const { user, logout } = useContext(AuthContext);

  const [hamburger, setHamburger] = useState(false);

  const showNotification = () => {
    toast((t) => (
      <span>
        Та энэ хуудас руу нэвтэрхийн тулд заавал нэвтэрсэн байх шаардлагатай
        <button
          onClick={() => {
            push("/auth/login");
            toast.dismiss(t.id);
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
    <div className="fixed w-full z-50 h-[70px] bg-white flex items-center justify-between px-10 shadow-md">
      <Container>
        <div className="w-full h-full flex justify-between items-center">
          <p
            className="bg-clip-text text-transparent bg-gradient-to-b from-pink-500 to-violet-500 text-[32px] font-Black cursor-pointer"
            onClick={() => {
              router.push("/");
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
      </Container>
    </div>
  );
};
