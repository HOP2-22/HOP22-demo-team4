import Container from "@/components/Container";
import Layout from "@/components/layout/Layout";
import { AuthContext } from "@/provider/AuthContext";
import axios from "axios";
import { useRouter } from "next/router";
import { useContext } from "react";

export default function index() {
  const { user } = useContext(AuthContext);

  return (
    <Layout>
      <Container>
        <h1>{user?.name}</h1>
      </Container>
    </Layout>
  );
}
