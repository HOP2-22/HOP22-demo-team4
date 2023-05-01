import axios from "axios";
import { useEffect, useState } from "react";
import Categories from "./categoryCards";

export default function ShowCategories() {
  const [category, setCategory] = useState();
  useEffect(() => {
    const getCategories = async () => {
      try {
        const cates = await axios.get(`http://localhost:8000/api/v1/category/`);
        setCategory(cates.data.data);
      } catch (error) {
        console.log(error);
      }
    };
    getCategories();
  }, []);
  return (
    <div className="flex gap-[25px] flex-wrap justify-between overflow-y-scroll">
      {category?.map((item, index) => {
        return (
          <div key={index}>
            <Categories data={item} />
          </div>
        );
      })}
    </div>
  );
}
