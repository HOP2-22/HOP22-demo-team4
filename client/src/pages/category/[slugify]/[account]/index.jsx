import { Box } from "@mui/material";
import axios from "axios";

import { Container } from "@/components/Container";
import { Layout } from "@/components/layout/Layout";
import AccountDetailTitle from "@/components/accountDetail/AccountDetailTitle";
import AccountDetailPhoneImages from "@/components/accountDetail/AccountDetailPhoneImages";
import AccountDetailDesktopImages from "@/components/accountDetail/AccountDetailDesktopImages";
import AccountDetailDescriptions from "@/components/accountDetail/AccountDetailDescriptions";
import AccountDetailPrice from "@/components/accountDetail/AccountDetailPrice";
import AccountDetailSimilarItems from "@/components/accountDetail/AccountDetailSimilarItems";

const Account = ({ data }) => {
  return (
    <Layout>
      <Container className={"px-5 sm:px-0"}>
        <Box sx={{ paddingTop: "70px", width: "100%" }}>
          {/* <AccountDetailDesktopImages data={data} /> */}
          {/* <AccountDetailPhoneImages data={data} /> */}
          <AccountDetailTitle title={data.title} createdAt={data.createdAt} />
          <AccountDetailDescriptions data={data} />
          <AccountDetailPrice price={data.price} data={data} />
          <AccountDetailSimilarItems category={data.category} />
        </Box>
      </Container>
    </Layout>
  );
};

export default Account;

export async function getServerSideProps(context) {
  const id = context.query.account;

  const res = await axios.get(`http://localhost:8000/api/v1/account/${id}`);

  return {
    props: { data: res.data.data },
  };
}
