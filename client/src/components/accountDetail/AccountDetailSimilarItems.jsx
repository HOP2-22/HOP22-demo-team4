import React from "react";

const AccountDetailSimilarItems = ({ category }) => {
  return (
    <div className="pt-10">
      <p className="text-[22px]">Төстэй бараанууд:</p>
      <div className="bg-red-100 mt-[20px] w-full h-full overflow-x-auto whitespace-nowrap scroll-smooth scrollbar-hide relative flex gap-10">
        {new Array(10).fill(false).map((item, index) => {
          return (
            <>
              <div className="w-[300px] h-[40px] bg-green-200"></div>
            </>
          );
        })}
      </div>
    </div>
  );
};

export default AccountDetailSimilarItems;
