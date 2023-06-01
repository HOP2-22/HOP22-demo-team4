import React, { useContext } from "react";

import { Guard } from "../Guard";
import { AuthContext } from "@/provider/AuthContext";
import AdminSideBarLink from "./AdminSideBarLink";

import { User } from "lucide-react";

const AdminSideBar = ({ children, className }) => {
  const { show, setShow } = useContext(AuthContext);

  return (
    <Guard role="admin">
      {show && (
        <div className="w-full h-screen flex">
          <div className="w-2/12 flex flex-col px-3 py-[30px] bg-indigo-600">
            <p className="text-white text-[36px] pb-[30px]">Dashboard</p>
            <AdminSideBarLink title={"Accounts"}>
              <User color="white" size={30} />
            </AdminSideBarLink>
          </div>
          <div className={`w-10/12 ${className}`}>{children}</div>
        </div>
      )}
    </Guard>
  );
};

export default AdminSideBar;
