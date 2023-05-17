import React from "react";
import axios from "axios";

import AdminSideBar from "@/components/admin/AdminSideBar";
import { Box } from "@mui/material";
import UserData from "@/components/admin/users/UserData";

const Users = ({ data }) => {
  console.log(data);
  return (
    <AdminSideBar>
      <Box sx={{ padding: "70px" }}>
        <UserData data={data} />
      </Box>
    </AdminSideBar>
  );
};

export default Users;

export async function getServerSideProps() {
  const res = await axios.get(`http://localhost:8000/api/v1/user`);

  return {
    props: { data: res.data.data },
  };
}
