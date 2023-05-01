import Image from "next/image";
import React from "react";

const AuthBgCover = () => {
  const image =
    "https://res.cloudinary.com/dymjjmeyc/image/upload/v1679913069/AccountTrader/0x0_zfidbn.jpg";

  return (
    <Image
      src={image}
      width={400}
      height={400}
      className="object-cover object-center w-full h-full"
      alt=""
    />
  );
};

export default AuthBgCover;
