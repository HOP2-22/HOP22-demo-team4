import AdminSideBar from "@/components/admin/AdminSideBar";
import EditCategory from "@/components/admin/Catogeries/editCategory";
import axios from "axios";
import { Edit } from "lucide-react";
import { useRouter } from "next/router";

const AdminCategory = ({ data }) => {
  console.log(data.data)
  const router = useRouter();
  return (
    <AdminSideBar>
      <EditCategory data={data} />
      {/* <div>where : {router.query.categoryID}</div> */}
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
