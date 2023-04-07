import axios from "axios";

import { Layout } from "@/components/layout/Layout";
import { Container } from "@/components/Container";
import { SideBar } from "@/components/category/SideBar";
import { MobileHeaderBar } from "@/components/category/MobileHeaderBar";
import { Paginate } from "@/components/Paginate";
import { CategoryCard } from "@/components/category/CategoryCard";
import { useRouter } from "next/router";
import { useEffect } from "react";

export default function index({
  data,
  pagination,
  min,
  max,
  step,
  title,
  categories,
  error,
}) {
  const router = useRouter();
  const { slugify } = router.query;

  useEffect(() => {
    if (!categories.find((catItem) => catItem.slugify == slugify)) {
      router.back();
    }
  }, []);

  return (
    <Layout title={title}>
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
        <div className="grid grid-cols-10 gap-y-10 gap-x-8">
          <SideBar
            min={min}
            max={max}
            step={step}
            currentCat={title}
            categories={categories}
          />
          <MobileHeaderBar
            min={min}
            max={max}
            step={step}
            currentCat={title}
            categories={categories}
          />
          {error ? (
            <div className="pt-28 col-span-10 md:col-span-7">
              <p className="md:text-[16px] lg:text-[18px]">
                This category dont have any item.
                <span
                  className="underline underline-offset-4 cursor-pointer"
                  onClick={() => router.push("/")}
                >
                  Go to home page
                </span>
              </p>
            </div>
          ) : (
            <>
              <div className="col-span-10 md:col-span-7 w-full grid grid-cols-12 gap-x-5 2xl:gap-x-8 gap-y-6">
                {data?.map((item, index) => {
                  return <CategoryCard key={index} data={item} />;
                })}
              </div>
              <Paginate pagination={pagination} />
            </>
          )}
        </div>
      </Container>
    </Layout>
  );
}

export async function getServerSideProps(context) {
  const { params } = context;
  const { query } = context;
  try {
    const data = await axios.get(`http://localhost:8000/api/v1/category`);

    const response = await axios.post(
      `http://localhost:8000/api/v1/category/accounts?page=${
        query.page ? query.page : 1
      }&price[$gte]=${query.min ? query.min : 0}&price[$lte]=${
        query.max ? query.max : 69696969
      }&sort=${query.sort && query.sort}`,
      { slugify: params.slugify }
    );

    return {
      props: {
        title: response.data.data[0].category.name,
        data: response.data.data,
        pagination: response.data.pagination,
        min: response.data.min,
        max: response.data.max,
        step: response.data.step,
        categories: data.data.data,
      },
    };
  } catch (error) {
    const data = await axios.get(`http://localhost:8000/api/v1/category`);

    return {
      props: {
        title: params.slugify,
        categories: data.data.data,
        error: true,
      },
    };
  }
}
