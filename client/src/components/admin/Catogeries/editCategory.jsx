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
  const [numAccCate ,setNumAccCate] = useState('')

  const changeCategory = async () => {
    try {
      const change = await axios.put(
        `http://localhost:8000/api/v1/category/6432dda5ae106857e17f63e2`,
        {
          coverPhoto: coverPhoto,
          photo: photo,
          name: name,
          slugify: slugify,
        }
      );
      console.log(change.data.data)
    } catch (error) {
      console.log(error);
    }
  };
  console.log(data)
  useEffect(() => {
    setCoverPhoto(data.coverPhoto)
  })

  return (
    <div className="h-[100vh]">
      <div>
        <div>Title of Category</div>
        <input
          value={name}
          onChange={() => {
            setName();
          }}
        />
        <div>Slugify</div>
        <input
          value={slugify}
          onChange={() => {
            setSlugify();
          }}
        />
      </div>
      <div className="flex">
        <div className="h-[400px] w-[640px]">
          <Image
            src={edit.coverPhoto}
            width={300}
            height={10}
            alt="pic"
            className="w-full h-full"
          />
          <input
            value={coverPhoto}
            onChange={() => {
              setCoverPhoto();
            }}
          />
        </div>
        <div>
          <Image
            src={edit.photo}
            width={300}
            height={10}
            alt="pic"
            className="h-[400px] w-[250px]"
          />
          <input
            value={photo}
            onChange={() => {
              setPhoto();
            }}
          />
        </div>
      </div>
      <div>{numAccCate}</div>
      <button className="text-white bg-blue-700">Save</button>
      <button className="hover:bg-red-300 text-[#DF1115]">Delete</button>
    </div>
  );
}
