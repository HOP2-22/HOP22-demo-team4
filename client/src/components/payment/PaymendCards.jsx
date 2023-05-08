import React from "react";

import PaymentCard from "./PaymentCard";

const PaymendCards = ({ data, changeChecked, checks }) => {
  return (
    <div className="flex flex-col gap-5 mt-[30px]">
      {data?.map((item, index) => {
        return (
          <PaymentCard
            item={item}
            checks={checks}
            changeChecked={changeChecked}
            index={index}
            key={index}
          />
        );
      })}
    </div>
  );
};

export default PaymendCards;
