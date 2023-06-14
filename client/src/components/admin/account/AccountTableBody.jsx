import React from "react";
import { TableBody, TableCell, TableRow } from "@mui/material";
import Link from "next/link";
import { useRouter } from "next/router";

const AccountTableBody = ({ accounts }) => {
  const { push } = useRouter();

  return (
    <TableBody>
      {accounts?.map((account, index) => (
        <TableRow
          onClick={() => push(`/admin/accounts/${account?._id}`)}
          key={index}
          className="py-[5px] rounded-[20px] bg-white hover:bg-gray-300 cursor-pointer transition-colors duration-200 ease-in"
        >
          <TableCell>{account?._id}</TableCell>
          <TableCell>{account?.title}</TableCell>
          <TableCell>{account?.price}</TableCell>
          <TableCell>{account?.createdAt.slice(0, 10)}</TableCell>
          <TableCell>{account?.owner}</TableCell>
        </TableRow>
      ))}
    </TableBody>
  );
};

export default AccountTableBody;
