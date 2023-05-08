import Image from "next/image";
import React from "react";

import { Check } from "lucide-react";

const PaymentCard = ({ item, index, changeChecked, checks }) => {
  return (
    <div
      className={`py-2 px-3 rounded-[10px]  flex justify-between items-center transition-colors duration-200 ${
        checks[index] ? "bg-black/50" : "border border-black/50"
      }`}
    >
      <div className="flex gap-8 items-center">
        <Image
          width={40}
          height={40}
          alt={`payment ${item?.name}`}
          src={item?.image}
          className="object-center object-cover w-10 h-10 rounded-[8px]"
        />
        <p
          className={`text-[18px] font-semibold ${
            checks[index] ? "text-white" : ""
          }`}
        >
          {item?.name}
        </p>
      </div>
      <div
        className={`w-7 h-7 rounded-[8px] bg-[#027ff] border-2 border-[#027ffe] ${
          checks[index] ? "bg-[#027ffe]" : ""
        }`}
        onClick={() => changeChecked(index)}
      >
        <Check className={`${checks[index] ? "text-white" : "hidden"} `} />
      </div>
    </div>
  );
};

export default PaymentCard;
