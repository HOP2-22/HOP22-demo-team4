import { AuthContext } from "@/provider/AuthContext";
import React, { useContext } from "react";

const Chats = ({ chats }) => {
  const { user } = useContext(AuthContext);

  return (
    <div className="w-full h-full bg-red-100 flex flex-col gap-2 justify-end px-3 ">
      <div className="w-full h-full flex flex-col gap-2 justify-end overflow-y-auto whitespace-nowrap scroll-smooth scrollbar-hide">
        {chats?.map((item, index) => {
          return (
            <>
              <div
                key={index}
                className={`flex ${
                  user?._id === item?.writer ? "self-end" : ""
                }`}
              >
                <p
                  className={`px-10 max-w-[330px] xsm:max-w-[380px] text-wrap sm:max-w-[450px] md:max-w-[380px] lg:max-w-[500px] xl:max-w-[600px] p-4 rounded-[15px] bg-gray-200 overflow-hidden`}
                >
                  {item?.text}
                </p>
              </div>
            </>
          );
        })}
      </div>
    </div>
  );
};

export default Chats;
