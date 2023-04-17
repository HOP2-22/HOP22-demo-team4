import { useRouter } from "next/router";

export default function Categories({ data }) {
  const router = useRouter()
  return (
    <div
      className=" w-[150px] overflow-hidden h-[250px] xsm:h-[210px] sm:h-[190px] lg:h-[220px] 2xl:h-[210px] 3xl:h-[230px] cursor-pointer"
      onClick={() =>
        router.push({
          pathname: `/category/${data?.slugify}`,
        })
      }
    >
      <img
        src={data.photo}
        className="w-[140px] rounded-[15px] object-cover object-center h-[230px] xsm:h-[190px] sm:h-[170px] 2xl:h-[190px] 3xl:h-[210px]"
      />
      <div>{data.name}</div>
    </div>
  );
}
