import React, { useState } from "react";
import { useRouter } from "next/router";
import axios from "axios";

import PermissionDetailEachDetailAndDesc from "@/components/admin/permission/PermissionDetailEachDetailAndDesc";
import AdminSideBar from "@/components/admin/AdminSideBar";

const PermissionDetail = ({ data }) => {
  const { push } = useRouter();
  const images = [data.mainImage, ...data.images];

  const deleteAccount = async () => {
    try {
      await axios.delete(`${process.env.BASE_URL}/account/${data._id}`);

      push("/admin/permissions");
    } catch (error) {
      console.log(error);
    }
  };

  const checkAccount = async () => {
    try {
      await axios.put(`${process.env.BASE_URL}/account/${data._id}`, {
        permission: true,
      });

      push("/admin/permissions");
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <AdminSideBar
      className={
        "relative w-full pt-[50px] flex flex-col px-10 overflow-y-auto"
      }
    >
      <p className="mb-[30px] text-4xl font-medium text-black">
        Permission account detail
      </p>

      <div className="grid grid-cols-2 gap-y-7">
        <PermissionDetailEachDetailAndDesc title={"Title"} desc={data?.title} />
        <PermissionDetailEachDetailAndDesc
          title={"Game name"}
          desc={data?.category.name}
        />
        <PermissionDetailEachDetailAndDesc
          title={"Created at"}
          desc={data?.createdAt.slice(0, 10)}
        />

        <PermissionDetailEachDetailAndDesc title={"Price"} desc={data?.price} />
      </div>
      <div className="w-2/3 overflow-x-scroll flex gap-2 mt-[70px]">
        {images.map((image, index) => {
          return (
            <img
              src={image}
              alt=""
              key={index}
              className="w-1/2 object-contain h-full"
            />
          );
        })}
      </div>
      <div className="mt-10 flex gap-10 items-center">
        <button
          onClick={() => deleteAccount()}
          className="py-4 px-10 text-white bg-rose-600 hover:bg-rose-400 transition-colors duration-200 text-[22px] rounded-[10px]"
        >
          Delete account
        </button>
        <button
          onClick={() => checkAccount()}
          className="py-4 px-10 text-white bg-green-500 hover:bg-green-400 transition-colors duration-200 text-[22px] rounded-[10px]"
        >
          Check account
        </button>
      </div>
    </AdminSideBar>
  );
};

export default PermissionDetail;

export async function getServerSideProps(ctx) {
  try {
    const { data } = await axios.get(
      `${process.env.BASE_URL}/account/${ctx.query.perId}`
    );

    return {
      props: {
        data: data.data,
      },
    };
  } catch (error) {
    return {
      redirect: {
        distination: "/",
      },
    };
  }
}
