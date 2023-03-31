import { useContext, useState } from "react";

import Container from "../Container";
import DesktopNavbar from "./DesktopNavbar";

import { useRouter } from "next/router";
import { AuthContext } from "@/provider/AuthContext";
import MobileNavbar from "./MobileNavbar";

export default function Navbar() {
  const router = useRouter();

  const { user, logout } = useContext(AuthContext);

  const [hamburger, setHamburger] = useState(false);

  return (
    <div className="fixed w-full z-50 h-[70px] bg-[#455073] flex items-center justify-between px-10 shadow-md">
      <Container>
        <div className="w-full h-full flex justify-between items-center">
          <p
            className="text-white text-[32px] font-Black cursor-pointer"
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
          />
        </div>
        <MobileNavbar user={user} logout={logout} hamburger={hamburger} />
      </Container>
    </div>
  );
}
