import { useRouter } from "next/router";

export default function Accounts({ data }) {
  const router = useRouter();

  return <div>{data.name}</div>;
}
