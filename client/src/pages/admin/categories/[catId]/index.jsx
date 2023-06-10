import axios from "axios";
import { useRouter } from "next/router";
import React, { useContext, useEffect, useState } from "react";
import { getDownloadURL, ref, uploadBytes } from "firebase/storage";

import AdminSideBar from "@/components/admin/AdminSideBar";
import CatDetailTypes from "@/components/admin/category/CatDetailTypes";
import CatDetailName from "@/components/admin/category/CatDetailName";
import CatDetailImage from "@/components/admin/category/CatDetailImage";
import { storage } from "@/storage";
import { AuthContext } from "@/provider/AuthContext";
import { toast } from "react-hot-toast";

const Category = ({ data }) => {
  const { user } = useContext(AuthContext);

  const id = useRouter().query.catId;
  const [category, setCategory] = useState(data);
  const [typeValue, setTypeValue] = useState("");

  const [bgPhoto, setBgPhoto] = useState(null);
  const [coverPhoto, setCoverPhoto] = useState(null);

  const editData = async () => {
    try {
      await axios.put(`${process.env.BASE_URL}/category/${id}`, {
        name: category.name,
        photo: category.photo,
        coverPhoto: category.coverPhoto,
        type: category.type,
        adminId: user?._id,
      });

      toast.success("Амжилттай шинэчиллээ");
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    const getUrl = async () => {
      if (bgPhoto) {
        const imageRef = ref(storage, `/bgPhoto/${bgPhoto?.name}`);
        await uploadBytes(imageRef, bgPhoto)
          .then(() => {
            getDownloadURL(imageRef).then((url) => {
              setCategory((prev) => {
                return { ...prev, photo: url };
              });
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
              setCategory(() => {
                return { ...category, coverPhoto: url };
              });
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

  return (
    <AdminSideBar
      className={
        "relative w-full pt-[50px] flex flex-col px-10 overflow-y-auto"
      }
    >
      <CatDetailName category={category} setCategory={setCategory} />
      <CatDetailTypes
        typeValue={typeValue}
        setTypeValue={setTypeValue}
        category={category}
        setCategory={setCategory}
      />
      <CatDetailImage
        src={category?.photo}
        label={"Background photo"}
        changeFunction={handleBgPhoto}
      />
      <CatDetailImage
        src={category?.coverPhoto}
        label={"Cover photo"}
        changeFunction={handleCoverPhoto}
      />
      <div className="w-full flex justify-end mt-5 mb-10">
        <button
          onClick={() => editData()}
          className="py-6 px-14 text-white bg-blue-500 text-[22px] rounded-[10px]"
        >
          Edit data
        </button>
      </div>
    </AdminSideBar>
  );
};

export default Category;

export async function getServerSideProps(ctx) {
  try {
    const { data } = await axios.get(
      `${process.env.BASE_URL}/category/${ctx.query.catId}`
    );

    return {
      props: {
        data: data.data,
      },
    };
  } catch (error) {
    return {
      redirect: "/",
    };
  }
}
