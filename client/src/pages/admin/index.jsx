import axios from "axios";
import { useEffect, useState } from "react";
import index from "../profile";

import Users from "@/components/admin/user";
import Accounts from "@/components/admin/accounts";
import Categories from "@/components/admin/categories";

export default function dashboard() {
  const [createCategory, setCreateCateory] = useState(Boolean);
  const [name, setName] = useState();
  const [photo, setPhoto] = useState();
  const [cover, setCover] = useState();
  const [type, setType] = useState("None");
  const [accounts, setAccounts] = useState([]);
  const [account, setAccount] = useState(Boolean);
  const [categories, setCategories] = useState([]);
  const [category, setCategory] = useState(Boolean);
  const [users, setUsers] = useState([]);
  const [user, setUser] = useState(Boolean);

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
  const i = types.findIndex((item) => item.name === type);
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
  useEffect(() => {
    const getUser = async () => {
      const user = await axios.get(`http://localhost:8000/api/v1/user`);
      setUsers(user.data.data);
      console.log(user.data.data);
    };
    const getCategory = async () => {
      const category = await axios.get(`http://localhost:8000/api/v1/category`);
      setCategories(category.data.data);
      // console.log(category.data.data);
    };
    const getAccount = async () => {
      const account = await axios.get(`http://localhost:8000/api/v1/account`);
      setAccounts(account.data.data);
      // console.log(account.data.data);
    };
    getAccount(), getUser(), getCategory();
  }, []);

  return (
    <div className="grid grid-cols-12 grid-flow-col gap-2 h-[100vh]">
      <div className="col-span-3">sidebar</div>
      <div className="col-span-9 flex">
        <div className="mt-10">
          <div>
            <div>Add Category</div>
            <div>
              <button
                className="text-3xl bg-blue-500 rounded-2xl w-[100px] text-white"
                onClick={() => {
                  if (createCategory == false) {
                    setCreateCateory(true);
                    console.log("");
                  } else {
                    setCreateCateory(false);
                  }
                }}
              >
                +
              </button>
            </div>
            <div>
              {createCategory ? (
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
        </div>
        <div className="flex justify-around w-[1000px] mt-[50px]">
          <div className="">
            <button>Accounts</button>
          </div>
          <div className="">
            <button> User</button>
          </div>
          <div className="">
            <button>Category</button>
          </div>
        </div>
      </div>
    </div>
  );
}
