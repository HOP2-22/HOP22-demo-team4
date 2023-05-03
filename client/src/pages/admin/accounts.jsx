import React from "react";

import AdminSideBar from "@/components/admin/AdminSideBar";
import {
  Box,
  ImageListItem,
  ImageListItemBar,
  IconButton,
  Grid,
} from "@mui/material";
import InfoIcon from "@mui/icons-material/Info";
import { AdminAccountImage } from "@/components/admin/Accounts";
import Link from "next/link";

const Accounts = ({ data }) => {
  console.log(data);
  return (
    <AdminSideBar>
      <AdminAccountImage data={data} />
    </AdminSideBar>
  );
};

export default Accounts;

export async function getServerSideProps(context) {
  const id = context.query.account;

  const res = await fetch(`http://localhost:8000/api/v1/account/`);

  const data = await res.json();

  return {
    props: { data: data.data },
  };
}
