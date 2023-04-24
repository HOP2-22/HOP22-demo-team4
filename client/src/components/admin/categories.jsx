import { useRouter } from "next/router";

export default function Categories({ data }) {
  const router = useRouter();
  return (
    <div className=" w-[300px] bg-white rounded-2xl  overflow-hidden h-[360px] xsm:h-[210px] sm:h-[190px] lg:h-[230px] 2xl:h-[220px] 3xl:h-[230px] cursor-pointer">
      <div className="w-[300px] h-[300px] flex">
        <img
          src={data.photo}
          onClick={() =>
            router.push({
              pathname: `/category/${data?.slugify}`,
            })
          }
          className="w-[140px] rounded-[15px] object-cover object-center h-[300px] xsm:h-[190px] sm:h-[170px] 2xl:h-[220px] 3xl:h-[210px]"
        />

        <div className="2xl:ml-[10px]">
          <div>
            <div className="text-xl">{data.name}</div>
          </div>
          <div className="flex flex-col">
            <button className="text-white bg-blue-800 rounded-lg 2xl:w-[100px]">
              Edit
            </button>
            <button className="text-white bg-blue-800 rounded-lg 2xl:w-[100px]">
              Delete
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
