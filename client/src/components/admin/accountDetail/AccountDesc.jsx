import React from "react";
import {
  Box,
  Paper,
  TableRow,
  TableHead,
  TableContainer,
  Table,
  TableBody,
  TableCell,
  TextField,
} from "@mui/material";

const AccountDesc = ({ data }) => {
  return (
    <Box sx={styles.desc}>
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
              {data.descriptions.map((item, index) => {
                return (
                  <TableRow key={index}>
                    <TableCell component="th" scope="row">
                      <TextField
                        required
                        id="outlined-required"
                        defaultValue={item.title}
                      />
                    </TableCell>
                    <TableCell component="th" scope="row">
                      <TextField
                        width="100%"
                        required
                        id="outlined-required"
                        label="Desc"
                        defaultValue={item.desc}
                      />
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

export default AccountDesc;

const styles = {
  desc: {
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
