import Link from "next/link";
import { useRouter } from "next/router";

import { Plus } from "lucide-react";
import { AiOutlineShoppingCart } from "react-icons/ai";

export const MobileNavbar = ({ user, logout, hamburger, showNotification }) => {
  const { push } = useRouter();

  return (
    <div
      className={`${
        hamburger ? "flex" : "hidden"
      } flex-col absolute right-5 w-[250px] h-[100px]`}
    >
      <div className="h-8 w-full relative">
        <div className="absolute right-5 rotate-45 w-9 h-9 rounded-[5px] border bg-white shadow"></div>
        <div className="absolute right-5 top-[8px] w-9 h-[1px] rounded-[5px] z-20 bg-white"></div>
      </div>
      <div className="relative top-2 px-3 py-4 max-h-[250px] w-full bg-white rounded-[10px] z-[10] border-[0.5px] shadow">
        <div className="relative z-40 flex flex-col gap-4">
          <p className="font-medium text-[20px]">
            {user ? `Сайн уу, ${user?.name}` : "Тавтай морил"}
          </p>
          {!user ? (
            <div className="flex flex-col gap-2 w-full px-2">
              <Link
                href={"/auth/signin"}
                className="btn transition-colors w-full h-[32px] rounded-full flex items-center justify-center cursor-pointer"
              >
                <p className="font-medium">Нэвтрэх</p>
              </Link>
              <Link
                href={"/auth/signup"}
                className="w-full h-[32px] rounded-full flex items-center justify-center border hover:border-[#027ffe] border-[#44BAF0]  transition-colors cursor-pointer"
              >
                <p className="hover:text-[#027ffe] text-[#44BAF0] transition-colors font-medium">
                  Бүртгүүлэх
                </p>
              </Link>
            </div>
          ) : (
            <div className="flex flex-col gap-2 w-full px-2">
              <Link
                href={"/profile"}
                className="w-full h-[32px] rounded-full flex items-center justify-center border hover:border-[#027ffe] border-[#44BAF0] transition-colors cursor-pointer"
              >
                <p className="hover:text-[#027ffe] text-[#44BAF0] transition-colors font-medium">
                  Профайл
                </p>
              </Link>
              <div
                className="btn transition-colors w-full rounded-full h-[32px] flex items-center justify-center cursor-pointer"
                onClick={() => logout()}
              >
                <p className="font-medium">Гарах</p>
              </div>
              <div
                className="group flex items-center gap-1 cursor-pointer mt-3 mb-2"
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
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
