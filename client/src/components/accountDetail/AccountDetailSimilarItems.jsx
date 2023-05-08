import React, { useEffect, useState } from "react";
import { CategoryCard } from "../category/CategoryCard";

const AccountDetailSimilarItems = ({ accounts, slugify, title }) => {
  return (
    <div className="pt-10">
      <p className="text-[22px]">{title}</p>
      {accounts.length !== 0 ? (
        <div className="mt-[20px]  h-full overflow-x-auto whitespace-nowrap scroll-smooth scrollbar-hide relative flex gap-10">
          {accounts?.map((item, index) => {
            return (
              <div>
                <CategoryCard
                  data={item}
                  slugify={slugify}
                  className={"w-[300px] sm:w-[450px]"}
                />
              </div>
            );
          })}
        </div>
      ) : (
        <p className="text-[26px] my-2">Энд бараа алга байна.</p>
      )}
    </div>
  );
};

export default AccountDetailSimilarItems;
