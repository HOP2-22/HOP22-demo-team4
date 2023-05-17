import {
  Box,
  Table,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
} from "@mui/material";
import UserInfo from "./UserInfo";

const userData = ({ data }) => {
  const rows = data.map((row) => {
    return {
      id: row._id,
      email: row.email,
      name: row.name,
      date: row.createdAt,
      publishedAccounts: row.publishedAccounts.length,
    };
  });

  return (
    <Box>
      <TableContainer>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>ID</TableCell>
              <TableCell>Name</TableCell>
              <TableCell>Email</TableCell>
              <TableCell>When created</TableCell>
              <TableCell>Public Accounts</TableCell>
              <TableCell>Buttons</TableCell>
            </TableRow>
          </TableHead>
          <UserInfo data={data} />
        </Table>
      </TableContainer>
    </Box>
  );
};

export default userData;
