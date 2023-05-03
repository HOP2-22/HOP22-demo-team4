import Image from "next/image";
import { useRouter } from "next/router";
import { useState } from "react";

export default function Categories({ data }) {
  const router = useRouter();

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
  return (
    <div onClick={() => router.push(`./categories/${data?.id}`)} className=" w-[300px] items-center bg-white overflow-hidden h-[180px] flex flex-col">
      <div className="h-[150px]">
        <Image
          width={300}
          height={10}
          style={{ height: "180px" }}
          src={data.coverPhoto}
          alt="game photo"
        />
      </div>
      <div className="flex justify-between w-full">
        <div className="text-center text-2xl text-white">{data.name}</div>
        <div className="mb-2">
          
        </div>
      </div>
    </div>
  );
}
