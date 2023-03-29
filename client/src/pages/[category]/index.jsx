import { useRouter } from "next/router";

export default function index() {
  const { query } = useRouter();
  const { category } = query;

  return <div></div>;
}
