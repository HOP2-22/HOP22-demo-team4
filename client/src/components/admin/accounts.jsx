import { useRouter } from "next/router";

export default function Accounts({ data }) {
  const router = useRouter();

  return (
    <div className="h-[250px] w-[300px]">
      <div>{data.title}</div>
      <img src={data.mainImage} alt="account" className="h-[200px]" />
      <div>{data.price + "₮"}</div>
    </div>
  );
}
