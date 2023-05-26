import React, { useEffect, useState } from "react";
import { ref, uploadBytes, getDownloadURL } from "firebase/storage";

import Add_ItemEachElementTitle from "./Add_ItemEachElementTitle";
import Add_ItemUpload from "./Add_ItemUpload";
import Add_ItemImage from "./Add_ItemImage";
import { storage } from "@/storage";
import { X } from "lucide-react";

const Add_ItemImages = ({ infoAccount, setInfoAccount, images, setImages }) => {
  const [mainImage, setMainImage] = useState(null);
  const [image, setImage] = useState(null);

  const handlePhotoUpload = (event) => {
    setMainImage(event.target.files[0]);
  };

  useEffect(() => {
    const getUrl = async () => {
      if (mainImage) {
        const imageRef = ref(storage, `/mainImage/${mainImage?.name}`);
        await uploadBytes(imageRef, mainImage)
          .then(() => {
            getDownloadURL(imageRef).then((url) => {
              setInfoAccount({ ...infoAccount, mainImageUrl: url });
              console.log(url);
            });
          })
          .catch((error) => {
            console.log(error);
          });
      }
    };

    getUrl();
  }, [mainImage]);

  const handlePhotosUpload = (event) => {
    setImage(event.target.files[0]);
  };

  useEffect(() => {
    const getUrls = async () => {
      if (image) {
        const imagesRef = ref(storage, `/images/${image?.name}`);
        await uploadBytes(imagesRef, image)
          .then(() => {
            getDownloadURL(imagesRef).then((url) => {
              setImages((prevArr) => [...prevArr, url]);
            });
          })
          .catch((error) => {
            console.log(error);
          });
      }
    };

    getUrls();
  }, [image]);

  const deleteImage = (index) => {
    let newArr;

    newArr = images.filter((image) => image !== index);

    setImages(newArr);
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
          <Add_ItemUpload handle={handlePhotoUpload} />
        </div>
      </div>
      <div className="">
        <Add_ItemEachElementTitle className={"text-justify"}>
          Барааны ерөнхий зургуудыг энд оруулна уу:
        </Add_ItemEachElementTitle>
        <div className="h-[1px] w-full bg-black/60 rounded-full my-2"></div>
        <div className="w-full flex flex-wrap gap-5">
          {images?.length > 0 &&
            images.map((image, index) => (
              <div className="relative w-[100px] h-[100px] rounded-[12px] object-cover object-center">
                <Add_ItemImage link={image} key={index} />
                <div className="absolute top-1 left-1 py-1 px-1 bg-gray-500 rounded-full">
                  <X
                    size={18}
                    color="white"
                    onClick={() => {
                      deleteImage(image);
                    }}
                  />
                </div>
              </div>
            ))}
          <Add_ItemUpload handle={handlePhotosUpload} />
        </div>
      </div>
    </div>
  );
};

export default Add_ItemImages;
