import { useRouter } from "next/router";

import Layout from "@/components/layout/Layout";
import Container from "@/components/Container";

export default function index() {
  const { query } = useRouter();
  const { category } = query;

  return (
    <Layout>
      <Container className="pt-[70px]"></Container>
    </Layout>
  );
}
