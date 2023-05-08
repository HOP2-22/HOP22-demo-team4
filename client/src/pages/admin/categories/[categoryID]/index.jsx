import AdminSideBar from "@/components/admin/AdminSideBar";
import EditCategory from "@/components/admin/Catogeries/editCategory";
import axios from "axios";
import { Edit } from "lucide-react";
import { useRouter } from "next/router";

const AdminCategory = ({ data }) => {
  return (
    <AdminSideBar>
      <EditCategory data={data} />
    </AdminSideBar>
  );
};

export default AdminCategory;

export async function getServerSideProps(context) {
  const { categoryId } = context.query;

  const { data } = await axios.get(
    `http://localhost:8000/api/v1/category/${categoryId}`
  );
    console.log(data)
  return {
    props: {
      data: data.data,
    },
  };
}
