import React from "react";
import Link from "next/link";

const Permission = ({ data }) => {
  return (
    <Link
      href={`/admin/permissions/${data?._id}`}
      className="w-full rounded-[10px] border hover:bg-gray-200 transition-colors duration-200 p-3 grid grid-cols-4"
    >
      <p>{data?._id}</p>
      <p>{data?.category.name}</p>
      <p>{data?.price}</p>
      <p>{data?.title.slice(0, 35)}</p>
    </Link>
  );
};

export default Permission;
