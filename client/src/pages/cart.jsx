import axios from "axios";
import Link from "next/link";
import { useContext, useState } from "react";
import { toast } from "react-hot-toast";

import { Container } from "@/components/Container";
import { Layout } from "@/components/layout/Layout";
import { CartTable } from "@/components/cart/CartTable";
import { AuthContext } from "@/provider/AuthContext";

import { BsFillTrash3Fill } from "react-icons/bs";
import { BooleanContext } from "@/provider/BooleanContext";
import { useRouter } from "next/router";

const Cart = () => {
  const { user } = useContext(AuthContext);
  const { setLoading } = useContext(BooleanContext);
  const { push } = useRouter();

  const [items, setItems] = useState(user?.userFavorite);

  const clear = async () => {
    setItems([]);
    // setLoading(true);
    // try {
    //   await axios.post("http://localhost:8000/api/v1/account/clfavorite", {
    //     userId: user?._id,
    //   });
    // } catch (error) {
    //   push("/500")
    // }
    // setLoading(false);
  };

  const removeItemHandler = async (index, item) => {
    const updatedItems = [...items];
    updatedItems.splice(index, 1);
    setItems(updatedItems);
    // setLoading(true);
    // try {
    //   await axios.post("http://localhost:8000/api/v1/account/refavorite", {
    //     accountId: item?._id,
    //     userId: user?._id,
    //   });
    // } catch (error) {
    //   push("/500")
    // }
    // setLoading(false);
  };

  const notification = () => {
    toast((t) => (
      <span>
        Do you want clear all
        <button
          onClick={() => {
            clear();
            toast.dismiss(t.id);
          }}
          className="py-1 ml-2 px-3 rounded-[5px] bg-[#44BAF0] text-white"
        >
          Yes
        </button>
        <button
          onClick={() => {
            toast.dismiss(t.id);
          }}
          className="py-1 ml-2 px-3 rounded-[5px] bg-red-500 text-white"
        >
          No
        </button>
      </span>
    ));
  };

  return (
    // <Guard>
    <Layout title={"Shopping Cart"}>
      <Container className="px-4 sm:px-0 pt-[90px]">
        <p className="mb-4 text-[26px] font-semibold">Shopping Cart</p>
        {items.length === 0 ? (
          <div className="text-[18px]">
            Cart is empty
            <Link href="/" className="underline underline-offset-4 pl-1">
              go home page
            </Link>
          </div>
        ) : (
          <CartTable items={items} removeItemHandler={removeItemHandler} />
        )}
        <div
          className={`${
            items.length === 0 ? "hidden" : "flex"
          } w-full justify-end lg:justify-center pt-6  mr-10 lg:mr-0 lg:ml-32`}
        >
          <div
            className="px-5 py-[10px] rounded-[8px] text-black flex gap-1 items-center bg-[#a1d4e8] cursor-pointer hover:bg-[#c8e4ee] transition-colors "
            onClick={() => notification()}
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
};

export default Cart;
