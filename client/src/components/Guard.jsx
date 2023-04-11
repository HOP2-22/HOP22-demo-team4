import { useRouter } from "next/router";
import { useContext, useEffect } from "react";

import { AuthContext } from "@/provider/AuthContext";

export const Guard = ({ children }) => {
  const router = useRouter();
  const { logout, setLoading } = useContext(AuthContext);

  useEffect(() => {
    const checkUser = async () => {
      setLoading(true);
      try {
        const res = await axios.post("http://localhost:8000/api/v1/user/");

        if (res.data.data.data.exp * 1000 <= Date.now()) {
          router.push("/auth/signin");
          logout();
          return;
        }
      } catch (error) {
        router.push("/auth/signin");
      }
      setLoading(false);
    };
    checkUser();
  }, []);

  return <div className="w-full h-full grow">{children}</div>;
};
