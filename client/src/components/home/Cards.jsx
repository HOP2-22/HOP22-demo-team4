
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
    <div className="mx-4 grid xl:grid-cols-5 xl:-gap-y-5 xl:-grid-rows-6" style={{ width: "60vw", height: "100vh" ,
    }}>
      {categories?.map((item, index) => {
        return (
          <div className="my-4">
            <Card key={index} data={item} />
          </div>
        );
      })}
    </div>
  );
}
