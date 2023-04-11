import axios from "axios";
import { useContext, useEffect, useState } from "react";

import { Layout } from "@/components/layout/Layout";
import { Container } from "@/components/Container";
import { HomeFilter } from "@/components/home/HomeFilter";
import { HomeCards } from "@/components/home/HomeCards";
import { useRouter } from "next/router";
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
        push("/500");
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
            <HomeCards category={category} />
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
