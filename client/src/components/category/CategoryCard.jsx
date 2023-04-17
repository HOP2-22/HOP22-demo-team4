import { useRouter } from "next/router";

export const CategoryCard = ({ data }) => {
  const router = useRouter();

  return (
    <div className="group relative my-2 h-[130px] lg:h-[150px] col-span-12 xl:col-span-6 w-full bg-white flex overflow-hidden shadow-2xl rounded-[3px]">
      <div
        className="w-5/12 relative cursor-pointer"
        onClick={() =>
          router.push(`/category/${data?.category.slugify}/${data?._id}`)
        }
      >
        <img
          src={`${data?.mainImage}`}
          className="object-cover w-full h-full"
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
            className="w-[75%]"
          />
        </div>
      </div>
      <div className="w-7/12 flex flex-col px-[10px] py-1 sm:py-3 justify-between">
        <p
          className="w-full cursor-pointer"
          onClick={() =>
            router.push(`/category/${data?.category.slugify}/${data?._id}`)
          }
        >
          {data?.title.slice(0, 52)} {data?.title.length > 52 && "..."}
        </p>
        <div className="text-[13px] w-full flex flex-wrap">
          <div className="w-full mb-2">
            {data?.descriptions[0]?.title}
            <span className="pl-1 bg-clip-text text-transparent bg-gradient-to-b from-pink-500 to-violet-500">
              {data?.descriptions[0]?.desc}
            </span>
          </div>
          <p className="w-1/2">
            price:
            <span className="pl-1 bg-clip-text text-transparent bg-gradient-to-b from-pink-500 to-violet-500">
              {data?.price}
            </span>
          </p>
          <p className="w-1/2">
            name:
            <span
              className="pl-1 bg-clip-text text-transparent bg-gradient-to-b from-pink-500 to-violet-500 cursor-pointer"
              onClick={() => router.push(`/user/${data?.owner._id}`)}
            >
              {data?.owner.name}
            </span>
          </p>
          <p className="w-full">
            When created:
            <span className="pl-1 bg-clip-text text-transparent bg-gradient-to-b from-pink-500 to-violet-500">
              {data.createdAt.slice(0, 19).replace("T", " ")}
            </span>
          </p>
        </div>
      </div>
    </div>
  );
};
