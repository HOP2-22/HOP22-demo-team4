import Image from "next/image";
import { useEffect, useState } from "react";
const FrontImage = ({ data }) => {
  const [photo, setPhoto] = useState("");
  const [changer , setChanger] = useState(false)
  useEffect(() => {
    const getDataInfo = () => {
      setPhoto(data.photo);
    };
    getDataInfo();
  }, []);

  const onFocus = () => setChanger(true)
  const onBlur = () => setChanger(false)

  return (
    <div className="w-[300px] h-full">
      <Image
        src={photo}
        width={300}
        height={10}
        alt="pic"
        className="h-[400px] w-full "
      />
      <div className={`flex flex-col bg-zinc-300 mt-[15px] border-b-2 border-black rounded-t-lg ${changer && "border-b-blue-400 transition duration-100"}`}>
        <div className={`text-sm h-4 mt-1 mb-1 ${changer && "text-blue-400 transition duration-100"}`}>Photo*</div>
        <input
          onFocus={onFocus}
          onBlur={onBlur}
          value={photo}
          onChange={(event) => {
            setPhoto(event.target.value);
          }}
          className="bg-zinc-300 w-full outline-none text-2xl"
          photo={photo}
        />
      </div>
    </div>
  );
};

export default FrontImage;
