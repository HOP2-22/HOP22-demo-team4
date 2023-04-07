import { Slider } from "@mui/material";
import { useRouter } from "next/router";
import { useState } from "react";

export const SideBar = ({ min, max, step, currentCat, categories }) => {
  const { query, push, asPath } = useRouter();

  const priceHandler = (event) => {
    delete query.slugify;
    delete query.sort;

    if (event.target.value === "increase") {
      push({
        pathname: asPath.split("?")[0],
        query: {
          sort: "price",
          ...query,
        },
      });
    }
    if (event.target.value === "none") {
      push({
        pathname: asPath.split("?")[0],
        query: {
          ...query,
        },
      });
    }
    if (event.target.value === "decrease") {
      push({
        pathname: asPath.split("?")[0],
        query: {
          sort: "-price",
          ...query,
        },
      });
    }
  };

  const minDistance = step;
  const [sliderValue, setSliderValue] = useState([min, max]);

  function sliderText(value) {
    return `${value}`;
  }

  const sliderHandle = (event, newValue, activeThumb) => {
    console.log(event.target.value);

    if (!Array.isArray(newValue)) {
      return;
    }

    if (newValue[1] - newValue[0] < minDistance) {
      if (activeThumb === 0) {
        const clamped = Math.min(newValue[0], 100 - minDistance);
        setSliderValue([clamped, clamped + minDistance]);
      } else {
        const clamped = Math.max(newValue[1], minDistance);
        setSliderValue([clamped - minDistance, clamped]);
      }
    } else {
      setSliderValue(newValue);
    }
  };

  return (
    <div className="hidden md:flex flex-col gap-5 col-span-3 bg-white h-[230px] z-10 mt-2 rounded-[8px] py-4 px-4">
      <div className="">
        <div className="flex flex-col gap-2">
          <p>Category:</p>
          <select
            className="w-full border border-black hover:border-[#44BAF0] rounded-[5px] text-[12px] py-[2px] cursor-pointer"
            value={currentCat}
            onChange={(event) => push(`/${event.target.value}`)}
          >
            <option key={currentCat} value={currentCat}>
              {currentCat}
            </option>
            {categories?.map((item, index) => (
              <option key={index} value={item.slugify}>
                {item.name}
              </option>
            ))}
          </select>
        </div>
        <div className="flex flex-col gap-2">
          <p>Price:</p>
          <select
            className="w-full border border-black hover:border-[#44BAF0] rounded-[5px] text-[12px] py-[2px] cursor-pointer"
            value={
              query.sort === "-price"
                ? "decrease"
                : query.sort === "price"
                ? "increase"
                : "none"
            }
            onChange={priceHandler}
          >
            <option key={"none"} value={"none"}>
              none
            </option>
            <option key={"increase"} value={"increase"}>
              increase
            </option>
            <option key={"decrease"} value={"decrease"}>
              decrease
            </option>
          </select>
        </div>
      </div>
      <div className="">
        <Slider
          getAriaLabel={() => "Minimum distance shift"}
          value={sliderValue}
          onChange={sliderHandle}
          valueLabelDisplay="auto"
          getAriaValueText={sliderText}
          disableSwap
          min={min}
          step={1}
          max={max}
        />
      </div>
    </div>
  );
};
