import axios from "axios";
import { useEffect, useState } from "react";

import CreateCategory from "./createCategory";
import Categories from "./categories";
import Accounts from "./accounts";
import index from "@/pages/admin";
import Users from "./user";

export default function Dashboard() {
  const [showAccount, setShowAccount] = useState(Boolean);
  const [showCate, setShowCate] = useState(Boolean);
  const [showUser, setShowUser] = useState(Boolean);
  const [users, setUsers] = useState();
  const [accounts, setAccounts] = useState();
  const [categories, setCategories] = useState();

  useEffect(() => {
    const getUser = async () => {
      const user = await axios.get(`http://localhost:8000/api/v1/user`);
      setUsers(user.data.data);
    };
    const getCategory = async () => {
      const category = await axios.get(`http://localhost:8000/api/v1/category`);
      setCategories(category.data.data);
      // console.log(category.data.data);
    };
    const getAccount = async () => {
      const account = await axios.get(`http://localhost:8000/api/v1/account`);
      setAccounts(account.data.data);
      console.log(account.data.data);
    };
    getAccount(), getUser(), getCategory();
  }, []);

  return (
    <div className="grid grid-cols-12 grid-flow-col gap-2 h-[100vh]">
      <div className="col-span-3">sidebar</div>
      <div className="col-span-9 flex">
        <div className="mt-10">
          <div>
            <CreateCategory />
          </div>
        </div>
        <div className="justify-around w-[1000px]">
          <div className="flex justify-around  mt-[50px]">
            <div className="">
              <button
                onClick={() => {
                  if (showAccount == false) {
                    setShowAccount(true);
                    setShowCate(false);
                    setShowUser(false);
                  }
                }}
              >
                Accounts
              </button>
            </div>
            <div className="">
              <button
                onClick={() => {
                  if (showUser == false) {
                    setShowUser(true);
                    setShowCate(false);
                    setShowAccount(false);
                  }
                }}
              >
                User
              </button>
            </div>
            <div className="">
              <button
                onClick={() => {
                  if (showCate == false) {
                    setShowCate(true);
                    setShowAccount(false);
                    setShowUser(false);
                  }
                }}
              >
                Category
              </button>
            </div>
          </div>
          <div className="xl:ml-[140px] lg mt-5">
            <div>
              {showCate ? (
                <div>
                  {categories?.map((item, index) => {
                    return (
                      <div key={index}>
                        <Categories data={item} />
                      </div>
                    );
                  })}
                </div>
              ) : (
                <div></div>
              )}
            </div>
            <div>
              {showAccount ? (
                <div>
                  {accounts?.map((item, index) => {
                    return (
                      <div key={index}>
                        <Accounts data={item} />
                      </div>
                    );
                  })}
                </div>
              ) : (
                <div></div>
              )}
            </div>
            <div>
              {showUser ? (
                <div>
                  {users?.map((item, index) => {
                    return (
                      <div key={index}>
                        <Users data={item} />
                      </div>
                    );
                  })}
                </div>
              ) : (
                <div></div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
