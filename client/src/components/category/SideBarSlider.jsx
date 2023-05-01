import { useState } from "react";

import { Slider } from "@mui/material";
import { useRouter } from "next/router";

export const SideBarSlider = ({ min, max, step }) => {
  const { push, asPath, query } = useRouter();

  const minDistance = step;
  const [sliderValue, setSliderValue] = useState([
    query.min ? query.min : min,
    query.max ? query.max : max,
  ]);

  const sliderHandle = (event, newValue, activeThumb) => {
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

  const handleSliderChangeCommitted = () => {
    delete query.min;
    delete query.max;
    delete query.page;

    push({
      path: asPath.split("?")[0],
      query: {
        min: sliderValue[0],
        max: sliderValue[1],
        ...query,
      },
    });
  };

  return (
    <div className="w-full">
      <p className="pb-3 pl-1">Аккаунтийн үнийн хүрээ</p>
      <div className="w-full flex flex-col lg:flex-row items-start lg:items-center lg:justify-between px-[3px] pb-2 lg:pb-0">
        <p>Багадаа:{sliderValue[0]}</p>
        <p>Ихдээ:{sliderValue[1]}</p>
      </div>
      <div className="w-full px-3">
        <Slider
          getAriaLabel={() => "Minimum distance"}
          value={sliderValue}
          onChange={sliderHandle}
          onChangeCommitted={handleSliderChangeCommitted}
          valueLabelDisplay="auto"
          disableSwap
          min={min}
          step={step}
          max={max}
          sx={{ color: "#44BAF0" }}
        />
      </div>
    </div>
  );
};
