import { data } from "autoprefixer";
import axios from "axios";
import Image from "next/image";
import { useEffect, useState } from "react";

export default function EditCategory() {
  const [edit, setEdit] = useState(Boolean);
  const [coverPhoto, setCoverPhoto] = useState("");
  const [photo, setPhoto] = useState("");
  const [name, setName] = useState("");
  const [slugify, setSlugify] = useState("");

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
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    const getCategories = async () => {
      try {
        const data = await axios.put(
          `http://localhost:8000/api/v1/category/6432dda5ae106857e17f63e2`,
          {}
        );
        setEdit(data.data.data);
        setCoverPhoto(data.data.data.coverPhoto);
        setPhoto(data.data.data.photo);
        setName(data.data.data.name);
        setSlugify(data.data.data.slugify);
        console.log(data.data.data);
      } catch (error) {
        console.log(error);
      }
    };
    getCategories();
  }, []);
  return (
    <div>
      <div>
        <input value={name} />
        <input value={slugify} />
      </div>
      <div>
        <Image src={edit.coverPhoto} width={300} height={10} alt="pic" />
        <input value={coverPhoto} />
      </div>
      <div>
        <Image src={edit.photo} width={300} height={10} alt="pic" />
        <input value={photo} />
      </div>

      <button className="text-white bg-blue-700">Save</button>
    </div>
  );
}
