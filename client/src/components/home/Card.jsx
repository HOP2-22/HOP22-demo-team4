// import { useState } from "react";

export default function Card({ data }) {
  console.log(data);
  return (
    <div className="group w-[200px] overflow-hidden h-[310px] ">
      <img src={data.photo} className=" rounded-[15px]" />
      <div className="">{data.name}</div>
    </div>
  );
}
