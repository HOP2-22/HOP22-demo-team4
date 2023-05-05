import {
  Box,
  Paper,
  TableRow,
  TableHead,
  TableContainer,
  Table,
  TableBody,
  TableCell,
} from "@mui/material";
import React from "react";

const AccountDetailDescriptions = ({ data }) => {
  return (
    <Box sx={styles.descContainer}>
      <Box>
        <TableContainer component={Paper}>
          <Table sx={{ minWidth: 650 }} aria-label="caption table">
            <TableHead>
              <TableRow>
                <TableCell sx={styles.tableInfoTitle}>Title:</TableCell>
                <TableCell sx={styles.tableInfoDesc}>Descriptions:</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {data.descriptions.map((desc, index) => {
                return (
                  <TableRow key={index}>
                    <TableCell component="th" scope="row">
                      {desc.title}
                    </TableCell>
                    <TableCell component="th" scope="row">
                      {desc.desc}
                    </TableCell>
                  </TableRow>
                );
              })}
            </TableBody>
          </Table>
        </TableContainer>
      </Box>
    </Box>
  );
};

export default AccountDetailDescriptions;

const styles = {
  descContainer: {
    marginTop: "40px",
  },
  tableInfoTitle: {
    fontSize: "18px",
    fontWeight: "600px",
    width: "30%",
  },
  tableInfoDesc: {
    fontSize: "18px",
    fontWeight: "600px",
    width: "70%",
  },
};
