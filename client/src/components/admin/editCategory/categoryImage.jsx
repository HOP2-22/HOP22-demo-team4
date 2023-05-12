import * as React from "react";

import { data } from "autoprefixer";
import axios from "axios";
import Image from "next/image";

import { useEffect, useState } from "react";

const CoverPhoto = ({ data }) => {
  const [coverPhoto, setCoverPhoto] = useState("");

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
      <div className="flex flex-col bg-[#b1b0b3] mt-[15px] border-b-2 border-black rounded-t ">
        <div className="text-sm h-4 mt-1 mb-1">Cover photo URL*</div>
        <input
          value={coverPhoto}
          onChange={(event) => {
            setCoverPhoto(event.target.value);
          }}
          className="text-2xl bg-[#b1b0b3] border-none outline-none"
        />
      </div>
    </div>
  );
};

export default CoverPhoto;
