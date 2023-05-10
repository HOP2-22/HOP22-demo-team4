import { data } from "autoprefixer";
import axios from "axios";
import Image from "next/image";
import { useEffect, useState } from "react";

export default function EditCategory({ data }) {
  const [edit, setEdit] = useState(Boolean);
  const [coverPhoto, setCoverPhoto] = useState("");
  const [photo, setPhoto] = useState("");
  const [name, setName] = useState("");
  const [slugify, setSlugify] = useState("");
  const [numAccCate, setNumAccCate] = useState("");

  const changeCategory = async () => {
    try {
      const change = await axios.put(
        `http://localhost:8000/api/v1/category/${data}`,
        {
          coverPhoto: coverPhoto,
          photo: photo,
          name: name,
          slugify: slugify,
        }
      );
      console.log(change.data.data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    const getDataInfo = () => {
      setCoverPhoto(data.coverPhoto);
      setName(data.name);
      setPhoto(data.photo);
      setSlugify(data.slugify);
    };
    getDataInfo();
  }, []);

  return (
    <div className="h-[100vh]">
      <div className="flex">
        <div className="h-[400px] w-[640px]">
          <Image
            src={coverPhoto}
            width={300}
            height={10}
            alt="pic"
            className="w-full h-full"
          />
        </div>
        <div>
          <Image
            src={photo}
            width={300}
            height={10}
            alt="pic"
            className="h-[400px] w-[250px]"
          />
        </div>
      </div>
      <div className="flex bg-white border h-[200px] w-[500px] rounded-xl">
        <div>
          <div className="text-2xl">Title :</div>
          <div>Name</div>
          <div>slugify</div>
          <div>CoverPhoto</div>
          <div>Photo</div>
        </div>
        <div className="flex flex-col w-[200px]">
          <div className="text-2xl">URL & Inputs</div>
          <input
            value={name}
            onChange={(event) => {
              setName(event.target.value);
            }}
          />
          <input
            value={slugify}
            onChange={(event) => {
              setSlugify(event.target.value);
            }}
          />
          <input
            value={coverPhoto}
            onChange={(event) => {
              setCoverPhoto(event.target.value);
            }}
          />
          <input
            value={photo}
            onChange={(event) => {
              setPhoto(event.target.value);
            }}
          />
        </div>
      </div>

      <div>{numAccCate}</div>
      <button
        className="text-white bg-blue-700"
        onClick={() => {
          changeCategory();
        }}
      >
        Save
      </button>
      <button className="hover:bg-red-300 text-[#DF1115]">Delete</button>
    </div>
  );
}
