import React, { useState } from "react";
import axios from "axios";
import {
  Table,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
} from "@mui/material";

import AdminSideBar from "@/components/admin/AdminSideBar";
import Row from "@/components/admin/CategoryRow";

const Categories = ({ data }) => {
  console.log(data);
  const [categories, setCategories] = useState(data);

  return (
    <AdminSideBar className={"pt-[50px] flex flex-col gap-10 px-10"}>
      <div className="grid grid-cols-12"></div>
      <TableContainer className="">
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>ID</TableCell>
              <TableCell>Name</TableCell>
              <TableCell>When created</TableCell>
              <TableCell>Creater name</TableCell>
            </TableRow>
          </TableHead>
          <Row categories={categories} setCategories={setCategories} />
        </Table>
      </TableContainer>
    </AdminSideBar>
  );
};

export default Categories;

export async function getServerSideProps() {
  try {
    const res = await axios.get(`${process.env.BASE_URL}/category`);

    return {
      props: {
        data: res.data.data,
      },
    };
  } catch (error) {
    return {
      redirect: {
        destination: "/",
      },
    };
  }
}
