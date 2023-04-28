import CreateCategory from "@/components/admin/CreateCategory";
import ShowCategories from "@/components/admin/ShowCategories";
import SideBar from "@/components/admin/SideBar";

export default function AdminCategories() {
  return (
    <div className="grid grid-cols-12 grid-flow-col h-[100vh]">
      <div className="col-span-3">
        <div className="flex flex-col">
          <SideBar />
        </div>
      </div>
      <div className="col-span-9 overflow-y-scroll bg-yellow-300">
        <div className="">
          <CreateCategory />
        </div>
        <div className="">
          <ShowCategories />
        </div>
      </div>
    </div>
  );
}
