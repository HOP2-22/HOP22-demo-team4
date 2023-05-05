import axios from "axios";
import { useEffect, useState } from "react";
import Image from "next/image";

import Card from "./Card";

export default function Cards({ title, link, type }) {
  const [categories, setCategories] = useState([]);

  const [loading, setLoading] = useState();

  useEffect(() => {
    const getCategories = async () => {
      setLoading(true);

      try {
        const res = await axios.post(link, { type: type });
        setCategories(res.data.data);
      } catch (error) {
        console.log(error);
      }

      setLoading(false);
    };

    getCategories();
  }, []);

  if (loading) {
    return (
      <>
        <Image width={200} height={200} src="loading.gif" alt="" />
      </>
    );
  }

  return (
    <div className="h-[220px]">
      <div className="text-3xl mb-2">{title}</div>
      <div className="min-w-full flex overflow-x-auto ">
        {categories?.map((item, index) => {
          return <Card key={index} data={item} />;
        })}
      </div>
    </div>
  );
}
