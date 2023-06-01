import Link from "next/link";
import React from "react";

const AdminSideBarLink = ({ title, children, link }) => {
  return (
    <Link href={`${link}`} className="pl-4 flex gap-5 items-center pb-4">
      {children}
      <p className={`text-white text-[24px]`}>{title}</p>
    </Link>
  );
};

export default AdminSideBarLink;
