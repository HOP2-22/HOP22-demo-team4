import * as React from "react";

import { data } from "autoprefixer";
import axios from "axios";
import Image from "next/image";

import { useEffect, useState } from "react";

const CoverPhoto = ({ data }) => {
  const [coverPhoto, setCoverPhoto] = useState("");
  const [changer , setChanger] = useState(false)

  const onFocus = () => setChanger(true)
  const onBlur = () => setChanger(false)

  useEffect(() => {
    const getDataInfo = () => {
      setCoverPhoto(data.coverPhoto);
    };
    getDataInfo();
  }, []);

  return (
    <div className="h-full w-[640px]">
      <Image
        src={coverPhoto}
        width={300}
        height={10}
        alt="pic"
        className="w-full h-[400px]"
      />
      <div className={`flex flex-col bg-zinc-300 mt-[15px] border-b-2 border-black rounded-t-lg ${changer && "border-b-blue-400"} `}>
        <div className={`text-sm h-4 mt-1 mb-1 ${changer && "text-blue-400"}`}>Cover photo URL*</div>
        <input
        onFocus={onFocus}
        onBlur={onBlur}
          value={coverPhoto}
          onChange={(event) => {
            setCoverPhoto(event.target.value);
          }}
          className="text-2xl bg-zinc-300 border-none outline-none"
        />
      </div>
    </div>
  );
};

export default CoverPhoto;
