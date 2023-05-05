import Image from "next/image";
import { useRouter } from "next/router";

export default function Card({ data }) {
  const router = useRouter();
  return (
    <div
      className="group w-[500px] h-[140px] mr-3"
      onClick={() => router.push(`/${data.slugify}`)}
    >
      <Image
        width={200}
        height={200}
        src={data.photo}
        className="rounded-[15px]"
        alt=""
      />
      <div className="text-lg text-slate-950">{data.name}</div>
    </div>
  );
}
