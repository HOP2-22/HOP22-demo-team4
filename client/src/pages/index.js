import axios from "axios";
import { useContext, useEffect, useState } from "react";
import { useRouter } from "next/router";

import HomeCarousel from "@/components/home/HomeCarousel";
import { Layout } from "@/components/layout/Layout";
import { Container } from "@/components/Container";
import { HomeFilter } from "@/components/home/HomeFilter";
import { HomeCards } from "@/components/home/HomeCards";
import { AuthContext } from "@/provider/AuthContext";

const Home = () => {
  const types = [
    { name: "None", tp: "" },
    { name: "Sandbox", tp: "sandBox" },
    { name: "Battle Royal", tp: "BR" },
    { name: "Multiplayer online battle arena", tp: "MOBA" },
    { name: "Sports", tp: "sports" },
    { name: "Card game", tp: "CG" },
    { name: "Action adventure", tp: "AA" },
    { name: "Strategy game", tp: "strategy" },
    { name: "Royal playing game", tp: "rpg" },
  ];

  const { push } = useRouter();

  const [currentType, setCurrentType] = useState("None");

  const [searchValue, setSearchValue] = useState("");

  const { setLoading } = useContext(AuthContext);

  const [categories, setCategories] = useState([]);
  const [firstAllCategories, setFirstAllCategories] = useState([]);

  useEffect(() => {
    const getCategory = async () => {
      setLoading(true);

      try {
        const index = types.findIndex((item) => item.name === currentType);

        const res = await axios.post(
          "http://localhost:8000/api/v1/category/type?select=name photo slugify",
          { type: types[index].tp }
        );

        setFirstAllCategories(res.data.data);
        setCategories(res.data.data);
      } catch (error) {
        push("/500");
      }

      setLoading(false);
    };

    getCategory();
  }, [currentType]);

  return (
    <>
      <Layout title={"Home "}>
        <HomeCarousel />
        <Container
          className={
            "pt-[20px] w-full sm:w-[600px] md:w-[700px] lg:w-[970px] xl:w-[1180px] 2xl:w-[1380px] 3xl:w-[1730px]"
          }
        >
          <HomeFilter
            currentType={currentType}
            setCurrentType={setCurrentType}
            types={types}
            searchValue={searchValue}
            setSearchValue={setSearchValue}
            firstAllCategories={firstAllCategories}
            setCategories={setCategories}
          />
          {categories.length > 0 ? (
            <HomeCards categories={categories} />
          ) : (
            <div className="w-full h-full sm:pt-2 px-5 sm:px-0">
              <p className="text-[20px]">Ийм нэртэй категор олдсонгүй.</p>
            </div>
          )}
        </Container>
      </Layout>
    </>
  );
};

export default Home;
