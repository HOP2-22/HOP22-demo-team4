// import { useState } from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
export default function Card({ data }) {
  const navigate = useNavigate()
  const [game , setGame] = useState("")
  setGame(data.name)
  console.log(data);
  return (
    <div className="group w-[200px] h-[310px] border border-black flex flex-col items-center"
    onClick={() =>{
      navigate(`/${game}`)
    }}
    >
      <img src={data.photo} className=" rounded-[15px]" />
      <div className="">{data.name}</div>
    </div>
  );
}
