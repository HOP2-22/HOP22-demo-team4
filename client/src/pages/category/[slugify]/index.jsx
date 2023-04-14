import axios from "axios";

import { Layout } from "@/components/layout/Layout";
import { Container } from "@/components/Container";
import { SideBar } from "@/components/category/SideBar";
import { Paginate } from "@/components/Paginate";
import { CategoryCard } from "@/components/category/CategoryCard";
import { useRouter } from "next/router";
import { useEffect } from "react";
import { Empty } from "@/components/category/Empty";

const Category = ({
  pagination,
  min,
  data,
  max,
  step,
  title,
  categories,
  error,
  category,
}) => {
  const { back, query } = useRouter();
  const { slugify } = query;

  useEffect(() => {
    console.log(pagination);

    if (!categories.find((catItem) => catItem.slugify == slugify)) {
      back();
    }
  }, []);

  return (
    <Layout title={title}>
      <img
        className="hidden md:block md:h-[250px] lg:h-[320px] w-full object-cover mt-[70px] fixed -z-10"
        src={category}
        draggable="false"
      />
      <Container
        className={
          "pb-[70px] px-5 sm:px-0 pt-[90px] md:pt-[230px] lg:pt-[300px]"
        }
      >
        <div className="flex flex-col md:flex-row gap-y-10 gap-x-8">
          <SideBar
            min={min}
            max={max}
            step={step}
            currentCat={title}
            categories={categories}
          />
          {error ? (
            <Empty />
          ) : (
            <>
              <div className="w-full md:w-[70%] grid grid-cols-12 gap-x-5 2xl:gap-x-8 gap-y-0">
                {data?.map((item, index) => {
                  return <CategoryCard key={index} data={item} />;
                })}
              </div>
            </>
          )}
        </div>
        {!error && <Paginate pagination={pagination} />}
      </Container>
    </Layout>
  );
};

export async function getServerSideProps(context) {
  const { query } = context;

  try {
    const data = await axios.get(`http://localhost:8000/api/v1/category`);

    const response = await axios.post(
      `http://localhost:8000/api/v1/category/accounts?page=${
        query.page ? query.page : 1
      }&price[$gte]=${query.min ? query.min : 0}&price[$lte]=${
        query.max ? query.max : 6969696999
      }&sort=${query.p && query.p} ${query.d && query.d}`,
      { slugify: query.slugify }
    );

    return {
      props: {
        category: response.data.data[0].category.coverPhoto,
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

    const category = data.data.data.filter(
      (item) => item.slugify === query.slugify
    );

    return {
      props: {
        title: query.slugify,
        categories: data.data.data,
        category: category[0].coverPhoto,
        error: true,
      },
    };
  }
}

export default Category;
