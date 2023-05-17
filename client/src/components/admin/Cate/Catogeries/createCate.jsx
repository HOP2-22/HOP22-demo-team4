import { useState } from "react";
import axios from "axios";
export default function CreateCategory() {
  const [cate, setCate] = useState(Boolean);
  const [name, setName] = useState();
  const [photo, setPhoto] = useState();
  const [cover, setCover] = useState();
  const [type, setType] = useState("None");
  const types = [
    { name: "None", tp: "" },
    { name: "Sandbox", tp: "sandBox" },
    { name: "Battle Royal", tp: "BR" },
    { name: "Multiplayer online battle arena", tp: "MOBA" },
    { name: "Sports", tp: "sports" },
    { name: "Card game", tp: "CG" },
    { name: "Action adventure", tp: "AA" },
    { name: "Strategy game", tp: "strategy" },
    { name: "Royal playing game", tp: "rpg" },
  ];
  const createCate = async () => {
    try {
      const hi = await axios.post(`http://localhost:8000/api/v1/category`, {
        name: name,
        photo: photo,
        coverPhoto: cover,
        owner: "6432dc43110e5800093aedc1",
      });
      console.log(hi);
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div className="first-letter:border rounded-2xl px-5 py-[30px] md:text-3xl lg:text-3xl bg-white mr-0">
      <div className="grid grid-cols-12 grid-rows-2">
        <div className="col-span-8 grid grid-cols-2 row-span-1 ">
          <div>
            <div className="">Category name</div>
            <input
              type="url"
              placeholder="Cover Photo"
              className=" border  rounded-xl w-full"
              value={name}
              onChange={(event) => {
                setName(event.target.value);
              }}
            />
          </div>
          <div className="col-span-1 flex flex-col">
            <div>Type</div>
            <select
              value={type}
              onChange={(event) => {
                setType(event.target.value);
              }}
              className="text-base border rounded-xl w-full h-full"
            >
              {types?.map((item, index) => (
                <option className="" key={index} value={item.name}>
                  {item.name}
                </option>
              ))}
            </select>
          </div>
        </div>
        <div className="col-span-8 grid grid-cols-2">
          <div className="col-span-1 flex flex-col">
            <div className="">Image URL</div>
            <input
              type="url"
              placeholder="Image URL"
              className="border rounded-xl w-full h-full"
              value={photo}
              onChange={(event) => {
                setPhoto(event.target.value);
              }}
            />
          </div>
          <div className="col-span-1 flex flex-col">
            <div>Cover Image URL</div>
            <input
              type="url"
              placeholder="Cover Photo"
              className=" border rounded-xl"
              value={cover}
              onChange={(event) => {
                setCover(event.target.value);
              }}
            />
          </div>
        </div>
        <button
          className="ml-8 mt-3.5 h-[50px] bg-blue-500 rounded-2xl w-[100px] text-white"
          onClick={() => {
            createCate();
          }}
        >
          Add
        </button>
      </div>
    </div>
  );
}