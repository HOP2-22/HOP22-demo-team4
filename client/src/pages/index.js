import Head from "next/head";
import Container from "@/components/Container";
import Layout from "@/components/layout/Layout";
import Carouselll from "@/components/home/Carousel"

export default function Home() {
  return (
    <>
      <Layout title={"Home "}>
        <div>
          <Carouselll/>
        </div>
      </Layout>
    </>
  );
}
