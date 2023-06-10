import React, { useContext, useState } from "react";
import { toast } from "react-hot-toast";
import axios from "axios";
import {
  Button,
  TableCell,
  TableRow,
  Stack,
  TextField,
  TableBody,
} from "@mui/material";
import { styled } from "@mui/material/styles";
import { purple } from "@mui/material/colors";

import { AuthContext } from "@/provider/AuthContext";

import { Pencil, Trash } from "lucide-react";

const Row = ({ users, setUsers }) => {
  const { user } = useContext(AuthContext);

  const [editValue, setEditValue] = useState({
    name: "",
    role: "",
  });

  const editData = async (id) => {
    try {
      await axios.put(`${process.env.BASE_URL}/user/${id}`, {
        adminId: user?._id,
        name: editValue.name,
      });

      let newUsers = users;

      newUsers.filter((el, index) => {
        if (el._id === id) {
          el.name === editValue.name;
          return el;
        } else {
          return el;
        }
      });

      toast.success("user edited");

      setUsers(newUsers);
    } catch (error) {
      console.log(error);
    }
  };

  const deleteData = async (id) => {
    try {
      await axios.delete(`${process.env.BASE_URL}/user/${id}`);

      setUsers((prev) => {
        let newArr = prev.filter((el, index) => el._id !== id);

        return newArr;
      });

      toast.success("user deleted");
    } catch (error) {
      console.log("error");
    }
  };

  return (
    <TableBody>
      {users?.map((item, index) => (
        <TableRow key={index}>
          <TableCell>
            {item?.role === "admin" ? `${item?.role} хэрэглэгч` : item?.id}
          </TableCell>
          <TableCell>
            <TextField
              required
              id="outlined-required"
              defaultValue={item?.name}
              onChange={(e) => {
                setEditValue({ ...editValue, name: e.target.value });
              }}
            />
          </TableCell>
          <TableCell>
            {item?.email.length - 10 > 35
              ? item?.email.slice(0, 35)
              : item?.email.length > 25
              ? item?.email.slice(0, -10)
              : item?.email}
          </TableCell>
          <TableCell>{item?.publishedAccounts?.length || 0}</TableCell>
          <TableCell>{item?.createdAt.slice(0, 10)}</TableCell>
          <TableCell>
            <Stack direction="row" spacing={1}>
              <ColorButton
                variant="contained"
                endIcon={<Pencil color="white" />}
                onClick={() => {
                  editData(item?._id);
                }}
              >
                edit
              </ColorButton>
              <Button
                variant="contained"
                endIcon={<Trash color="white" />}
                color="error"
                onClick={() => deleteData(item?.id)}
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

export default Row;

const ColorButton = styled(Button)(({ theme }) => ({
  color: theme.palette.getContrastText(purple[500]),
  backgroundColor: "#4f46e5",
  "&:hover": {
    backgroundColor: "#4338ca",
  },
}));
