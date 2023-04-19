import { useState } from "react";

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
        type: type[i].tp,
      });
      console.log(hi);
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div>
      <div>Add Category</div>
      <div>
        <button
          className="text-3xl bg-blue-500 rounded-2xl w-[100px] text-white"
          onClick={() => {
            if (cate == false) {
              setCate(true);
              console.log("");
            } else {
              setCate(false);
            }
          }}
        >
          +
        </button>
      </div>
      <div>
        {cate ? (
          <div className="flex h-screen justify-center items-center absolute">
            <div className="border w-[500px] flex flex-col  h-[400px]">
              <div className="text-xl">Add Catergory</div>
              <input
                placeholder="Name"
                className="h-[40px] text-xl"
                value={name}
                onChange={(event) => {
                  setName(event.target.value);
                }}
              />
              <input
                type="url"
                placeholder="Image URL"
                className="h-[40px] text-xl"
                value={photo}
                onChange={(event) => {
                  setPhoto(event.target.value);
                }}
              />
              <input
                type="url"
                placeholder="Cover Photo"
                className="h-[40px] text-xl"
                value={cover}
                onChange={(event) => {
                  setCover(event.target.value);
                }}
              />
              <select
                value={type}
                onChange={(event) => {
                  setType(event.target.value);
                }}
              >
                {types?.map((item, index) => (
                  <option key={index} value={item.name}>
                    {item.name}
                  </option>
                ))}
              </select>
              <button
                className="text-3xl bg-blue-500 rounded-2xl w-[100px] text-white"
                onClick={() => {
                  createCate();
                }}
              >
                Add
              </button>
            </div>
          </div>
        ) : (
          <div></div>
        )}
      </div>
    </div>
  );
}
