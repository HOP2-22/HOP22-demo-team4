import { useRouter } from "next/router";

export default function Users({ data }) {
  const router = useRouter();

  return <div>{data.name}</div>;
}
