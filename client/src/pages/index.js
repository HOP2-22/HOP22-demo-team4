import axios from "axios";
import { useContext, useEffect, useState } from "react";

import { Layout } from "@/components/layout/Layout";
import { Container } from "@/components/Container";
import { BooleanContext } from "@/provider/BooleanContext";
import { Card } from "@/components/home/Card";
import { HomeFilter } from "@/components/home/HomeFilter";

export default function Home() {
  const types = [
    { name: "None", tp: "" },
    { name: "Sandbox", tp: "sandBox" },
    { name: "Shooters", tp: "shooters" },
    { name: "Multiplayer online battle arena", tp: "MOBA" },
    { name: "sports", tp: "sports" },
    { name: "Puzzlers and party games", tp: "puzzle" },
    { name: "Action adventure", tp: "AA" },
  ];

  const [currentType, setCurrentType] = useState("None");

  const [searchValue, setSearchValue] = useState("");

  const { setLoading } = useContext(BooleanContext);

  const [category, setCategory] = useState([]);
  const [firstAllCategories, setFirstAllCategories] = useState([]);

  useEffect(() => {
    const getCategory = async () => {
      setLoading(true);
      try {
        const i = types.findIndex((item) => item.name === currentType);

        const res = await axios.post(
          "http://localhost:8000/api/v1/category/type",
          { type: types[i].tp }
        );

        setFirstAllCategories(res.data.data);

        setCategory(res.data.data);
      } catch (error) {
        console.log(error);
      }
      setLoading(false);
    };

    getCategory();
  }, [currentType]);

  return (
    <>
      <Layout title={"Home "}>
        <Container className={"pt-[120px]"}>
          <HomeFilter
            currentType={currentType}
            setCurrentType={setCurrentType}
            types={types}
            searchValue={searchValue}
            setSearchValue={setSearchValue}
            firstAllCategories={firstAllCategories}
            setCategory={setCategory}
          />
          {category.length > 0 ? (
            <div className="px-5 sm:px-0 grid grid-cols-2 xsm:grid-cols-3 gap-4 lg:gap-5 sm:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 2xl:grid-cols-7">
              {category?.map((item, index) => {
                return <Card key={index} data={item} />;
              })}
            </div>
          ) : (
            <div className="w-full h-full sm:pt-2 px-5 sm:px-0">
              <p className="text-[20px]">any category found search again</p>
            </div>
          )}
        </Container>
      </Layout>
    </>
  );
}
