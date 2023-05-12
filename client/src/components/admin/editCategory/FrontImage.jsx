import Image from "next/image";
import { useEffect, useState } from "react";
const FrontImage = ({ data }) => {
  const [photo, setPhoto] = useState("");

  useEffect(() => {
    const getDataInfo = () => {
      setPhoto(data.photo);
    };
    getDataInfo();
  }, []);
  return (
    <div>
      <Image
        src={photo}
        width={300}
        height={10}
        alt="pic"
        className="h-[400px] w-[300px] "
      />
      <div>Photo : </div>{" "}
      <input
        value={photo}
        onChange={(event) => {
          setPhoto(event.target.value);
        }}
        className="bg-[#d0ccd2] border-b-2 border-black rounded-t"
        photo={photo}
      />
    </div>
  );
};

export default FrontImage;
