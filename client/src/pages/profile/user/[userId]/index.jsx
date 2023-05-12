import axios from "axios";
import React from "react";
import Image from "next/image";
import Link from "next/link";

import { Container } from "@/components/Container";
import { Layout } from "@/components/layout/Layout";

const index = ({ data }) => {
  return (
    <Layout>
      <Container>
        <p className="px-5 sm:px-0 pt-[100px] text-[22px] sm:text-[24px] xl:text-[28px] pb-8">
          Хэрэглэгч : {data.name}
        </p>
        <div className="px-5 sm:px-0 grid sm:grid-cols-2 lg:grid-cols-3 3xl:grid-cols-4 gap-y-[15px] gap-x-[20px]">
          {data?.publishedAccounts?.map((item, index) => {
            return (
              <Link
                href={`/category/${item?.category.name}/${item._id}`}
                key={index}
                className="w-full rounded-[5px] flex flex-col overflow-hidden bg-white cursor-pointer"
              >
                <Image
                  src={item?.mainImage}
                  width={300}
                  height={300}
                  alt=""
                  className="w-full h-[180px] object-cover object-center"
                />
                <div className="p-5">
                  <p>{item?.title}</p>
                  <p>Үнэ : {item?.price}</p>
                  <p>Тоглоом : {item?.category.name}</p>
                </div>
              </Link>
            );
          })}
          <div className=""></div>
        </div>
      </Container>
    </Layout>
  );
};

export default index;

export async function getServerSideProps(context) {
  const id = context.query.userId;

  const user = await axios.get(`http://localhost:8000/api/v1/user/${id}`);

  return {
    props: {
      data: user.data.data,
    },
  };
}
