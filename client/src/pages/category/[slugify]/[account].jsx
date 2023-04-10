import { useRouter } from "next/router";

const CategoryAccount = () => {
  const { query } = useRouter();

  const { slugify, account } = query;

  return (
    <div>
      <h1>category name : {slugify}</h1>
      <h1>account name : {account}</h1>
    </div>
  );
};

export default CategoryAccount;
