import { useRouter } from 'next/router'

export default function Card({ data }) {
    const router = useRouter()
  return (
    <div className="group w-[260px] overflow-hidden h-[130px] "
    onClick={()=> router.push(`/${data.slugify}`)}
    >
      <img src={data.photo} className="rounded-[15px]" />
      <div className="text-lg">{data.name}</div>
    </div>
  );
}
