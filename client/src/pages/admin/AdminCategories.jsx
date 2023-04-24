import CreateCategory from "@/components/admin/CreateCategory";
import ShowCategories from "@/components/admin/ShowCategories";
import SideBar from "@/components/admin/SideBar";

export default function AdminCategories() {
  return (
    <div className="grid grid-cols-12 grid-flow-col gap-2 h-[100vh]">
      <div className="col-span-3">
        <div className="flex flex-col">
          <SideBar />
        </div>
      </div>
      <div className="col-span-9 flex flex-col bg-yellow-300">
        <CreateCategory />
        <div className="border">
          <ShowCategories />
        </div>
      </div>
    </div>
  );
}
