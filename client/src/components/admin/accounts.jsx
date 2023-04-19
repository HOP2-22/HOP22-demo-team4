import { useRouter } from "next/router";
import Link from "next/link";

export default function Accounts({ data }) {
  const router = useRouter();

  return (
    <div className="my-2 h-[130px] lg:h-[150px] col-span-12 xl:col-span-6  w-[500px] bg-white flex overflow-hidden shadow-2xl rounded-[3px]">
      <img src={data?.mainImage} className="w-[200px]" alt="pic"/>
      <div className="flex flex-col px-[10px] py-1 sm:py-3 justify-between">
        <div className="tesxt-xl">{data?.title}</div>
        <div className="text-[13px] w-full flex flex-wrap">
          <div className="w-full mb-2">
            {data?.descriptions[0]?.title}
            <span className="pl-1 bg-clip-text text-transparent bg-gradient-to-b from-pink-500 to-violet-500">
              {data?.descriptions[0]?.desc}
            </span>
          </div>
          <p className="w-1/2">
            Үнэ:
            <span className="pl-1 bg-clip-text text-transparent bg-gradient-to-b from-pink-500 to-violet-500">
              {data?.price}
            </span>
          </p>
          <p className="w-1/2">
            Хэн:
            <span className="pl-1 bg-clip-text text-transparent bg-gradient-to-b from-pink-500 to-violet-500 cursor-pointer">
              <Link href={`/user/${data?.owner._id}`}>{data?.owner.name}</Link>
            </span>
          </p>
          <p className="w-full">
            Нийтэлсэн өдөр:
            <span className="pl-1 bg-clip-text text-transparent bg-gradient-to-b from-pink-500 to-violet-500">
              {data.createdAt.slice(0, 19).replace("T", " ")}
            </span>
          </p>
        </div>
      </div>
    </div>
  );
}
