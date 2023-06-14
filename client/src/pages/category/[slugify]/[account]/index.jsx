import { useEffect, useState } from "react";
import Link from "next/link";
import axios from "axios";

import { Container } from "@/components/Container";
import { Layout } from "@/components/layout/Layout";
import AccountDetailTitle from "@/components/accountDetail/AccountDetailTitle";
import AccountDetailPhoneImages from "@/components/accountDetail/AccountDetailPhoneImages";
import AccountDetailDesktopImages from "@/components/accountDetail/AccountDetailDesktopImages";
import AccountDetailDescriptions from "@/components/accountDetail/AccountDetailDescriptions";
import AccountDetailPrice from "@/components/accountDetail/AccountDetailPrice";
import AccountDetailSimilarItems from "@/components/accountDetail/AccountDetailSimilarItems";

const AccountDetail = ({ data }) => {
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

  return (
    <Layout>
      <Container className={"px-5 pt-[70px] sm:px-0"}>
        {data?.sold && (
          <div className="w-full flex justify-end">
            <img
              src="https://res.cloudinary.com/dymjjmeyc/image/upload/v1680453056/5a04b8549cf05203c4b603af_orffzp.png"
              className="w-1/4 my-[30px]"
              draggable="false"
            />
          </div>
        )}
        <AccountDetailDesktopImages data={data} />
        <AccountDetailPhoneImages data={data} />
        <Link
          href={`/profile/user/${data?.owner?._id}`}
          className="cursor-pointer px-5 sm:px-0 pt-5 text-[22px] sm:text-[24px] xl:text-[28px] pb-8 font-medium underline"
        >
          Хэрэглэгч : {data?.owner?.name}
        </Link>
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

export default AccountDetail;

export async function getServerSideProps(context) {
  try {
    const id = context.query.account;

    const res = await axios.get(`${process.env.BASE_URL}/account/${id}`);

    return {
      props: { data: res.data.data },
    };
  } catch (error) {
    return {
      redirect: {
        destination: "/",
      },
    };
  }
}
