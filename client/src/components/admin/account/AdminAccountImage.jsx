import React, { useEffect, useState } from "react";
import { getDownloadURL, ref, uploadBytes } from "firebase/storage";

import { storage } from "@/storage";

const AdminAccountImage = ({ image, setAccount, index }) => {
  const [imageState, setImageState] = useState(null);

  useEffect(() => {
    const getUrl = async () => {
      if (imageState) {
        const imageRef = ref(storage, `/accountImages/${imageState?.name}`);
        await uploadBytes(imageRef, imageState)
          .then(() => {
            getDownloadURL(imageRef).then((url) => {
              setAccount((prev) => {
                let newImages = [...prev.images];

                newImages[index] = url;
                console.log("url =========>", url);
                console.log("newurl =========>", newImages[index]);

                return { ...prev, images: newImages };
              });
            });
          })
          .catch((error) => {
            console.log(error);
          });
      }
    };

    getUrl();
  }, [imageState]);

  const handleImage = (event) => {
    setImageState(event.target.files[0]);
  };

  return (
    <div className="relative w-full h-[200px]">
      <img
        src={image}
        className="w-full h-[200px] object-contain object-center"
        alt="admin category detail image"
      />
      <div className="absolute top-0 left-0 h-full w-full bg-black/30 flex items-center justify-center">
        <div className="relative py-4 px-5 rounded-[10px] text-white bg-gray-500/80 hover:bg-gray-500 transition-colors duration-200 text-[18px] tracking-wide">
          <p>Change photo</p>
          <input
            type="file"
            className="absolute top-0 left-0 w-full h-[100px] bg-transparent z-40 opacity-0 cursor-pointer"
            onChange={handleImage}
          />
        </div>
      </div>
    </div>
  );
};

export default AdminAccountImage;
