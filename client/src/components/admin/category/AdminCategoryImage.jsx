import React, { useEffect, useState } from "react";
import { getDownloadURL, ref, uploadBytes } from "firebase/storage";

import { storage } from "@/storage";
import AdminImage from "../AdminImage";
import Add_ItemUpload from "@/components/add_item/Add_ItemUpload";

import { X } from "lucide-react";

const AdminCategoryImage = ({ values, setValues, create }) => {
  const [bgPhoto, setBgPhoto] = useState(null);
  const [coverPhoto, setCoverPhoto] = useState(null);

  useEffect(() => {
    const getUrl = async () => {
      if (bgPhoto) {
        const imageRef = ref(storage, `/bgPhoto/${bgPhoto?.name}`);
        await uploadBytes(imageRef, bgPhoto)
          .then(() => {
            getDownloadURL(imageRef).then((url) => {
              setValues({ ...values, photo: url });
            });
          })
          .catch((error) => {
            console.log(error);
          });
      }
    };

    getUrl();
  }, [bgPhoto]);

  useEffect(() => {
    const getUrl = async () => {
      if (coverPhoto) {
        const imageRef = ref(storage, `/coverPhoto/${coverPhoto?.name}`);
        await uploadBytes(imageRef, coverPhoto)
          .then(() => {
            getDownloadURL(imageRef).then((url) => {
              setValues({ ...values, coverPhoto: url });
            });
          })
          .catch((error) => {
            console.log(error);
          });
      }
    };

    getUrl();
  }, [coverPhoto]);

  const handleBgPhoto = (event) => {
    setBgPhoto(event.target.files[0]);
  };

  const handleCoverPhoto = (event) => {
    setCoverPhoto(event.target.files[0]);
  };

  const deleteBgImage = () => {
    setBgPhoto(null);
    setValues((prev) => {
      return { ...prev, photo: "" };
    });
  };

  const deleteCoverImage = () => {
    setBgPhoto(null);
    setValues((prev) => {
      return { ...prev, photo: "" };
    });
  };

  return (
    <div className="w-full grid grid-cols-7 gap-20">
      <div className="col-span-3 w-full h-full flex flex-col gap-4">
        <p className="text-[20px]">Background image</p>
        {bgPhoto ? (
          <div className="w-full h-full relative">
            <AdminImage
              link={values?.photo}
              width={"w-full"}
              height={"h-[180px]"}
            />
            <div className="absolute top-3 left-3 py-2 px-2 bg-gray-500 rounded-full cursor-pointer">
              <X
                size={18}
                color="white"
                onClick={() => {
                  deleteBgImage();
                }}
              />
            </div>
          </div>
        ) : (
          <Add_ItemUpload handle={handleBgPhoto} />
        )}
      </div>
      <div className="col-span-3 w-full h-full flex flex-col gap-4">
        <p className="text-[20px]">Background image</p>
        {coverPhoto ? (
          <div className="w-full h-full relative">
            <AdminImage
              link={values?.coverPhoto}
              width={"w-full"}
              height={"h-[180px]"}
            />
            <div
              className="absolute top-3 left-3 py-2 px-2 bg-gray-500 rounded-full cursor-pointer"
              onClick={() => {
                deleteCoverImage();
              }}
            >
              <X size={18} color="white" />
            </div>
          </div>
        ) : (
          <Add_ItemUpload handle={handleCoverPhoto} />
        )}
      </div>
      <button
        onClick={() => create()}
        className="w-full h-16 mt-auto text-[21px] font-medium rounded-[15px] text-white bg-blue-500 cursor-pointer"
      >
        Create
      </button>
    </div>
  );
};

export default AdminCategoryImage;
