import React from "react";
import {
  Button,
  TableCell,
  TableRow,
  Stack,
  TextField,
  TableBody,
} from "@mui/material";
import SendIcon from "@mui/icons-material/Send";
import axios from "axios";
import { useContext, useState } from "react";
import { AuthContext } from "@/provider/AuthContext";

const UserInfo = ({ data }) => {
  const { user } = useContext(AuthContext);
  const [edit, setEdit] = useState();
  const deleteData = async (id) => {
    try {
      await axios.delete(`${process.env.BASE_URL}/user/${id}`);

      console.log("user successfully deleled");
    } catch (error) {
      console.log("error");
    }
  };

  const editData = async (id) => {
    try {
      const response = await axios.put(`${process.env.BASE_URL}/user/${id}`, {
        adminId: user?._id,
        email: edit,
      });
      console.log(response, "successfully edited");
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <TableBody>
      {data?.map((item, index) => (
        <TableRow key={index}>
          <TableCell>{item.id}</TableCell>
          <TextField
            required
            id="outlined-required"
            defaultValue={item.name}
            onChange={(e) => {
              setEdit(e.target.value);
            }}
          />
          <TableCell>{item.email}</TableCell>
          <TableCell>{item.createdAt}</TableCell>
          <TableCell>{item.publishedAccounts.length}</TableCell>
          <TableCell>
            <Stack direction="row" spacing={2}>
              <Button
                variant="contained"
                endIcon={<SendIcon />}
                onClick={() => {
                  editData(item.id);
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
  );
};

export default UserInfo;
