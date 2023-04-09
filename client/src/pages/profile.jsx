import { useContext, useState } from "react";

import { Container } from "@/components/Container";
import { Guard } from "@/components/Guard";
import { Layout } from "@/components/layout/Layout";
import { ProfileCard } from "@/components/profile/ProfileCard";
import { AuthContext } from "@/provider/AuthContext";

export default function index() {
  const { user } = useContext(AuthContext);
  const [typeAccounts, setTypeAccounts] = useState(false);

  return (
    // <Guard>
    <Layout title={"Profile"}>
      <Container className="pt-[70px]">
        <div className="px-5 pb-3 sm:px-0">
          <p className="pt-5 text-[30px] font-semibold tracking-wide">
            {user?.name}
          </p>
          <ul className="mt-5 flex items-start gap-5 h-10">
            <li
              className={`cursor-pointer pb-[6px] font-medium text-[16px] ${
                !typeAccounts && "text-[#027FFE] border-b-2"
              } border-[#027FFE] `}
              onClick={() => setTypeAccounts(false)}
            >
              published accounts
            </li>
            <li
              className={`cursor-pointer pb-[6px] font-medium text-[16px] ${
                typeAccounts && "text-[#027FFE] border-b-2"
              } border-[#027FFE]`}
              onClick={() => setTypeAccounts(true)}
            >
              purchased accounts
            </li>
          </ul>
        </div>
        <div className="w-full h-8 bg-[#f0f2f5] sm:hidden"></div>
        <div className="w-full pt-5 px-5 sm:px-0">
          <p className="text-[24px] sm:font-medium pb-7">
            {typeAccounts
              ? "Your purchased accounts"
              : "Your published accounts"}
          </p>
          <div className="w-full grid grid-cols-12 gap-x-5 2xl:gap-x-8 gap-y-6">
            {typeAccounts
              ? user?.purchasedAccounts?.map((item, index) => {
                  return <ProfileCard key={index} data={item} />;
                })
              : user?.publishedAccounts?.map((item, index) => {
                  return <ProfileCard key={index} data={item} />;
                })}
          </div>
        </div>
      </Container>
    </Layout>
    // </Guard>
  );
}
