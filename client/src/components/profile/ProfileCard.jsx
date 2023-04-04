import { useRouter } from "next/router";

import { HeartIcon } from "@heroicons/react/24/solid";
import axios from "axios";

export default function ProfileCard({ data, user }) {
  const router = useRouter();

  const addFavorite = async () => {
    try {
      await axios.post("http://localhost:8000/api/v1/account/adfavorite", {
        userId: user?._id,
        accountId: data?._id,
      });

      // router.replace(`/my-page?refresh=true`);
    } catch (error) {
      console.log(error);
    }
  };

  const removeFavorite = async () => {
    try {
      console.log(data?._id);
      await axios.post("http://localhost:8000/api/v1/account/refavorite", {
        userId: user?._id,
        accountId: data?._id,
      });

      // router.replace();
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="group relative my-2 h-[130px] 3xl:h-[150px] col-span-12 sm:col-span-10 lg:col-span-6 w-full bg-white grid grid-cols-12 overflow-hidden shadow-2xl">
      <div className="col-span-5 relative w-full">
        <img
          src={`${data?.mainImage}`}
          className="object-cover w-full h-full cursor-pointer"
          onClick={() => router.push(`/${data?.category.slugify}/${data?._id}`)}
          alt=""
        />
        <div
          className={`${
            !data?.sold ? "hidden" : "flex"
          } absolute top-0 left-0 w-full h-full z-20 items-center justify-center`}
        >
          <img
            src={
              "https://res.cloudinary.com/dymjjmeyc/image/upload/v1680453056/5a04b8549cf05203c4b603af_orffzp.png"
            }
            alt=""
            className="w-[75%]"
          />
        </div>
      </div>
      <div className="col-span-7 grid grid-cols-3 px-[10px] py-1 sm:py-3 content-between">
        <p
          className="col-span-3 cursor-pointer"
          onClick={() => router.push(`/${data?.category.slugify}/${data?._id}`)}
        >
          {data?.title.slice(0, 52)} {data?.title.length > 52 && "..."}
        </p>
        <div className="text-[13px] col-span-3 grid grid-cols-12">
          <div className="col-span-12 mb-2">
            {data?.descriptions[0]?.title}
            <span className="pl-1 text-[#FF6900]">
              {data?.descriptions[0]?.desc}
            </span>
          </div>
          <p className="col-span-6">
            price: <span className="pl-1 text-[#FF6900]">{data?.price}</span>
          </p>
          <p className="col-span-6">
            sold:
            <span className="pl-1 text-[#FF6900]">
              {data?.sold ? "yes" : "no"}
            </span>
          </p>
        </div>
      </div>
      <div className="absolute hidden group-hover:flex justify-center items-center right-1 top-1 w-7 h-7">
        <HeartIcon
          onClick={() => {
            if (user) {
              if (user?.userFavorite.includes(data?._id)) {
                removeFavorite();
              } else {
                addFavorite();
              }
            } else {
              alert("pls, first login");
            }
          }}
          className={`${
            user?.userFavorite.includes(data?._id)
              ? "fill-[#f30f1c]"
              : "fill-transparent"
          } w-5 h-5 stroke-2 stroke-[#f30f1c] cursor-pointer `}
        />
      </div>
    </div>
  );
}
