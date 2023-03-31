import { AuthContext } from "@/provider/AuthContext";
import { useRouter } from "next/router";
import { useContext, useEffect } from "react";

export default function Guard({ children }) {
  const router = useRouter();
  const { logout } = useContext(AuthContext);

  useEffect(() => {
    const checkUser = async () => {
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
    };
    checkUser();
  }, []);

  return <div className="w-full h-full grow">{children}</div>;
}
