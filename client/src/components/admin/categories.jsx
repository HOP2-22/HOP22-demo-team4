import Image from "next/image";
import { useRouter } from "next/router";
import { useState } from "react";

export default function Categories({ data }) {
  const [deleteCate, setdeleteCate] = useState(Boolean);

  const router = useRouter();

  const deleteCategory = async () => {
    try {
    } catch (error) {}
  };
  const notification = () => {
    toast((t) => (
      <span>
        Сагсийг хоослохдоо итгэлтэй байна уу
        <button
          onClick={() => {
            clear();
            toast.dismiss(t.id);
          }}
          className="py-1 ml-2 px-3 rounded-[5px] bg-[#44BAF0] text-white"
        >
          Зөвшөөрөх
        </button>
        <button
          onClick={() => {
            toast.dismiss(t.id);
          }}
          className="py-1 ml-2 px-3 rounded-[5px] bg-red-500 text-white"
        >
          Татгалзах
        </button>
      </span>
    ));
  };
  return (
    <div className=" w-[300px] bg-white rounded-2xl  overflow-hidden h-[300px] flex flex-col">
      <Image
        src={data.coverPhoto}
        className="w-[300px] object-cover object-center h-2/4"
      />
      <div className="flex items-center flex-col">
        <div>
          <div className="text-xl">{data.name}</div>
        </div>
        <div className="flex">
          <button
            className="text-white bg-blue-800 rounded-lg w-[100px] "
            onClick={() =>
              router.push({
                pathname: `/category/AdminCategories/${data?.slugify}`,
              })
            }
          >
            Edit
          </button>
          <button
            className="text-white bg-blue-800 rounded-lg w-[100px]"
            onClick={() => {
              if (deleteCate == false) {
                setdeleteCate(true);
                console.log("true");
              } else {
                setdeleteCate(false);
                console.log("false");
              }
            }}
          >
            Delete
          </button>
        </div>
      </div>
      {deleteCate ? (
        <div>
          <div>Are you sure about to delete ?</div>
          <div>{data.name}</div>
          <div className="">
            <button className="w-[60px] bg-red-600" onClick={() => {}}>
              Yes
            </button>
            <button className="w-[60px] bg-green-400">No</button>
          </div>
        </div>
      ) : (
        <div></div>
      )}
    </div>
  );
}
