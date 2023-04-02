import { useRouter } from "next/router";

import { AiOutlineShoppingCart } from "react-icons/ai";

export default function MobileNavbar({ user, logout, hamburger }) {
  const router = useRouter();

  return (
    <div
      className={`${
        hamburger ? "flex" : "hidden"
      } flex-col absolute right-5 w-[250px] h-[100px]`}
    >
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
                className="btn w-full rounded-full font-medium h-[32px] flex items-center justify-center cursor-pointer"
                onClick={() => router.push("/auth/signin")}
              >
                Sign in
              </div>
              <div
                className="w-full rounded-full border border-[#FF6900] text-[#FF6900]  hover:text-[#FA5F55] hover:border-[#FA5F55] transition-colors font-medium h-[32px] flex items-center justify-center cursor-pointer"
                onClick={() => router.push("/auth/signup")}
              >
                Join now
              </div>
            </div>
          ) : (
            <div className="flex flex-col gap-2 w-full px-2">
              <div
                className="w-full rounded-full border border-[#FF6900] text-[#FF6900]  hover:text-[#FA5F55] hover:border-[#FA5F55] transition-colors font-medium h-[32px] flex items-center justify-center cursor-pointer"
                onClick={() => router.push(`/profile`)}
              >
                Profile
              </div>
              <div
                className="btn w-full rounded-full font-medium h-[32px] flex items-center justify-center cursor-pointer"
                onClick={() => logout()}
              >
                Logout
              </div>
              <div
                className="my-2 group text-[18px] hover:text-[#FF6900] transition-colors duration-200 font-medium flex items-center gap-1 cursor-pointer"
                onClick={() => {
                  router.push("/cart");
                }}
              >
                Shipping Cart
                <span className="relative text-[20px] group-hover:text-[#FF6900] transition duration-200 scale-125 transform group-hover:translate-x-2  ">
                  <AiOutlineShoppingCart />
                  <div
                    className={`${
                      user && user?.userFavorite.length > 0 ? "flex" : "hidden"
                    } absolute -right-[9px] -top-[8px] w-[18px] h-[18px] justify-center items-center bg-[#FF6900] group-hover:bg-[#FF3131] group-hover:text-white transition-colors duration-200 rounded-full text-[13px] text-black`}
                  >
                    {user?.userFavorite.length}
                  </div>
                </span>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
