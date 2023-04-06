import { useRouter } from "next/router";

export default function account() {
  const { query } = useRouter();

  const { slugify, account } = query;

  return (
    <div>
      <h1>category name : {slugify}</h1>
      <h1>account name : {account}</h1>
    </div>
  );
}
