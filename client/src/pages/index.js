import Head from "next/head";
import Container from "@/components/Container";
import Layout from "@/components/layout/Layout";

export default function Home() {
  return (
    <>
      <Layout title={"Home "}>
        <Container></Container>
      </Layout>
    </>
  );
}
