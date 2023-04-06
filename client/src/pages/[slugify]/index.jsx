import axios from "axios";

import { Layout } from "@/components/layout/Layout";
import { Container } from "@/components/Container";
import { SideBar } from "@/components/SideBar";
import { Paginate } from "@/components/Paginate";
import { CategoryCard } from "@/components/category/CategoryCard";

export default function index({ data, pagination, min, max }) {
  return (
    <Layout>
      <img
        className="hidden md:block md:h-[250px] lg:h-[320px] w-full object-cover mt-[70px] fixed"
        src={
          "https://res.cloudinary.com/dymjjmeyc/image/upload/v1680692617/MobileLegendsRoles_ctwvha.png"
        }
      />
      <Container
        className={
          "pb-[70px] px-5 sm:px-0 pt-[90px] md:pt-[230px] lg:pt-[300px]"
        }
      >
        <div className="grid grid-cols-10 gap-y-10 gap-x-14">
          <SideBar />
          <div className="col-span-10 md:col-span-7 w-full grid grid-cols-12 gap-x-5 2xl:gap-x-8 gap-y-6">
            {data?.map((item, index) => {
              return <CategoryCard key={index} data={item} />;
            })}
          </div>
        </div>
        <Paginate pagination={pagination} />
      </Container>
    </Layout>
  );
}

export async function getServerSideProps(context) {
  const { params } = context;
  const { query } = context;

  const response = await axios.post(
    `http://localhost:8000/api/v1/category/accounts?page=${
      query.page ? query.page : 1
    }&price[$gte]=${query.min ? query.min : 0}&price[$lte]=${
      query.max ? query.max : 69696969
    }`,
    { slugify: params.category }
  );

  return {
    props: {
      data: response.data.data,
      pagination: response.data.pagination,
      min: response.data.min,
      max: response.data.max,
    },
  };
}
