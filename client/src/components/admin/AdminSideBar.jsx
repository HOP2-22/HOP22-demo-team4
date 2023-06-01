import React, { useContext } from "react";
import Link from "next/link";

import { Guard } from "../Guard";
import { AuthContext } from "@/provider/AuthContext";
import AdminSideBarLink from "./AdminSideBarLink";

import {
  Gamepad2,
  GitPullRequestClosed,
  HeartHandshake,
  LogOut,
  PackagePlus,
  User,
} from "lucide-react";
import { BiCuboid } from "react-icons/bi";
import { MdReportProblem } from "react-icons/md";

const AdminSideBar = ({ children, className }) => {
  const { show, logout } = useContext(AuthContext);

  return (
    <Guard role="admin">
      {show && (
        <div className="w-full h-screen flex">
          <div className="w-[20%] flex flex-col px-5 py-[30px] bg-indigo-600">
            <p className="text-white text-[36px] pb-[30px]">Dashboard</p>
            <AdminSideBarLink title={"Users"} link={"/admin/users"}>
              <User color="white" size={30} />
            </AdminSideBarLink>
            <AdminSideBarLink title={"Games"} link={"/admin/categories"}>
              <Gamepad2 color="white" size={30} />
            </AdminSideBarLink>
            <AdminSideBarLink title={"Accounts"} link={"/admin/accounts"}>
              <BiCuboid color="white" size={30} />
            </AdminSideBarLink>
            <AdminSideBarLink
              title={"Selling process"}
              link={"/admin/chatrooms"}
            >
              <HeartHandshake color="white" size={30} />
            </AdminSideBarLink>
            <div className="mt-auto flex flex-col gap-4 px-3">
              <AdminSideBarLink title={"New Game"} link={"/admin/requests"}>
                <PackagePlus color="white" size={30} />
              </AdminSideBarLink>
              <AdminSideBarLink title={"Reported"} link={"/admin/reporteds"}>
                <MdReportProblem color="white" size={30} />
              </AdminSideBarLink>
              <AdminSideBarLink
                title={"Permissions"}
                link={"/admin/permissions"}
              >
                <GitPullRequestClosed color="white" size={30} />
              </AdminSideBarLink>
              <Link
                onClick={() => logout()}
                href={"/"}
                className="flex gap-6 items-center pb-2"
              >
                <LogOut color="white" size={35} />
                <p className="text-white text-[28px]">Logout</p>
              </Link>
            </div>
          </div>
          <div className={`w-[80%] h-screen overflow-scroll ${className}`}>
            {children}
          </div>
        </div>
      )}
    </Guard>
  );
};

export default AdminSideBar;
