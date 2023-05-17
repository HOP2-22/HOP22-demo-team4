import AdminSideBar from "@/components/admin/AdminSideBar";
import EditCategory from "@/components/admin/Cate/editCategory/categoryImage";
import HeadBottom from "@/components/admin/Cate/editCategory/head&bottom";
import axios from "axios";
import { Edit } from "lucide-react";
import { useRouter } from "next/router";

const AdminCategory = ({ data }) => {
  console.log(data.data);
  const router = useRouter();
  return (
    <AdminSideBar>
      <HeadBottom data={data} className=""/>
    </AdminSideBar>
  );
};

export default AdminCategory;
export async function getServerSideProps(context) {
  const id = context.query.categoryID;
  const data = await axios.get(`http://localhost:8000/api/v1/category/${id}`);
  
  return {
    props: { data: data.data.data },
  };
}
