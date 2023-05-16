import React, { useContext, useEffect, useState } from "react";

import ChatSideBar from "@/components/chat/ChatSideBar";
import { useRouter } from "next/router";
import { AuthContext } from "@/provider/AuthContext";
import { ChevronLeft } from "lucide-react";
import ChatInput from "@/components/chat/ChatInput";
import Chats from "@/components/chat/Chats";

const Chat = () => {
  const { user } = useContext(AuthContext);
  const { query, push } = useRouter();
  const [move, setMove] = useState(false);

  const [room, setRoom] = useState(null);

  useEffect(() => {
    let Room;
    if (query.id) {
      if (!user?.chatrooms.find((item) => item._id === query.id)) {
        delete query.id;
        push({
          query: query,
        });
      }
      user?.chatrooms.map((item) => {
        if (item._id === query.id) Room = item;
      });

      setRoom(Room);
    }
  }, [query]);

  if (!query.id)
    return (
      <ChatSideBar
        move={move}
        setMove={setMove}
        className={"flex flex-col justify-between"}
      >
        <div className="w-full h-full flex items-center justify-center">
          <p className="text-[18px] font-medium text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-red-500">
            Чатаа сонгоно уу
          </p>
        </div>
      </ChatSideBar>
    );

  return (
    <ChatSideBar
      move={move}
      setMove={setMove}
      className={"h-full w-full flex flex-col justify-between"}
    >
      <div className="flex items-center bg-green-100">
        <div
          className="w-10 h-10 flex items-center justify-center cursor-pointer"
          onClick={() => {
            delete query.id;
            push({
              query: {
                ...query,
              },
            });
            setMove(false);
          }}
        >
          <ChevronLeft size={30} className="text-indigo-600" />
        </div>
        <div className="w-full flex justify-center md:py-4">
          <p className="w-4/5 md:w-full text-center text-[20px]">
            {room?.name}
          </p>
        </div>
      </div>
      <div className="h-[90%] flex flex-col">
        <Chats chats={room?.messages} />
        <ChatInput roomId={query.id} />
      </div>
    </ChatSideBar>
  );
};

export default Chat;
