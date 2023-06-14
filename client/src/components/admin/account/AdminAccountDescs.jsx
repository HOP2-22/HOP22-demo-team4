import React from "react";

import AdminAccountDesc from "./AdminAccountDesc";
import { toast } from "react-hot-toast";

const AdminAccountDescs = ({ descs, setAccount }) => {
  return (
    <div className="w-full border p-4 rounded-[10px] divide-y-2">
      <div className="w-full flex items-center">
        <p className="text-[22px] font-semibold pl-4 pb-4 w-[40%]">Title:</p>
        <p className="text-[22px] font-semibold pl-4 pb-4 w-3/5">
          Description:
        </p>
      </div>
      {descs.map((desc, index) => (
        <AdminAccountDesc
          key={desc._id || index}
          index={index}
          desc={desc}
          setAccount={setAccount}
        />
      ))}
      <div className="w-full pt-8 flex justify-end pr-20">
        <button
          className="px-6 py-3 rounded-[15px] bg-green-500 text-white"
          onClick={() => {
            if (descs.some((item) => item.title === "" || item.desc === ""))
              return toast.error(
                "Та шинэ мөр нэмэхийн өмнө хамгийн сүүлийн мөрийг гүйцээж бөглөнө үү"
              );

            setAccount((prev) => {
              let newLine = {
                title: "",
                desc: "",
              };

              let addedLine = [...prev.descriptions, newLine];

              return { ...prev, descriptions: addedLine };
            });
          }}
        >
          Add line
        </button>
      </div>
    </div>
  );
};

export default AdminAccountDescs;
