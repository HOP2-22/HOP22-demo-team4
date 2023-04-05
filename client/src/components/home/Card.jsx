import { useRouter } from "next/router";

export default function Card({ data }) {
  const router = useRouter();
  return (
    <div
      className="group w-[500px] h-[140px] mr-3"
      onClick={() => router.push(`/${data.slugify}`)}
    >
      <img src={data.photo} className="rounded-[15px]" />
      <div className="text-lg text-slate-950">{data.name}</div>
    </div>
  );
}
