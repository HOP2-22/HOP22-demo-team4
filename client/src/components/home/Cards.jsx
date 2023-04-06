import axios from "axios";
import { useEffect, useState } from "react";
import { Card } from "./Card";

export const Cards = ({ title, link, type }) => {
  const [categories, setCategories] = useState([]);

  const [loading, setLoading] = useState();

  useEffect(() => {
    const getCategories = async () => {
      setLoading(true);

      try {
        const res = await axios.post(link, { type: type });
        console.log(res.data.data);
        setCategories(res.data.data);
        // console.log(res.data);
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
        <img src="loading.gif" />
      </>
    );
  }

  return (
    <div className="h-[200px]">
      <div className="text-3xl mb-2">{title}</div>
      <div className="flex">
        {categories?.map((item, index) => {
          return <Card key={index} data={item} />;
        })}
      </div>
    </div>
  );
};
