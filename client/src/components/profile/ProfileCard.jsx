import { useRouter } from "next/router";

export const ProfileCard = ({ data }) => {
  const router = useRouter();

  return (
    <div className="group relative my-2 h-[130px] 3xl:h-[150px] col-span-12 sm:col-span-10 lg:col-span-6 w-full bg-white grid grid-cols-12 overflow-hidden shadow-2xl rounded-[3xl]">
      <div className="col-span-5 relative w-full">
        <img
          src={`${data?.mainImage}`}
          className="object-cover w-full h-full"
          draggable="false"
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
            draggable="false"
          />
        </div>
      </div>
      <div className="col-span-7 grid grid-cols-3 px-[10px] py-1 sm:py-3 content-between">
        <p className="col-span-3">
          {data?.title.slice(0, 52)} {data?.title.length > 52 && "..."}
        </p>
        <div className="text-[13px] col-span-3 grid grid-cols-12">
          <div className="col-span-12 mb-2">
            {data?.descriptions[0]?.title}
            <span className="pl-1 bg-clip-text text-transparent bg-gradient-to-b from-pink-500 to-violet-500">
              {data?.descriptions[0]?.desc}
            </span>
          </div>
          <p className="col-span-6">
            price:
            <span className="pl-1 bg-clip-text text-transparent bg-gradient-to-b from-pink-500 to-violet-500">
              {data?.price}
            </span>
          </p>
          <p className="col-span-6">
            date:
            <span className="pl-1 bg-clip-text text-transparent bg-gradient-to-b from-pink-500 to-violet-500">
              {data?.createdAt.slice(0, 10)}
            </span>
          </p>
        </div>
      </div>
    </div>
  );
};
