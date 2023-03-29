import Head from "next/head";
import { Inter } from "next/font/google";
import Layout from "@/components/Layout";
import Container from "@/components/Container";

export default function Home() {
  return (
    <>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Container></Container>
    </>
  );
}
