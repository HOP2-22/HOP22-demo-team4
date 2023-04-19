import React, { useContext, useState } from "react";
import axios from "axios";
import { toast } from "react-hot-toast";

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

const index = () => {
  const { user } = useContext(AuthContext);

  const [infoAccount, setAccount] = useState({
    title: "",
    price: 0,
    catId: "",
    mainImageUrl: "",
  });

  const [descCount, setDescCount] = useState(0);
  const [descs, setDescs] = useState(
    new Array(descCount).fill({
      title: "",
      desc: "",
    })
  );

  const [imageCount, setImageCount] = useState(1);
  const [images, setImages] = useState(new Array(imageCount).fill(""));

  const add_item = async () => {
    if (infoAccount.title.length < 20) {
      toast.error("Title дooд талдаа  20 тэмдэгтээс бүрдэнэ.");
    } else if (infoAccount.title.length > 250) {
      toast.error("Title дээд талдаа  250 тэмдэгтээс бүрдэнэ.");
    }

    if (price === 0) toast.error("Үнэ ээ оруулж өгнө үү.");

    if (typeof price !== "number")
      toast.error("Үнэ ийн утгад зөвхөн тоо бичнэ үү.");

    if (infoAccount.mainImageUrl.length === 0)
      toast.error("Гол зураг аа оруулна уу.");

    if (descs.length === 0)
      toast.error("Багадаа 1 дэлэгрэнгүй мэдээлэл оруулж өгнө үү.");

    try {
      axios.post("http://localhost:8000/api/v1/account", {
        title: infoAccount.title,
        mainImage: infoAccount.mainImageUrl,
        images: images,
        price: infoAccount.price,
        descriptions: descs,
        category: infoAccount.catId,
        owner: user._id,
      });

      toast.success("Амжилттай зар нэмэгдлээ.");
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <Guard>
      <Layout title={"Add_item"}>
        <Container className={"pt-[70px]"}>
          <Add_ItemTitle />
          <Add_ItemChooseCategory />
          <Add_ItemTitleAndPrice />
          <Add_ItemImages />
          <Add_ItemDescription />
          <Add_ItemButton func={add_item} />
        </Container>
      </Layout>
    </Guard>
  );
};

export default index;
