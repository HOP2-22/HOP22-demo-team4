import { useState, useEffect } from "react";

export default function Details({ data }) {
  const [name, setName] = useState();
  const [slugify, setSlugify] = useState();

  useEffect(() => {
    const getDataInfo = () => {
      setName(data.name);
      setSlugify(data.slugify);
    };
    getDataInfo();
  }, []);

  return (
    <div>
      <div className="flex bg-white border justify-between h-[25vh] w-[40vw] rounded-xl">
        <div>
          <div className="text-5xl">Title :</div>
          <div>Name :</div>
          <div>slugify :</div>
        </div>
        <div className="flex flex-col ">
          <div className="text-5xl">URL & Inputs</div>
          <input
            value={name}
            onChange={(event) => {
              setName(event.target.value);
            }}
            className="border-b-2 border-black"
          />
          <input
            value={slugify}
            onChange={(event) => {
              setSlugify(event.target.value);
            }}
            className="border-b-2 border-black"
          />
        </div>
      </div>
    </div>
  );
}
