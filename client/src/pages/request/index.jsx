import React, { useContext, useState } from "react";
import { toast } from "react-hot-toast";
import { useRouter } from "next/router";
import axios from "axios";

import { Guard } from "@/components/Guard";
import { Layout } from "@/components/layout/Layout";
import { Container } from "@/components/Container";
import { AuthContext } from "@/provider/AuthContext";

const Request = () => {
  const { user } = useContext(AuthContext);
  const { push } = useRouter();

  const [value, setValue] = useState();

  const submit = async () => {
    try {
      await axios.post(`${process.env.BASE_URL}/request`, {
        title: value,
        createdUser: user?._id,
      });

      toast.success("Амжилттай хүсэлт илгээлээ");

      push("/");
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <Guard role={"user"}>
      <Layout title={"Шинэ тоглоомны хүсэлт"}>
        <Container className={"pt-[200px] px-5 sm:px-0 flex flex-col gap-7"}>
          <div className="w-4/5 sm:w-3/4 md:w-2/3">
            <p className="font-light ">
              Хэрэв та манай сайтад шинэ тоглоом нэмэхийг хүсвэл доорхи Form
              дээр нэмэхийг хүсэж буй тоглоомныхоо нэрийг бичиж өгнө үү.
            </p>
          </div>
          <input
            type="text"
            value={value}
            onKeyDown={(event) => {
              if (event.key === "Enter") {
                submit();
              }
            }}
            onChange={(event) => setValue(event.target.value)}
            className="w-full md:w-2/3 lg:w-3/5 xl:w-1/2 px-6 py-[10px] rounded-[15px] focus:outline-[#44BAF0]"
          />
          <div className="w-full grid grid-cols-12 gap-5">
            <button className="col-span-6 sm:col-span-5 md:col-span-3 lg:col-span-2 flex justify-center py-[10px] rounded-[10px] bg-[#44BAF0] hover:bg-[#40abdd] transition-colors duration-200 cursor-pointer text-gray-100">
              Хоослох
            </button>
            <button className="col-span-6 sm:col-span-5 md:col-span-3 lg:col-span-2 flex justify-center py-[10px] rounded-[10px] bg-[#027ffe] hover:bg-[#027fcf] transition-colors duration-200 cursor-pointer text-gray-100">
              Илгээх
            </button>
          </div>
        </Container>
      </Layout>
    </Guard>
  );
};

export default Request;
