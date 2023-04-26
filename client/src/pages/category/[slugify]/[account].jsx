import { Box } from "@mui/material";
import { Container } from "@/components/Container";
import { Layout } from "@/components/layout/Layout";
import {
  Price,
  SimilarItem,
  AccountInfo,
  Title,
  Images,
  PhoneImages,
} from "@/components/accountDetail/AccountDetailImages";

const CategoryAccount = ({ data }) => {
  console.log(data);
  return (
    <Layout>
      <Container className={"px-5 sm:px-0"}>
        <Box sx={{ paddingTop: "70px", width: "100%" }}>
          <Images data={data} />
          <PhoneImages data={data} />
          <Title title={data.title} createdAt={data.createdAt} />
          <AccountInfo data={data} />
          <Price price={data.price} />
          <SimilarItem category={data.category} />
        </Box>
      </Container>
    </Layout>
  );
};

export default CategoryAccount;

export async function getServerSideProps(context) {
  const id = context.query.account;

  const res = await fetch(`http://localhost:8000/api/v1/account/${id}`);

  const data = await res.json();

  return {
    props: { data: data.data },
  };
}
