import React from "react";
import { useRouter } from "next/router";
import { TableBody, TableCell, TableRow } from "@mui/material";

const CategoryRow = ({ categories }) => {
  const { push } = useRouter();

  return (
    <TableBody>
      {categories.map((category, index) => {
        return (
          <TableRow
            className="py-[5px] rounded-[20px] hover:bg-red-100"
            onClick={() => {
              push(`/admin/categories/${category?._id}`);
            }}
          >
            <TableCell>{category?._id}</TableCell>
            <TableCell>{category?.name}</TableCell>
            <TableCell>{category?.createdAt.slice(0, 10)}</TableCell>
            <TableCell>{category?.owner?.name || "deleted user"}</TableCell>
          </TableRow>
        );
      })}
    </TableBody>
  );
};

export default CategoryRow;
