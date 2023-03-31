import { useEffect } from "react";

export default function MobileNavbar({
  user,
  logout,
  hamburger,
  setHamburger,
}) {
  useEffect(() => {
    console.log(hamburger);
  }, [hamburger]);
  return (
    <div
      className={`absolute left-0 ${
        hamburger ? "translate-y-0" : "-translate-y-80"
      } -z-20 h-[40px] transition duration-500 md:hidden divide-y w-full bg-[#455073] shadow-xl`}
      style={{
        boxShadow: "0px -1px 3px #6077C0",
      }}
    >
      sadasd
    </div>
  );
}
