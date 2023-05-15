// import * as React from "react";
// import { DataGrid } from "@mui/x-data-grid";

// const userData = () => {
//   return (
//     <div style={{ height: 400, width: "100%" }}>
//       <DataGrid
//         // rows={rows}
//         // columns={columns}
//         initialState={{
//           pagination: {
//             paginationModel: { page: 0, pageSize: 5 },
//           },
//         }}
//         pageSizeOptions={[10, 10]}
//         checkboxSelection
//       />
//     </div>
//   );
// };

// export default userData;

// import * as React from "react";
// import Box from "@mui/material/Box";
// import { DataGrid } from "@mui/x-data-grid";

// const columns = [
//   { field: "id", headerName: "ID", width: 70 },
//   { field: "firstName", headerName: "Name", width: 130 },
//   { field: "lastName", headerName: "Email", width: 130 },
//   { field: "lastName", headerName: "Chatrooms", width: 130 },
//   { field: "lastName", headerName: "Accounts published", width: 130 },
//   {
//     field: "age",
//     headerName: "Age",
//     type: "number",
//     width: 90,
//   },
//   {
//     field: "fullName",
//     headerName: "Full name",
//     description: "This column has a value getter and is not sortable.",
//     sortable: false,
//     width: 160,
//     valueGetter: (params) =>
//       `${params.row.firstName || ""} ${params.row.lastName || ""}`,
//   },
// ];

// const rows = data.map((row) => {
//   return {
//       id: row._id,
//       lastName: row.email,
//       firstName: row.name,
//       age: row.age,
//       publishedAccounts: row.publishedAccounts.length,
//     };
// }
//   });

// // const rows = data.map((row) => {
//     // return {
//     //   id: row._id,
//     //   lastName: row.email,
//     //   firstName: row.name,
//     //   age: row.age,
//     //   publishedAccounts: row.publishedAccounts.length,
//     // };
// //   });
// const UserData = ({data}) => {
//   const users = data.map((user) => {
//     return {
//       id: user._id,
//       lastName: user.email,
//       firstName: user.name,
//       age: user.age,
//       publishedAccounts: user.publishedAccounts.length,
//     };
//   });
//   return (
//     <Box sx={{ height: 800, width: "100%" }}>
//       <DataGrid
//         rows={rows}
//         columns={columns}
//         initialState={{
//           pagination: {
//             paginationModel: { page: 0, pageSize: 10 },
//           },
//         }}
//         pageSizeOptions={[5, 10]}
//         checkboxSelection
//       />
//     </Box>
//   );
// };

// export default UserData;

import {
  Box,
  Button,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Stack,
  TextField,
} from "@mui/material";
import SendIcon from "@mui/icons-material/Send";
import axios from "axios";
import { useState } from "react";

const Data = ({ data }) => {
  const [edit, setEdit] = useState();

  const deleteData = async (id) => {
    try {
      await axios.delete(`http://localhost:8000/api/v1/user/${id}`);

      console.log("1");
    } catch (error) {
      console.log("error");
    }
  };

  const editData = async () => {
    console.log(edit);
    try {
      const response = await axios.put(
        `http://localhost:8000/api/v1/user/${id}`,
        {
          email: edit,
        }
      );
      console.log(response);
    } catch (error) {
      console.log(error);
    } finally {
      fetchData();
    }
  };

  const rows = data.map((row) => {
    return {
      id: row._id,
      email: row.email,
      name: row.name,
      date: row.createdAt,
      publishedAccounts: row.publishedAccounts.length,
    };
  });

  console.log(rows, "this is row");

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
          <TableBody>
            {data?.map((item, index) => (
              <TableRow key={index}>
                <TableCell>{item.id}</TableCell>
                <TextField
                  required
                  id="outlined-required"
                  defaultValue={item.name}
                  onChange={() => {
                    setEdit();
                  }}
                />
                {/* <TableCell>{item.name}</TableCell> */}
                <TableCell>{item.email}</TableCell>
                <TableCell>{item.createdAt}</TableCell>
                <TableCell>{item.publishedAccounts.length}</TableCell>
                <TableCell>
                  <Stack direction="row" spacing={2}>
                    <Button
                      variant="contained"
                      endIcon={<SendIcon />}
                      onClick={() => {
                        editData();
                      }}
                    >
                      edit
                    </Button>
                    <Button
                      variant="contained"
                      color="error"
                      onClick={() => deleteData(item.id)}
                    >
                      Delete
                    </Button>
                  </Stack>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </Box>
  );
};

export default Data;
