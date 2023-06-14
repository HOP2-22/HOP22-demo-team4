import React, { useState } from "react";
import axios from "axios";

import AdminSideBar from "@/components/admin/AdminSideBar";
import AdminAccounts from "@/components/admin/account/AdminAccounts";

const Accounts = ({ data }) => {
  console.log(data.length);

  const [accounts, setAccounts] = useState(data);

  return (
    <AdminSideBar className={"w-full pt-[50px] flex flex-col gap-10 px-10"}>
      <p className="mb-[30px] text-4xl font-medium text-black">Accounts :</p>
      <AdminAccounts accounts={accounts} setAccounts={setAccounts} />
    </AdminSideBar>
  );
};

export default Accounts;

export async function getServerSideProps() {
  try {
    const { data } = await axios.get(
      `${process.env.BASE_URL}/account?permission=true`
    );

    console.log(data);

    return {
      props: {
        data: data.data,
      },
    };
  } catch (error) {
    return {
      redirect: {
        distination: "/",
      },
    };
  }
}
