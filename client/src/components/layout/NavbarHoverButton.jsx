import { useRouter } from "next/router";
import React from "react";

const NavbarHoverButton = ({ user, logout }) => {
  const { push } = useRouter();

  return (
    <div className="relative top-2 px-3 py-4 h-[200px] w-full bg-white rounded-[10px] z-[10] border-[0.5px]">
      <div className="relative z-40 flex flex-col gap-4">
        <p className="font-medium text-[20px]">
          {user ? `Сайн уу, ${user?.name}` : "Тавтай морил!"}
        </p>
        {!user ? (
          <div className="flex flex-col gap-2 w-full px-2">
            <div
              className="btn transition-colors w-full h-[32px] rounded-full flex items-center justify-center cursor-pointer"
              onClick={() => push("/auth/signin")}
            >
              <p className="font-medium">Нэвтрэх</p>
            </div>
            <div
              className="w-full h-[32px] rounded-full flex items-center justify-center border hover:border-[#027ffe] border-[#44BAF0]  transition-colors cursor-pointer"
              onClick={() => push("/auth/signup")}
            >
              <p className="hover:text-[#027ffe] text-[#44BAF0] transition-colors font-medium">
                Бүртгүүлэх
              </p>
            </div>
          </div>
        ) : (
          <div className="flex flex-col gap-2 w-full px-2">
            <div
              className="w-full h-[32px] rounded-full flex items-center justify-center border hover:border-[#027ffe] border-[#44BAF0] transition-colors cursor-pointer"
              onClick={() =>
                push({
                  pathname: "/profile",
                })
              }
            >
              <p className="hover:text-[#027ffe] text-[#44BAF0] transition-colors font-medium">
                профайл
              </p>
            </div>
            <div
              className="btn transition-colors w-full rounded-full h-[32px] flex items-center justify-center cursor-pointer"
              onClick={() => logout()}
            >
              <p className="font-medium">Гарах</p>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default NavbarHoverButton;
