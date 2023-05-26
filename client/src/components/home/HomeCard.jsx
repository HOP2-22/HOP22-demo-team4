import { useContext } from "react";
import Link from "next/link";

import { AuthContext } from "@/provider/AuthContext";

export const HomeCard = ({ data }) => {
  const { handleToTop } = useContext(AuthContext);

  return (
    <Link
      href={`/category/${data?.slugify}`}
      className="relative group w-full rounded-[15px] overflow-hidden h-[230px] xsm:h-[210px] sm:h-[170px] lg:h-[200px] xl:h-[210px] 3xl:h-[230px] cursor-pointer"
      onClick={() => {
        handleToTop();
      }}
    >
      <img
        width={500}
        height={500}
        src={data.photo}
        className="h-full w-full object-cover object-center"
        alt=""
      />
      <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-b from-transparent from-40% sm:from-0% to-[#027ffe]/80 to-100% translate-y-[0px] opacity-100 xsm:opacity-0 group-hover:opacity-100 xsm:translate-y-[20px] group-hover:translate-y-0 transition duration-200">
        <div className="w-full h-full relative">
          <p className="w-full px-3 absolute bottom-5 text-center text-white text-[20px]">
            {data.name}
          </p>
        </div>
      </div>
    </Link>
  );
};
