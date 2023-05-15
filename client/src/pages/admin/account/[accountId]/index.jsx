import AccountImages from "@/components/admin/accountDetail/AccountImages";
import React from "react";
import AdminSideBar from "@/components/admin/AdminSideBar";
import { Box } from "@mui/material";
import axios from "axios";
import AccountPrice from "@/components/admin/accountDetail/AccountPrice";
import AccountButton from "@/components/admin/accountDetail/AccountButton";
import AccountDesc from "@/components/admin/accountDetail/AccountDesc";
import AccountTitle from "@/components/admin/accountDetail/AccountTitle";
import AccountSold from "@/components/admin/accountDetail/AccountSold";

const AccountDetail = ({ data, error }) => {
  if (error) {
    return <div>{error}</div>;
  }

  return (
    <AdminSideBar>
      <Box sx={{ padding: "30px 30px 60px 30px" }}>
        <Box>
          <AccountImages data={data} />
          <AccountSold data={data} />
          <AccountTitle title={data.title} createdAt={data.createdAt} />
          <AccountPrice price={data.price} />
        </Box>
        <AccountDesc data={data} />
        <AccountButton />
      </Box>
    </AdminSideBar>
  );
};

export default AccountDetail;

export async function getServerSideProps(context) {
  const id = context?.params?.accountId;

  try {
    const { data } = await axios.get(
      `http://localhost:8000/api/v1/account/${id}`
    );

    return {
      props: {
        data: data?.data,
      },
    };
  } catch (error) {
    console.error(error);
    return {
      props: {
        error: error.message,
      },
    };
  }
}
