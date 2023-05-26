import axios from "axios";
import Image from "next/image";

import { Layout } from "@/components/layout/Layout";
import { Container } from "@/components/Container";
import { SideBar } from "@/components/category/SideBar";
import { Paginate } from "@/components/Paginate";
import { CategoryCard } from "@/components/category/CategoryCard";
import { Empty } from "@/components/category/Empty";

const Category = ({ paginate, min, data, max, step, categories, error }) => {
  return (
    <Layout title={data.name}>
      <img
        width={1000}
        height={1000}
        className="hidden md:block md:h-[250px] lg:h-[320px] w-full object-cover mt-[70px] fixed"
        src={data.coverPhoto}
        draggable="false"
        alt=""
      />

      <Container
        className={
          "pb-[70px] px-5 sm:px-0 pt-[90px] md:pt-[230px] lg:pt-[300px] relative z-20"
        }
      >
        <div className="flex flex-col md:flex-row gap-y-10 gap-x-8">
          <SideBar
            min={min}
            max={max}
            step={step}
            currentCat={data.name}
            categories={categories}
          />
          {data.accounts.length === 0 ? (
            <Empty />
          ) : (
            <>
              <div className="w-full md:w-[70%] grid grid-cols-12 gap-x-5 2xl:gap-x-8 gap-y-0">
                {data?.accounts?.map((item, index) => {
                  return (
                    <CategoryCard
                      key={index}
                      data={item}
                      slugify={data.slugify}
                    />
                  );
                })}
              </div>
            </>
          )}
        </div>
        {!error && <Paginate paginate={paginate} />}
      </Container>
    </Layout>
  );
};

export async function getServerSideProps(context) {
  const { query } = context;

  try {
    const response = await axios.post(
      `${process.env.BASE_URL}/category/slugify?page=${
        query.page ? query.page : 1
      }&price[$gte]=${query.min ? query.min : 0}&price[$lte]=${
        query.max ? query.max : 6969696999
      }&sort=${query.p ? query.p : ""} ${query.d ? query.d : ""}`,
      { slugify: query.slugify }
    );

    return {
      props: {
        data: response?.data?.data,
        paginate: response?.data?.paginate,
        min: response?.data?.min,
        max: response?.data?.max,
        step: response?.data?.step,
        categories: response?.data?.categories,
      },
    };
  } catch (error) {
    return {
      props: {
        data: "",
      },
    };
  }
}

export default Category;
