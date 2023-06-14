import React, { useContext, useRef, useState } from "react";
import axios from "axios";
import { toast } from "react-hot-toast";

import AdminSideBar from "@/components/admin/AdminSideBar";
import AdminInput from "@/components/admin/AdminInput";
import AllTypes from "@/components/admin/category/AllTypes";
import AddType from "@/components/admin/category/AddType";
import AdminCategoryImage from "@/components/admin/category/AdminCategoryImage";
import { AuthContext } from "@/provider/AuthContext";
import CategoryTable from "@/components/admin/category/CategoryTable";

import { X } from "lucide-react";

const Categories = ({ data }) => {
  const { user } = useContext(AuthContext);
  const nameRef = useRef(null);
  const typeRef = useRef(null);

  const [bgPhoto, setBgPhoto] = useState(null);
  const [coverPhoto, setCoverPhoto] = useState(null);

  const [categories, setCategories] = useState(data);
  const [inputValue, setInputValue] = useState("");
  const [values, setValues] = useState({
    name: "",
    photo: "",
    coverPhoto: "",
    type: [],
  });

  const nameHandler = (event) => {
    setValues({ ...values, name: event.target.value });
  };

  const keyDownHandler = (event) => {
    if (event.key === "Enter") {
      if (values.name.length === 0) return nameRef.current.focus();
      if (values.type.length === 0) return passwordRef.current.focus();

      register();
    }
  };

  const addType = (type) => {
    if (values?.type?.includes(inputValue)) {
      return toast.error("Төрөл нэмэгдсэн байна");
    }

    if (inputValue.length === 0) return toast.error("Төрөл өө зөв оруулна уу");

    setValues((prev) => {
      return { ...prev, type: [...prev.type, type] };
    });

    setInputValue("");
  };

  const addTypeKeyDownHandler = (event) => {
    if (event.key === "Enter") {
      if (
        inputValue === "sandBox" ||
        inputValue === "BR" ||
        inputValue === "MOBA" ||
        inputValue === "sports" ||
        inputValue === "CG" ||
        inputValue === "AA" ||
        inputValue === "strategy" ||
        inputValue === "fps" ||
        inputValue === "rpg"
      ) {
        addType(inputValue);
        setInputValue("");
      } else {
        toast.error("Төрөл өө зөв оруулна уу");
      }
    }
  };

  const createCategory = async () => {
    try {
      if (values.name.length === 0) return toast.error("Нэрийг бичиж өгнө үү");
      if (values.photo.length === 0)
        return toast.error("Background зурагийг сонгож өгнө үү");
      if (values.coverPhoto.length === 0)
        return toast.error("coverPhoto зурагийг сонгож өгнө үү");
      if (values.type.length === 0) return toast.error("төрөл нэмж өгнө үү");

      const { data } = await axios.post(`${process.env.BASE_URL}/category`, {
        ...values,
        owner: user?._id,
      });

      setCategories((prev) => {
        let newCats = [...prev, data.data];

        return newCats;
      });

      setValues({
        name: "",
        photo: "",
        coverPhoto: "",
        type: [],
      });

      setBgPhoto(null);
      setCoverPhoto(null);
    } catch (error) {
      console.log(error);
    }
  };

  const deleteType = (typeD) => {
    setValues((prev) => {
      let newTypes = prev.type.filter((type) => type !== typeD);
      return {
        ...prev,
        type: newTypes,
      };
    });
  };

  return (
    <AdminSideBar className={"w-full pt-[50px] flex flex-col gap-10 px-10"}>
      <p className="mb-[30px] text-4xl font-medium text-black">Games</p>
      <div className="w-full flex gap-28">
        <AdminInput
          value={values?.name}
          label={"Name"}
          onChangeHandler={nameHandler}
          onkeydownHandler={keyDownHandler}
          inputRef={nameRef}
          containerClassName="w-[400px]"
        />
        <div className="flex flex-col gap-3">
          <AllTypes value={"Types"} />
          <div className="w-full overflow-x-auto flex items-center gap-5">
            <p className="text-[22px] font-medium">Тоглоомын төрөл нэмэх:</p>
            <div className="flex gap-4 items-center py-3">
              <input
                type="text"
                value={inputValue}
                ref={typeRef}
                onKeyDown={addTypeKeyDownHandler}
                onChange={(event) => setInputValue(event.target.value)}
                className="py-[10px] px-4 rounded-[15px] outline-indigo-600 outline"
              />
              <AddType addType={addType} inputValue={inputValue} />
            </div>
          </div>
          <div className="flex gap-4 items-center h-[40px]">
            {values.type.map((item, index) => {
              return (
                <div className="w-auto h-full relative" key={index}>
                  <div className="rounded-[10px] py-[10px] px-5 bg-indigo-400 text-white">
                    {item}
                  </div>
                  <div
                    className="absolute -top-2 -left-2 py-1 px-1 bg-gray-500 rounded-full cursor-pointer"
                    onClick={() => {
                      deleteType(item);
                    }}
                  >
                    <X size={18} color="white" />
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
      <AdminCategoryImage
        values={values}
        setValues={setValues}
        create={createCategory}
        bgPhoto={bgPhoto}
        setBgPhoto={setBgPhoto}
        coverPhoto={coverPhoto}
        setCoverPhoto={setCoverPhoto}
      />
      <CategoryTable categories={categories} setCategories={setCategories} />
    </AdminSideBar>
  );
};

export default Categories;

export async function getServerSideProps() {
  try {
    const res = await axios.get(`${process.env.BASE_URL}/category`);

    return {
      props: {
        data: res.data.data,
      },
    };
  } catch (error) {
    return {
      redirect: {
        destination: "/",
      },
    };
  }
}
