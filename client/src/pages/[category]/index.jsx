import { useRouter } from "next/router";

export default function index() {
  const { query } = useRouter();
  const { category } = query;

  return (
    <div>
      <h1>Category : {category}</h1>
    </div>
  );
}
