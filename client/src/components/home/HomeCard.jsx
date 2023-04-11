import { useRouter } from "next/router";
import { useContext } from "react";

import { AuthContext } from "@/provider/AuthContext";

export const HomeCard = ({ data }) => {
  const { handleToTop } = useContext(AuthContext);

  const router = useRouter();

  return (
    <div
      className="relative group w-full rounded-[15px] overflow-hidden h-[230px] xsm:h-[210px] sm:h-[190px] lg:h-[220px] 2xl:h-[210px] 3xl:h-[230px] cursor-pointer"
      onClick={() => {
        handleToTop();
        router.push({
          pathname: `/category/${data?.slugify}`,
        });
      }}
    >
      <img
        src={data.photo}
        className="h-full w-full object-cover object-center"
      />
      <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-b from-transparent to-[#027ffe]/80 translate-y-[0px] opacity-100 xsm:opacity-0 group-hover:opacity-100 xsm:translate-y-[20px] group-hover:translate-y-0 transition duration-200">
        <div className="w-full h-full relative">
          <p className="w-full px-3 absolute bottom-5 text-center text-white text-[20px]">
            {data.name}
          </p>
        </div>
      </div>
    </div>
  );
};
