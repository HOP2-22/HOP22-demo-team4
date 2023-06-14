import React from "react";
import {
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Table,
} from "@mui/material";
import AccountTableBody from "./AccountTableBody";

const AdminAccounts = ({ accounts, setAccounts }) => {
  return (
    <TableContainer>
      <Table>
        <TableHead>
          <TableRow>
            <TableCell>ID</TableCell>
            <TableCell>Title</TableCell>
            <TableCell>Price</TableCell>
            <TableCell>When created</TableCell>
            <TableCell>Creater id</TableCell>
          </TableRow>
        </TableHead>
        <AccountTableBody accounts={accounts} />
      </Table>
    </TableContainer>
  );
};

export default AdminAccounts;
