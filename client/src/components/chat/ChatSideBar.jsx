import React, { useContext } from "react";

import { Navbar } from "../layout/Navbar";
import { AuthContext } from "@/provider/AuthContext";
import { useRouter } from "next/router";

const ChatSideBar = ({ children, move, setMove }) => {
  return (
    <Navbar
      className={`grow w-full bg-white h-full flex relative transform transition duration-200 ${
        move ? "-translate-x-full" : "translate-x-0"
      }`}
    >
      <SideBar setMove={setMove} />
      <div className="sm:border-l border absolute top-0 left-full z-30 w-full sm:w-2/3 md:w-3/4 grow pt-[70px] h-full">
        {children}
      </div>
    </Navbar>
  );
};

export default ChatSideBar;

export const SideBar = ({ setMove }) => {
  const { push } = useRouter();
  const { user } = useContext(AuthContext);

  return (
    <div className="px-3 w-full sm:w-1/3 md:w-1/4 h-screen pt-20">
      <p className="text-2xl pb-8">Таны чатнууд :</p>
      <div className="h-full overflow-y-auto whitespace-nowrap scroll-smooth scrollbar-hide">
        <div className="flex flex-col gap-5">
          {user?.chatrooms.map((item, index) => {
            return (
              <div
                key={index}
                onClick={() => {
                  push({
                    query: {
                      id: item._id,
                    },
                  });
                  setMove(true);
                }}
                className="w-full px-8 pt-5 pb-4 bg-slate-100 sm:bg-transparent sm:hover:bg-slate-200 transition-all duration-200 rounded-[14px] group cursor-pointer"
              >
                <p className="group-hover: text-[22px] font-semibold">
                  {item?.name.substring(0, item?.name.length - 24)}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};
