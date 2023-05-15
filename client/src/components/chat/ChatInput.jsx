import { AuthContext } from "@/provider/AuthContext";
import { PaperAirplaneIcon } from "@heroicons/react/24/solid";
import axios from "axios";
import React, { useContext, useState } from "react";

const ChatInput = ({ roomId }) => {
  const { user } = useContext(AuthContext);
  const [value, setValue] = useState("");

  const sendMessage = async () => {
    try {
      await axios.post("http://localhost:8000/api/v1/message", {
        text: value,
        chatroom: roomId,
        writer: user?._id,
      });

      setValue("");
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="w-full h-[5%] flex gap-4 lg:gap-6 items-center px-5 mb-3 mt-10">
      <input
        type="text"
        value={value}
        onChange={(event) => setValue(event.target.value)}
        className="w-full border-2 rounded-[20px] py-2 text-[20px] px-5"
        onKeyDown={(event) => {
          if (event.key === "Enter") sendMessage();
        }}
      />
      <PaperAirplaneIcon
        className="w-10 -rotate-45 cursor-pointer text-indigo-600 -translate-y-1"
        onClick={sendMessage}
      />
    </div>
  );
};

export default ChatInput;
