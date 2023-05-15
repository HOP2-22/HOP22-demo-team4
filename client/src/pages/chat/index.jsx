import React, { useContext, useEffect, useState } from "react";

import ChatSideBar from "@/components/chat/ChatSideBar";
import { useRouter } from "next/router";
import { AuthContext } from "@/provider/AuthContext";
import { ChevronLeft } from "lucide-react";

const Chat = () => {
  const { user } = useContext(AuthContext);
  const { query, push } = useRouter();
  const [move, setMove] = useState(false);

  const [room, setRoom] = useState(null);

  useEffect(() => {
    let Room;
    if (query.id) {
      user?.chatrooms.map((item) => {
        if (item._id === query.id) Room = item;
      });

      console.log(Room);
      setRoom(Room);
    }
  }, [query]);

  return (
    <ChatSideBar move={move} setMove={setMove}>
      <div className="flex items-center">
        <div
          className="w-10 h-10 flex items-center justify-center"
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
        <div className="w-full flex justify-center">
          <p className="w-3/5 text-center">{room?.name}</p>
        </div>
      </div>
      <div className="w-full h-full bg-red-300 flex justify-center items-center">
        {}
      </div>
    </ChatSideBar>
  );
};

export default Chat;
