import React from "react";

import AdminSideBar from "@/components/admin/AdminSideBar";
import { AdminAccountImage } from "@/components/admin/Accounts";

const Accounts = ({ data }) => {
  return (
    <AdminSideBar className={"h-full overflow-scroll"}>
      <div className="w-full h-40 bg-red-100"></div>
      <AdminAccountImage data={data} />
    </AdminSideBar>
  );
};

export default Accounts;

export async function getServerSideProps() {
  try {
    const res = await fetch(`${process.env.BASE_URL}/account/`);

    const data = await res.json();

    return {
      props: { data: data.data },
    };
  } catch (error) {
    return {
      redirect: {
        distination: "/",
      },
    };
  }
}
