import index from "@/pages/[category]";
import axios from "axios";
import { useEffect, useState } from "react";

import Card from "./Card";

export default function Cards() {
  const [categories, setCategories] = useState([]);

  const [loading, setLoading] = useState();

  useEffect(() => {
    const getCategories = async () => {
      setLoading(true);
      try {
        const res = await axios.get("/api/categories");

        setCategories(res.data.data);

        console.log("first");
      } catch (error) {
        console.log(error);
      }
      setLoading(false);
    };

    getCategories();
  }, []);

  if (loading)
    return (
      <>
        <img src="loading.gif" />
      </>
    );

  return (
    <div style={{ width: "100vw", height: "100vh", display: "flex" ,
    }}>
      {categories?.map((item, index) => {
        return (
          <div>
            <Card key={index} data={item} />
          </div>
        );
      })}
    </div>
  );
}
