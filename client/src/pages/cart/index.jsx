import axios from "axios";
import Link from "next/link";
import { useContext, useEffect, useState } from "react";
import { useRouter } from "next/router";
import { toast } from "react-hot-toast";

import { Container } from "@/components/Container";
import { Layout } from "@/components/layout/Layout";
import { CartTable } from "@/components/cart/CartTable";
import { Guard } from "@/components/Guard";
import { AuthContext } from "@/provider/AuthContext";

import { BsFillTrash3Fill } from "react-icons/bs";

const Cart = () => {
  const { user, setLoading, setUser } = useContext(AuthContext);
  const { push } = useRouter();

  const [items, setItems] = useState([]);

  const clear = async () => {
    setItems([]);
    setUser({ ...user, userFavorite: [] });
    setLoading(true);

    try {
      await axios.post(`${process.env.BASE_URL}/account/clear`, {
        userId: user?._id,
      });
    } catch (error) {
      push("/500");
    }

    setLoading(false);
  };

  const removeItemHandler = async (index, item) => {
    const updatedItems = [...items];
    updatedItems.splice(index, 1);
    setItems(updatedItems);

    setLoading(true);

    try {
      await axios.post(`${process.env.BASE_URL}/account/remove`, {
        accountId: item?._id,
        userId: user?._id,
      });
    } catch (error) {
      push("/500");
    }

    setLoading(false);
  };

  const notification = () => {
    toast((t) => (
      <span>
        Сагсийг хоослохдоо итгэлтэй байна уу
        <button
          onClick={() => {
            clear();
            toast.dismiss(t.id);
          }}
          className="py-1 ml-2 px-3 rounded-[5px] bg-[#44BAF0] text-white"
        >
          Зөвшөөрөх
        </button>
        <button
          onClick={() => {
            toast.dismiss(t.id);
          }}
          className="py-1 ml-2 px-3 rounded-[5px] bg-red-500 text-white"
        >
          Татгалзах
        </button>
      </span>
    ));
  };

  useEffect(() => {
    setItems(user?.userFavorite || []);
  }, [user]);

  return (
    <Guard role="user">
      <Layout title={"Сагс"}>
        <Container className="px-4 sm:px-0 pt-[90px]">
          <p className="mb-4 text-[26px] font-semibold">Сагс</p>
          {items?.length === 0 ? (
            <div className="text-[18px]">
              Сагс хоосон байна.
              <Link href="/" className="underline underline-offset-4 pl-1">
                Нүүр хуудас руу буцах
              </Link>
            </div>
          ) : (
            <CartTable items={items} removeItemHandler={removeItemHandler} />
          )}
          <div
            className={`${
              items?.length === 0 ? "hidden" : "flex"
            } w-full justify-end lg:justify-center pt-6  mr-10 lg:mr-0 lg:ml-32`}
          >
            <div
              className="px-5 py-[10px] rounded-[8px] text-black flex gap-1 items-center bg-[#a1d4e8] cursor-pointer hover:bg-[#c8e4ee] transition-colors "
              onClick={() => notification()}
            >
              <span>
                <BsFillTrash3Fill className="text-[18px]" />
              </span>
              Сагсийг хоослох
            </div>
          </div>
        </Container>
      </Layout>
    </Guard>
  );
};

export default Cart;
