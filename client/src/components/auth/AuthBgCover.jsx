import React from "react";

const AuthBgCover = () => {
  const image =
    "https://res.cloudinary.com/dymjjmeyc/image/upload/v1679913069/AccountTrader/0x0_zfidbn.jpg";

  return (
    <img
      src={image}
      width={1000}
      height={1000}
      className="object-cover object-center w-full h-full"
      alt=""
    />
  );
};

export default AuthBgCover;
