import { useContext } from "react";
import Link from "next/link";

import { AuthContext } from "@/provider/AuthContext";
import { HomeCard } from "./HomeCard";

import { Plus } from "lucide-react";

export const HomeCards = ({ categories }) => {
  const { handleToTop, user } = useContext(AuthContext);

  return (
    <div className="px-5 sm:px-0 grid grid-cols-2 xsm:grid-cols-3 gap-4 lg:gap-5 sm:grid-cols-5 lg:grid-cols-6 xl:grid-cols-7 2xl:grid-cols-8 3xl:grid-cols-9">
      {categories?.map((item, index) => {
        return <HomeCard key={index} data={item} />;
      })}
      {user && (
        <Link
          href={"/request"}
          className="group w-full rounded-[15px] h-[230px] xsm:h-[210px] sm:h-[170px] lg:h-[200px] xl:h-[210px] 3xl:h-[230px] cursor-pointer flex justify-center items-center bg-[#027ffe]"
          onClick={() => {
            handleToTop();
          }}
        >
          <Plus size={60} color="white" />
        </Link>
      )}
    </div>
  );
};
