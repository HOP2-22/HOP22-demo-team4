import { useRouter } from "next/router";
import React, { useContext, useEffect, useRef, useState } from "react";
import { toast } from "react-hot-toast";
import axios from "axios";
import Head from "next/head";

import { AuthContext } from "@/provider/AuthContext";
import ResetTokenBody from "@/components/auth/ResetTokenBody";
import AuthTitle from "@/components/auth/AuthTitle";
import AuthBgCover from "@/components/auth/AuthBgCover";

const ResetToken = () => {
  const { user, setLoading } = useContext(AuthContext);

  const { push, query } = useRouter();

  const [formData, setFormData] = useState({
    password: "",
    verify: "",
  });

  const change = async () => {
    setLoading(true);

    if ((formData.password.length || formData.verify.length) === 0)
      return toast.error("Талбарыг зөв гүйцэт бөглө.");

    if (formData.password !== formData.verify)
      return toast.error("Нууц үгүүдийг адилхан бичнэ үү.");

    try {
      const updated = await axios.post(
        `${process.env.BASE_URL}/user/updatePassword`,
        { resetToken: query.resetToken, password: formData.password }
      );

      if (!updated.data.success)
        return toast.error("Нууц үг солих хугацаа дууссан байна.");

      toast.success("Амжилттай нууц үгээ солилоо.");

      window.close();
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    if (user !== null) push("/");
  }, [user]);

  return (
    <div className="relative w-full h-screen">
      <Head>
        <title>Change Password - SwapZone</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <AuthBgCover />
      <div className="absolute top-0 left-0 w-full h-full flex justify-center items-center bg-black/30 px-3 xsm:px-6 sm:px-0">
        <div className="bg-white rounded-[15px] w-full sm:w-[420px] px-5 pt-8">
          <AuthTitle className={""}>Солих</AuthTitle>
          <ResetTokenBody
            formData={formData}
            setFormData={setFormData}
            change={change}
          />
        </div>
      </div>
    </div>
  );
};

export default ResetToken;
