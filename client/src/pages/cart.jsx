import axios from "axios";
import Link from "next/link";

import Container from "@/components/Container";
import Layout from "@/components/layout/Layout";

import { BsFillTrash3Fill } from "react-icons/bs";
import { XCircleIcon } from "@heroicons/react/24/solid";
import { useContext, useState } from "react";
import { AuthContext } from "@/provider/AuthContext";

export default function cart({ data }) {
  const { user } = useContext(AuthContext);
  const [items, setItems] = useState(data);

  const clear = async () => {
    setItems([]);
    try {
      // await axios.post("http://localhost:8000/api/v1/account/clfavorite", {
      //   userId: user?._id,
      // });
    } catch (error) {}
  };

  return (
    // <Guard>
    <Layout title={"Shopping Cart"}>
      <Container className="px-4 sm:px-0 pt-[90px] pb-[150px]">
        <p className="mb-4 text-[26px] font-semibold">Shopping Cart</p>
        {items.length === 0 ? (
          <div className="text-[18px]">
            Cart is empty{" "}
            <Link href="/" className="underline underline-offset-4 pl-1">
              go home page
            </Link>
          </div>
        ) : (
          <div className="lg:grid lg:grid-cols-4 md:gap-5">
            <div className="bg-white p-5 rounded-[10px] overflow-x-scroll lg:col-span-3">
              <div className="min-w-full">
                <div className="w-full flex sm:grid sm:grid-cols-10 border-b">
                  <p className="col-span-4 pl-5 py-5 text-left min-w-[180px]">
                    Item
                  </p>
                  <p className="col-span-2 p-5 text-right">Price</p>
                  <p className="col-span-2 p-5 text-center">Action</p>
                  <p className="col-span-2 p-5 text-right">Purchase</p>
                </div>
                <div>
                  {items?.map((item, index) => {
                    return (
                      <div
                        key={index}
                        className="flex sm:grid sm:grid-cols-10 border-b items-center"
                      >
                        <Link
                          href={`/${item?.slugify}/${item?.id}`}
                          className="col-span-4 min-w-[180px]"
                        >
                          <img
                            src={item.mainImage}
                            alt={item.name}
                            width={200}
                            className=" object-cover my-4"
                          />
                        </Link>
                        <div className="p-5 col-span-2 min-w-[130px] text-right text-[20px]">
                          {item.price}₮
                        </div>
                        <div className="col-span-2 max-w-full min-w-[100px] p-5 flex justify-center">
                          <button className="">
                            <XCircleIcon
                              className="w-6 fill-[#FF6900] cursor-pointer"
                              onClick={() => {
                                removeItemHandler(item);
                              }}
                            />
                          </button>
                        </div>
                        <div className="col-span-2 flex justify-end p-5">
                          <div className="px-4 py-2 rounded-[8px] btn cursor-pointer">
                            Buy <span></span>
                          </div>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>
          </div>
        )}
        <div
          className={`${
            items.length === 0 ? "hidden" : "flex"
          } w-full justify-end lg:justify-center pt-6  mr-10 lg:mr-0 lg:ml-32`}
        >
          <div
            className="px-5 py-[10px] rounded-[8px] text-black flex gap-1 items-center bg-[#a1d4e8] cursor-pointer hover:bg-[#c8e4ee] transition-colors duration-200"
            onClick={() => clear()}
          >
            <span>
              <BsFillTrash3Fill className="text-[18px]" />
            </span>
            Empty cart
          </div>
        </div>
      </Container>
    </Layout>
    // </Guard>
  );
}

export async function getServerSideProps(context) {
  const res = await axios.get("http://localhost:8000/api/v1/category/accounts");

  return {
    props: {
      data: res.data.data,
    },
  };
}
