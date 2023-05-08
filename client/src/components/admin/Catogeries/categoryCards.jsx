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
    <div
      // onClick={() => router.push(`./categories/${data?.id}`)}
      className="group w-[300px] items-center bg-white overflow-hidden h-[180px] flex flex-col shadow-2xl rounded-lg transition hover:scale-110 delay-150 duration-300"
    >
      <div className="h-[150px]">
        <Image
          width={300}
          height={10}
          style={{ height: "" }}
          src={data.coverPhoto}
          alt="game photo"
          className="h-[180px] w-full object-cover"
        />
      </div>
      <div className="flex  w-full justify-center items-center bg-gradient-to-b from-transparent to-[#027ffe]/80 ">
        <div className="text-2xl text-white absolute bottom-0 text-center transition group-hover:-translate-y-6 duration-300 group-hover:">
          {data.name}
        </div>
      </div>
    </div>
  );
}
