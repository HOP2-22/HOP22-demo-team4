import axios from "axios";
import { useContext, useEffect, useRef, useState } from "react";
import { useRouter } from "next/router";
import { toast } from "react-hot-toast";
import Cookies from "js-cookie";
import Head from "next/head";

import { AuthContext } from "../../provider/AuthContext";
import AuthBgCover from "@/components/auth/AuthBgCover";
import AuthTitle from "@/components/auth/AuthTitle";
import SignupBody from "@/components/auth/SignupBody";

const image =
  "https://res.cloudinary.com/dymjjmeyc/image/upload/v1679913069/AccountTrader/0x0_zfidbn.jpg";

export const SignUp = () => {
  const { push } = useRouter();
  const { user, setUser, setLoading } = useContext(AuthContext);

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    verify: "",
  });

  const signup = async () => {
    setLoading(true);

    if (
      (formData.name.length ||
        formData.email.length ||
        formData.password.length ||
        formData.verify.length) === 0
    )
      return toast.error("Талбарыг зөв гүйцэт бөглө.");

    if (formData.password !== formData.verify)
      return toast.error("Нууц үгүүдийг адилхан бичнэ үү.");

    try {
      const user = await axios.post(
        "http://localhost:8000/api/v1/user/signup",
        {
          name: formData.name,
          email: formData.email,
          password: formData.password,
        }
      );

      if (!user.data.success) return toast.error(user.data.message);

      Cookies.set("token", user.data.data.token);

      setUser(user.data.data.user);

      toast.success("Амжилттай бүртгүүллээ.");

      push("/");
    } catch (error) {
      console.log(error);
    }

    setLoading(false);
  };

  useEffect(() => {
    if (user !== null) push("/");
  }, [user]);

  return (
    <div className="relative w-full h-screen">
      <Head>
        <title>Signup - SwapZone</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <AuthBgCover />
      <div className="absolute top-0 left-0 w-full h-full flex justify-center items-center bg-black/30 px-3 xsm:px-6 sm:px-0">
        <div className="bg-white rounded-[15px] w-full sm:w-[420px] px-5 pt-8">
          <AuthTitle>Бүртгүүлэх</AuthTitle>
          <SignupBody
            formData={formData}
            setFormData={setFormData}
            signup={signup}
          />
        </div>
      </div>
    </div>
  );
};

export default SignUp;
