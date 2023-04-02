import Container from "@/components/Container";
import Layout from "@/components/layout/Layout";
import axios from "axios";

export default function cart({ data }) {
  return (
    <Layout title={"Cart"}>
      <Container className="pt-[70px]">
        <div className="grid grid-cols-2 px-4">
          {data.map((item, index) => {
            return (
              <div className="" key={index}>
                aa
              </div>
            );
          })}
        </div>
      </Container>
    </Layout>
  );
}

export async function getServerSideProps(context) {
  const res = await axios.get("http://localhost:8000/api/v1/category/accounts");

  return {
    props: {
      data: res.data.data,
    },
  };
}
