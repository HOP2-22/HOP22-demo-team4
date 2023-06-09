import React, { useContext, useState } from "react";
import axios from "axios";
import { toast } from "react-hot-toast";
import { useRouter } from "next/router";

import { Layout } from "@/components/layout/Layout";
import { Container } from "@/components/Container";
import Add_ItemTitle from "@/components/add_item/Add_ItemTitle";
import Add_ItemChooseCategory from "@/components/add_item/Add_ItemChooseCategory";
import { AuthContext } from "@/provider/AuthContext";
import { Guard } from "@/components/Guard";
import Add_ItemButton from "@/components/add_item/Add_ItemButton";
import Add_ItemTitleAndPrice from "@/components/add_item/Add_ItemTitleAndPrice";
import Add_ItemImages from "@/components/add_item/Add_ItemImages";
import Add_ItemDescription from "@/components/add_item/Add_ItemDescription";

const Add_Item = ({ categories }) => {
  const { push } = useRouter();

  const { user } = useContext(AuthContext);

  const [infoAccount, setInfoAccount] = useState({
    title: "",
    price: 1,
    catId: "",
    mainImageUrl: "",
  });

  const [descs, setDescs] = useState([
    {
      title: "",
      desc: "",
    },
  ]);

  const [images, setImages] = useState([]);

  const add_item = async () => {
    if (infoAccount.catId === "") {
      toast.error("Тоглоомоо сонгоно уу.");
      return;
    }

    if (infoAccount.catId === null) {
      toast.error("Тоглоомоо сонгоно уу.");
      return;
    }

    if (infoAccount.catId === undefined) {
      toast.error("Тоглоомоо сонгоно уу.");
      return;
    }

    if (infoAccount.title.length < 10) {
      return toast.error("Гарчиг дooд талдаа  10 тэмдэгтээс бүрдэнэ.");
    } else if (infoAccount.title.length > 250) {
      return toast.error("Гарчиг дээд талдаа  250 тэмдэгтээс бүрдэнэ.");
    }

    if (infoAccount.price === 0) return toast.error("Үнэ ээ оруулж өгнө үү.");

    if (infoAccount.mainImageUrl.length === 0)
      return toast.error("Гол зураг аа оруулна уу.");

    if (descs.length === 0)
      return toast.error("Багадаа 1 дэлгэрэнгүй мэдээлэл оруулж өгнө үү.");

    if (descs.slice(-1)[0].title === "" || descs.slice(-1)[0].desc === "") {
      return toast.error("Сүүлийн дэлгэрэнгүй хоосон байна.");
    }

    try {
      await axios.post(`${process.env.BASE_URL}/account`, {
        title: infoAccount.title,
        mainImage: infoAccount.mainImageUrl,
        images: images,
        price: infoAccount.price,
        descriptions: descs,
        category: infoAccount.catId,
        owner: user._id,
        updatedUser: user._id,
      });

      push(`/`);

      toast.success("Амжилттай зар нэмэгдлээ.");
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <Guard role="user">
      <Layout title={"Add_item"}>
        <Container className={"pt-[80px] px-5 sm:px-0 grid grid-cols-12 gap-5"}>
          <Add_ItemTitle
            infoAccount={infoAccount}
            setInfoAccount={setInfoAccount}
          />
          <Add_ItemChooseCategory
            data={categories}
            choosenCat={infoAccount}
            setChoosenCatId={setInfoAccount}
          />
          <Add_ItemTitleAndPrice
            infoAccount={infoAccount}
            setInfoAccount={setInfoAccount}
            images={images}
            setImages={setImages}
          />
          <Add_ItemImages
            infoAccount={infoAccount}
            setInfoAccount={setInfoAccount}
            images={images}
            setImages={setImages}
          />
          <Add_ItemDescription descs={descs} setDescs={setDescs} />
          <Add_ItemButton func={add_item} />
        </Container>
      </Layout>
    </Guard>
  );
};

export default Add_Item;

export async function getServerSideProps() {
  try {
    const res = await fetch(`${process.env.BASE_URL}/category`);

    const data = await res.json();

    return {
      props: {
        categories: data.data,
      },
    };
  } catch (error) {
    return {
      redirect: {
        destination: "/",
      },
    };
  }
}
