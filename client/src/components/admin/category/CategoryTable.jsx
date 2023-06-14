import React from "react";
import {
  Table,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
} from "@mui/material";

import CategoryTableBody from "./CategoryTableBody";

const CategoryTable = ({ categories, setCategories }) => {
  return (
    <TableContainer>
      <Table>
        <TableHead>
          <TableRow>
            <TableCell>ID</TableCell>
            <TableCell>Name</TableCell>
            <TableCell>When created</TableCell>
            <TableCell>Creater name</TableCell>
          </TableRow>
        </TableHead>
        <CategoryTableBody
          categories={categories}
          setCategories={setCategories}
        />
      </Table>
    </TableContainer>
  );
};

export default CategoryTable;
