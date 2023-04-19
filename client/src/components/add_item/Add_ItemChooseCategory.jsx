import axios from "axios";
import React, { useEffect, useState } from "react";

const Add_ItemChooseCategory = ({ data }) => {
  const [categories, setCategories] = useState(null);

  useEffect(() => {
    const getCategories = async () => {
      try {
        const res = await axios.get("http://localhost:8000/api/v1/category");

        setCategories(res.data.data);
      } catch (error) {
        console.log(error);
      }
    };

    getCategories();
  }, []);

  return <div>Add_ItemChooseCategory</div>;
};

export default Add_ItemChooseCategory;
