import React from "react";

import Add_ItemEachElementTitle from "./Add_ItemEachElementTitle";
import Add_ItemUpload from "./Add_ItemUpload";
import Add_ItemImage from "./Add_ItemImage";
// import useStorage from "@/hooks/useStorage";

const Add_ItemImages = ({ infoAccount, setInfoAccount, images, setImages }) => {
  // const { handleUpload, loading, setLoading } = useStorage();

  const handlePhotoUpload = (event) => {
    setInfoAccount({ ...infoAccount, mainImageUrl: event.target.files[0] });
  };

  return (
    <div className="col-span-12 flex flex-col gap-5">
      <div className="">
        <Add_ItemEachElementTitle className={"text-justify"}>
          Барааны нүүр хэсэгт харагдах зургийг энд оруулна уу:
        </Add_ItemEachElementTitle>
        <div className="h-[1px] w-full bg-black/60 rounded-full my-2"></div>
        <div className="w-full flex gap-5">
          {infoAccount?.mainImageUrl !== "" && (
            <Add_ItemImage link={infoAccount.mainImageUrl} />
          )}
          <Add_ItemUpload />
        </div>
      </div>
    </div>
  );
};

export default Add_ItemImages;
