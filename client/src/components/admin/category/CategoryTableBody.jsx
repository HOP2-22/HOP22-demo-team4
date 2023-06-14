import React from "react";
import { useRouter } from "next/router";
import { TableBody, TableCell, TableRow } from "@mui/material";

const CategoryTableBody = ({ categories }) => {
  const { push } = useRouter();

  return (
    <TableBody>
      {categories.map((category, index) => {
        return (
          <TableRow
            className="py-[5px] rounded-[20px] bg-white hover:bg-gray-300 cursor-pointer transition-colors duration-200 ease-in"
            onClick={() => {
              push(`/admin/categories/${category?._id}`);
            }}
            key={index}
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

export default CategoryTableBody;
