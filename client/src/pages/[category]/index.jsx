import { useRouter } from "next/router";

import Layout from "@/components/layout/Layout";
import Container from "@/components/Container";
import axios from "axios";
import ProfileCard from "@/components/profile/ProfileCard";

export default function index({ data }) {
  return (
    <Layout>
      <img
        className="h-[150px] md:h-[180px] lg:h-[200px] w-full object-cover mt-[70px]"
        src={
          "https://res.cloudinary.com/dymjjmeyc/image/upload/v1680692617/MobileLegendsRoles_ctwvha.png"
        }
      />
      <Container>
        <div className="text-2xl text-red-600 bg-red-100 z-[40]">
          Mobile legends
        </div>
        <div className="w-full grid grid-cols-12 gap-x-5 2xl:gap-x-8 gap-y-6 px-5 sm:px-0">
          {data.map((item, index) => {
            return <ProfileCard key={index} data={item} />;
          })}
        </div>
      </Container>
    </Layout>
  );
}

export async function getServerSideProps(context) {
  const { params } = context;

  const response = await axios.post(
    `http://localhost:8000/api/v1/category/accounts`,
    { slugify: params.category }
  );

  return {
    props: {
      data: response.data.data,
    },
  };
}
