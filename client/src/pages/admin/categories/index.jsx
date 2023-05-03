import React from "react";

import AdminSideBar from "@/components/admin/AdminSideBar";
import CreateCategory from "@/components/admin/Catogeries/createCate";
import ShowCategories from "@/components/admin/Catogeries/showCategories";

const Categories = () => {
  return (
    <AdminSideBar>
      <div className="overflow-y-scroll">
        <ShowCategories />
      </div>
    </AdminSideBar>
  );
};

export default Categories;
