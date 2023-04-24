import Link from "next/link";
import { useRouter } from "next/router";

export default function SideBar() {
    const route = useRouter()
  return (
    <div className="h-[100vh] text-white bg-orange-500 md:text-4xl lg:text-5xl mr-0">
      <div className="flex flex-col">
        <button className="h-[100px]" onClick={() => route.push('/admin/AdminCategories')}>Categories</button>
        <button className="h-[100px]" onClick={() => route.push('/admin/AdminAccounts')}>Accounts</button>
        <button className="h-[100px]" onClick={() => route.push('/admin/AdminUsers')}>Users</button>
      </div>
    </div>
  );
}
