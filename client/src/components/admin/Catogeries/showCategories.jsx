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
        // for(let n = 0 ; n < cates.data.data.length ; n++){
        //   console.log(cates.data.data[n].name)
        // }
        
      } catch (error) {
        console.log(error);
      }
    };
    getCategories();
  }, []);
  return (
    <div className="flex gap-[25px] flex-wrap justify-around overflow-y-scroll">
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
