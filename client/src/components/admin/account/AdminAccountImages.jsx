import React from "react";

import AdminAccountImage from "./AdminAccountImage";

const AdminAccountImages = ({ images, setAccount }) => {
  return (
    <div className="w-full mt-7">
      <p className="pb-2 text-indigo-500 text-[28px]">Images:</p>
      <div className="w-full grid grid-cols-3 gap-2">
        {images?.map((image, index) => (
          <AdminAccountImage
            image={image}
            key={image?._id || index}
            index={index}
            setAccount={setAccount}
          />
        ))}
      </div>
    </div>
  );
};

export default AdminAccountImages;
