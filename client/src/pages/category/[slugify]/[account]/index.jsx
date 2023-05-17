import { useEffect, useState } from "react";
import axios from "axios";

import { Container } from "@/components/Container";
import { Layout } from "@/components/layout/Layout";
import AccountDetailTitle from "@/components/accountDetail/AccountDetailTitle";
import AccountDetailPhoneImages from "@/components/accountDetail/AccountDetailPhoneImages";
import AccountDetailDesktopImages from "@/components/accountDetail/AccountDetailDesktopImages";
import AccountDetailDescriptions from "@/components/accountDetail/AccountDetailDescriptions";
import AccountDetailPrice from "@/components/accountDetail/AccountDetailPrice";
import AccountDetailSimilarItems from "@/components/accountDetail/AccountDetailSimilarItems";
import Link from "next/link";

const Account = ({ data }) => {
  const [accounts, setAccounts] = useState([]);

  useEffect(() => {
    setAccounts([]);

    const shuffled = data?.category.accounts.slice();

    for (let i = shuffled.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
    }

    setAccounts(shuffled.slice(0, 5));
  }, []);

  console.log(data);

  return (
    <Layout>
      <Container className={"px-5 pt-[70px] sm:px-0"}>
        <AccountDetailDesktopImages data={data} />
        <Link
          href={`/profile/user/${data?.owner?._id}`}
          className="cursor-pointer px-5 sm:px-0 pt-5 text-[22px] sm:text-[24px] xl:text-[28px] pb-8 font-medium"
        >
          Хэрэглэгч : {data?.owner?.name}
        </Link>
        <AccountDetailPhoneImages data={data} />
        <AccountDetailTitle title={data.title} createdAt={data.createdAt} />
        <AccountDetailDescriptions data={data} />
        <AccountDetailPrice price={data.price} data={data} />
        <AccountDetailSimilarItems
          slugify={data?.category.slugify}
          accounts={accounts}
          title={"Төстэй бараанууд:"}
          category={data.category}
        />
        <AccountDetailSimilarItems
          slugify={data?.category?.slugify}
          accounts={data?.owner?.publishedAccounts
            .sort(() => 0.5 - Math.random())
            .slice(0, 5)}
          title={`${data?.owner?.name} хэрэглэгчийн бараанууд:`}
          category={data?.category}
        />
      </Container>
    </Layout>
  );
};

export default Account;

export async function getServerSideProps(context) {
  const id = context.query.account;

  const res = await axios.get(`http://localhost:8000/api/v1/account/${id}`);

  return {
    props: { data: res.data.data },
  };
}
