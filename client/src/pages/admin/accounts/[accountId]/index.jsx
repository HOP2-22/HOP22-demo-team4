import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import axios from "axios";
import { getDownloadURL, ref, uploadBytes } from "firebase/storage";
import { toast } from "react-hot-toast";

import AdminSideBar from "@/components/admin/AdminSideBar";
import AdminAccountDetailInput from "@/components/admin/account/AdminAccountDetailInput";
import CatDetailImage from "@/components/admin/category/CatDetailImage";
import AdminAccountSelect from "@/components/admin/account/AdminAccountSelect";
import AdminAccountDescs from "@/components/admin/account/AdminAccountDescs";
import AdminAccountImages from "@/components/admin/account/AdminAccountImages";
import { storage } from "@/storage";

import { ChevronLeft } from "lucide-react";

const AccountDetail = ({ data }) => {
  const { query, push } = useRouter();
  const [account, setAccount] = useState(data);

  const handleTitle = (event) => {
    setAccount((prev) => {
      return { ...prev, title: event.target.value };
    });
  };

  const handlePrice = (event) => {
    setAccount((prev) => {
      return { ...prev, price: event.target.value };
    });
  };

  const handleSold = (value) => {
    setAccount((prev) => {
      return { ...prev, sold: value };
    });
  };

  const handleReport = (value) => {
    setAccount((prev) => {
      return { ...prev, reported: value };
    });
  };

  const handlePermission = (value) => {
    setAccount((prev) => {
      return { ...prev, permission: value };
    });
  };

  const [mainImage, setMainImage] = useState(null);

  const handleMainImage = (event) => {
    setMainImage(event.target.files[0]);
  };

  useEffect(() => {
    const getUrl = async () => {
      if (mainImage) {
        const imageRef = ref(storage, `/accountMainImage/${mainImage?.name}`);
        await uploadBytes(imageRef, mainImage)
          .then(() => {
            getDownloadURL(imageRef).then((url) => {
              console.log(url);
              setAccount((prev) => {
                return { ...prev, mainImage: url };
              });
            });
          })
          .catch((error) => {
            console.log(error);
          });
      }
    };

    getUrl();
  }, [mainImage]);

  const editData = async () => {
    if (
      account.descriptions.some((item) => item.title === "" || item.desc === "")
    )
      return toast.error(
        "Та шинэ мөр нэмэхийн өмнө хамгийн сүүлийн мөрийг гүйцээж бөглөнө үү"
      );

    try {
      await axios.put(`${process.env.BASE_URL}/account/${query.accountId}`, {
        title: account?.title,
        price: account?.price,
        sold: account?.sold,
        reported: account?.reported,
        permission: account?.permission,
        descriptions: account?.descriptions,
        mainImage: account?.mainImage,
        images: account?.images,
      });

      toast.success("Амжилттай датаг өөрчиллөө");
    } catch (error) {
      console.log(error);
    }
  };

  const deleteData = async () => {
    try {
      await axios.delete(`${process.env.BASE_URL}/account/${query.accountId}`);

      toast.error("Амжилттай устаглаа");

      push("/admin/accounts");
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <AdminSideBar className={"w-full pt-[50px] flex flex-col gap-10 px-10"}>
      <div className="flex gap-5 items-center pb-[30px]">
        <div
          className="p-2 rounded-full bg-indigo-400 cursor-pointer"
          onClick={() => push("/admin/accounts")}
        >
          <ChevronLeft color="white" size={35} />
        </div>
        <p className="text-4xl font-medium text-black">Account detail</p>
      </div>

      <div className="flex">
        <AdminAccountDetailInput
          title={"title"}
          value={account?.title}
          onChangeFunc={handleTitle}
          type={"string"}
        />
        <AdminAccountDetailInput
          title={"price"}
          value={account?.price}
          onChangeFunc={handlePrice}
          type={"number"}
        />
      </div>
      <div className="w-full flex flex-wrap gap-y-6">
        <p className="w-1/3 text-[18px]">
          Game name:
          <span className="text-[20px] pl-3">{account?.category?.name}</span>
        </p>
        <p className="w-1/3 text-[18px]">
          Creater name:
          <span className="text-[20px] pl-3">{account?.owner?.name}</span>
        </p>
        <p className="w-1/3 text-[18px]">
          When created:
          <span className="text-[20px] pl-3">
            {account?.createdAt.slice(0, 10)}
          </span>
        </p>
        <div className="w-1/3 text-[18px] flex gap-5 items-center mt-4">
          Sold:
          <AdminAccountSelect
            value={account?.sold ? "true" : "false"}
            onClickFunc={handleSold}
          />
        </div>

        <div className="w-1/3 text-[18px] flex gap-5 items-center mt-4">
          Reported:
          <AdminAccountSelect
            value={account?.reported ? "true" : "false"}
            onClickFunc={handleReport}
          />
        </div>

        <div className="w-1/3 text-[18px] flex gap-5 items-center mt-4">
          Permission:
          <AdminAccountSelect
            value={account?.permission ? "true" : "false"}
            onClickFunc={handlePermission}
          />
        </div>

        <p className="pb-2 text-indigo-500 text-[28px]">Descriptions:</p>

        <AdminAccountDescs
          descs={account?.descriptions}
          setAccount={setAccount}
        />

        <CatDetailImage
          src={account?.mainImage}
          label={"Main Image"}
          changeFunction={handleMainImage}
        />
        <AdminAccountImages images={account?.images} setAccount={setAccount} />
        <div className="w-full flex items-center gap-10 justify-end mt-5 mb-10">
          <button
            onClick={() => deleteData()}
            className="py-6 px-14 text-white bg-rose-600 hover:bg-rose-400 transition-colors duration-200 text-[22px] rounded-[10px]"
          >
            Delete account
          </button>
          <button
            onClick={() => editData()}
            className="py-6 px-14 text-white bg-blue-500 hover:bg-blue-400 transition-colors duration-200 text-[22px] rounded-[10px]"
          >
            Edit account
          </button>
        </div>
      </div>
    </AdminSideBar>
  );
};

export default AccountDetail;

export async function getServerSideProps(ctx) {
  const id = ctx.query.accountId;

  try {
    const { data } = await axios.get(`${process.env.BASE_URL}/account/${id}`);

    return {
      props: {
        data: data?.data,
      },
    };
  } catch (error) {
    return {
      redirect: {
        distination: "/",
      },
    };
  }
}
