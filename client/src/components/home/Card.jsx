import { useRouter } from "next/router";

export const Card = ({ data }) => {
  const router = useRouter();
  return (
    <div
      className="group w-[260px] overflow-hidden h-[130px] "
      onClick={() =>
        router.push({
          pathname: `/${data?.slugify}`,
        })
      }
    >
      <img src={data.photo} className="rounded-[15px]" />
      <div className="text-lg">{data.name}</div>
    </div>
  );
};
