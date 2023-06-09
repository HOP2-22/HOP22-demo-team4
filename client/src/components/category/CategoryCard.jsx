import Link from "next/link";

export const CategoryCard = ({ data, slugify, className }) => {
  return (
    <div
      className={`grow group relative my-2 h-[140px] lg:h-[150px] col-span-12 xl:col-span-6 bg-white flex overflow-hidden shadow-2xl rounded-[3px] ${className}`}
    >
      <Link
        href={`/category/${slugify}/${data?._id}`}
        className="w-5/12 relative cursor-pointer"
      >
        <img
          width={100}
          height={100}
          src={`${data?.mainImage}`}
          className="object-cover w-full h-full"
          draggable="false"
          alt=""
        />
        <div
          className={`${
            !data?.sold ? "hidden" : "flex"
          } absolute top-0 left-0 w-full h-full z-20 items-center justify-center`}
        >
          <img
            width={200}
            height={200}
            src={
              "https://res.cloudinary.com/dymjjmeyc/image/upload/v1680453056/5a04b8549cf05203c4b603af_orffzp.png"
            }
            className="w-[75%]"
            alt=""
          />
        </div>
      </Link>
      <div className="w-7/12 flex flex-col px-[10px] py-1 sm:py-3 justify-between">
        <Link href={`/category/${slugify}/${data?._id}`}>
          <p className="w-full cursor-pointer">
            {data?.title.slice(0, 52)} {data?.title.length > 52 && "..."}
          </p>
        </Link>
        <div className="text-[13px] w-full flex flex-wrap">
          <div className="w-full mb-2">
            {data?.descriptions[0]?.title}
            <span className="pl-1 bg-clip-text text-transparent bg-gradient-to-b from-pink-500 to-violet-500">
              {data?.descriptions[0]?.desc}
            </span>
          </div>
          <p className="w-full sm:w-1/2">
            Үнэ:
            <span className="pl-1 bg-clip-text text-transparent bg-gradient-to-b from-pink-500 to-violet-500">
              {data?.price}
            </span>
          </p>
          <p className="w-full sm:w-1/2">
            Хэн:
            <span className="pl-1 bg-clip-text text-transparent bg-gradient-to-b from-pink-500 to-violet-500 cursor-pointer border-b border-black/80">
              <Link href={`/profile/user/${data?.owner._id}`}>
                {data?.owner.name}
              </Link>
            </span>
          </p>
          <p className="w-full flex flex-col sm:flex-row">
            Нийтэлсэн өдөр:
            <span className="pl-1 bg-clip-text text-transparent bg-gradient-to-b from-pink-500 to-violet-500">
              {data.createdAt.slice(0, 19).replace("T", " ")}
            </span>
          </p>
        </div>
      </div>
    </div>
  );
};
