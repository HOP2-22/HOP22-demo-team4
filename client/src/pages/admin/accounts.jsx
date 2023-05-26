import React from "react";

import AdminSideBar from "@/components/admin/AdminSideBar";
import { AdminAccountImage } from "@/components/admin/Accounts";

const Accounts = ({ data }) => {
  return (
    <AdminSideBar className={"h-full overflow-scroll"}>
      <AdminAccountImage data={data} />
    </AdminSideBar>
  );
};

export default Accounts;

export async function getServerSideProps() {
  const res = await fetch(`${process.env.BASE_URL}/account/`);

  const data = await res.json();

  return {
    props: { data: data.data },
  };
}
