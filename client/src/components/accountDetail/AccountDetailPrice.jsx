import React, { useContext } from "react";
import axios from "axios";
import { toast } from "react-hot-toast";
import { useRouter } from "next/router";

import { AuthContext } from "@/provider/AuthContext";

const AccountDetailPrice = ({ data, price }) => {
  const { user, setUser } = useContext(AuthContext);

  const { push } = useRouter();

  const addCart = async () => {
    if (data.owner._id === user._id)
      return toast.error("Та өөрийнхөө барааг сагсанд нэмж чадахгүй");

    if (!user) return toast.error("Сагсанд нэмэхийн тулд эхлээд нэвтэрнэ үү.");

    if (data.sold) return toast.error("Энэ бараа аль хэдийн зарагдсан байна.");

    const isOkey = user.userFavorite.some((item) => {
      return item?._id === data._id;
    });

    if (isOkey) return toast.error("Энэ бараа аль хэдийн нэмэгдсэн байна.");

    setUser({ ...user, userFavorite: [...user.userFavorite, data] });
    try {
      await axios.post("http://localhost:8000/api/v1/account/add", {
        userId: user?._id,
        accountId: data?._id,
      });

      push("/cart");
    } catch (error) {
      console.log(error);
    }
  };

  const buy = () => {
    if (data.owner._id === user._id)
      return toast.error("Та өөрийнхөө барааг худалдаж авч чадахгүй");

    if (!user) return toast.error("Худалдаж авахийн тулд эхлээд нэвтэрнэ үү.");

    if (data.sold) return toast.error("Энэ бараа аль хэдийн зарагдсан байна.");

    push(`/payment?d=${data?._id}`);
  };

  return (
    <div className="mt-10">
      <p className="text-[28px] font-medium">
        Үнэ:
        <span className="ml-[5px] bg-clip-text text-transparent bg-gradient-to-b from-pink-500 to-violet-500">{`${price}`}</span>
      </p>
      <div className="w-full mt-[25px]">
        <div className="grid grid-cols-2 gap-2">
          <div
            className="w-full bg-[#027ffe] hover:bg-[#027fcf] transition-colors duration-200 cursor-pointer text-white flex justify-center rounded-[8px] py-[10px] font-medium"
            onClick={() => addCart()}
          >
            Сагсанд хийх
          </div>
          <div
            className="w-full bg-[#44BAF0] hover:bg-[#40abdd] transition-colors duration-200 cursor-pointer text-white flex justify-center rounded-[8px] py-[10px] font-medium"
            onClick={() => buy()}
          >
            Худалдаж авах
          </div>
        </div>
      </div>
    </div>
  );
};

export default AccountDetailPrice;
