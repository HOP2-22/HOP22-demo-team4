import React, { useState } from "react";
import axios from "axios";

import AdminSideBar from "@/components/admin/AdminSideBar";
import Permission from "@/components/admin/permission/Permission";

const PermissionOfAccount = ({ data }) => {
  const [permissions, setPermissions] = useState(data);

  return (
    <AdminSideBar className={"w-full pt-[50px] flex flex-col gap-4 px-10"}>
      <p className="mb-[30px] text-4xl font-medium text-black">Permissions </p>

      <div className="grid grid-cols-4">
        <p>Id</p>
        <p>Game name</p>
        <p>Price</p>
        <p>Title</p>
      </div>
      {permissions?.map((permission, index) => (
        <Permission
          data={permission}
          key={index}
          permissions={permissions}
          setPermissions={setPermissions}
        />
      ))}
    </AdminSideBar>
  );
};

export default PermissionOfAccount;

export async function getServerSideProps() {
  try {
    const { data } = await axios.get(`${process.env.BASE_URL}/account`);

    return {
      props: {
        data: data.data,
      },
    };
  } catch (error) {
    return {
      redirect: {
        destination: "/",
      },
    };
  }
}
