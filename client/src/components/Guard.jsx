import { useRouter } from "next/router";
import { useContext, useEffect } from "react";
import axios from "axios";
import { toast } from "react-hot-toast";

import { AuthContext } from "@/provider/AuthContext";

export const Guard = ({ children, role }) => {
  const { push } = useRouter();
  const { logout, setLoading, setUser, setShow } = useContext(AuthContext);

  useEffect(() => {
    const checkUser = async () => {
      setLoading(true);

      try {
        const response = await axios.post(`${process.env.BASE_URL}/user/`);

        if (response.data.data.data.exp * 1000 <= Date.now()) {
          logout();
          toast.error("Та дахин нэвтэрнэ үү.");
          push("/auth/signin");
          return;
        }

        if (response.data.data.user.role !== role) {
          push("/");
          toast.error(
            `Таны [${response.data.data.user.role}] энэ эрх энэ хуудасруу нэвтэрхээс хамгаалагдсан байна.`
          );

          return;
        }

        if (role === "admin") setShow(true);
      } catch (error) {
        push("/");
        toast.error("Энэ хуудас хамгаалагдсан байна та эхлээд нэвтэрнэ үү.");
        setUser(null);
      }

      setLoading(false);
    };
    checkUser();
  }, []);

  return <div className="w-full h-full grow">{children}</div>;
};
