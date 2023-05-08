import React from "react";

const PaymentButton = ({ buy }) => {
  return (
    <div className="flex justify-end">
      <button
        onClick={() => buy()}
        className="w-full sm:w-auto shrink-0 py-[10px] px-20 rounded-[10px] bg-[#027ffe] hover:bg-[#44BAF0] cursor-pointer transition-colors duration-200 mt-[40px]"
      >
        <p className="text-white">Төлөх</p>
      </button>
    </div>
  );
};

export default PaymentButton;
