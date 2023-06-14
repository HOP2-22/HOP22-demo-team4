import AdminSideBar from "@/components/admin/AdminSideBar";
import axios from "axios";
import { Check } from "lucide-react";
import React, { useState } from "react";
import { toast } from "react-hot-toast";

export async function getServerSideProps() {
  try {
    const { data } = await axios.get(`${process.env.BASE_URL}/request`);

    return {
      props: {
        data: data.data,
      },
    };
  } catch (error) {
    return {
      redirect: {
        distination: "/",
      },
    };
  }
}

const NewGameRedquest = ({ data }) => {
  const [requests, setRequests] = useState(data);

  const check = async (id) => {
    try {
      await axios.delete(`${process.env.BASE_URL}/request/${id}`);

      setRequests((prev) => prev.filter((request) => request._id !== id));

      toast.success("Хүсэлтийг хүлээн авлаа");
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <AdminSideBar className={"w-full pt-[50px] flex flex-col gap-4 px-10"}>
      <p className="mb-[30px] text-4xl font-medium text-black">
        New game requests
      </p>
      <div className="w-full px-8 py-3 flex flex-col gap-3 divide-y divide-black/50">
        <div className="w-full flex justify-between items-center">
          <p className="text-[26px]">Game name:</p>
          <p className="text-[26px]">Check:</p>
        </div>

        {requests.length === 0 ? (
          <div className="pt-14 text-[30px]">
            Одоогоор шинэ хүсэлт алга байна аа
          </div>
        ) : (
          <>
            {requests?.map((request, index) => (
              <div
                key={request._id || index}
                className="w-full flex justify-between items-center py-[10px]"
              >
                <p className="text-[22px]">{request?.title}</p>
                <button
                  className="px-7 py-1 rounded-[12px] bg-blue-500 hover:bg-blue-400 transition-colors duration-200"
                  onClick={() => check(request._id)}
                >
                  <Check color="white" size={32} />
                </button>
              </div>
            ))}
          </>
        )}
      </div>
    </AdminSideBar>
  );
};

export default NewGameRedquest;
