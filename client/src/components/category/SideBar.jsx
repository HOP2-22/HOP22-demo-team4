import { useState } from "react";

import { SideBarSlider } from "./SideBarSlider";
import { SideBarPrice } from "./SideBarPrice";
import { SideBarCat } from "./SideBarCat";
import { SideBarDate } from "./SideBarDate";

import { ChevronUpIcon } from "@heroicons/react/24/solid";

export const SideBar = ({ min, max, step, currentCat, categories }) => {
  const [filter, setFilter] = useState(true);

  return (
    <div className="flex flex-col w-full md:w-[30%] md:h-[460px] lg:h-[420px] shrink bg-white z-10 mt-2 rounded-[8px] py-4 px-4">
      <div
        className={`w-full flex md:hidden items-center fill-violet-500 justify-between ${
          filter ? "" : "pb-3"
        }`}
      >
        <p className="text-[20px] font-medium ">Шүүлтүүр</p>
        <ChevronUpIcon
          className={`${filter ? "rotate-180" : ""} w-7`}
          onClick={() => setFilter((prev) => !prev)}
        />
      </div>
      <div
        className={`${filter ? "hidden" : "flex"} grow md:flex flex-col gap-12`}
      >
        <div className=" flex flex-col gap-4">
          <SideBarCat currentCat={currentCat} categories={categories} />
          <SideBarPrice />
          <SideBarDate />
        </div>
        <SideBarSlider min={min} max={max} step={step} />
      </div>
    </div>
  );
};
