import { useRouter } from "next/router";
import { useContext, useEffect } from "react";

import { AuthContext } from "@/provider/AuthContext";

export const Guard = ({ children }) => {
  const { push } = useRouter();
  const { logout, setLoading, setUser } = useContext(AuthContext);

  useEffect(() => {
    const checkUser = async () => {
      setLoading(true);
      try {
        const response = await axios.post("http://localhost:8000/api/v1/user/");

        if (response.data.data.data.exp * 1000 <= Date.now()) {
          logout();
          push("/auth/signin");
          return;
        }

        setUser(response.data.data.user);
      } catch (error) {
        push("/");
        setUser(null);
      }
      setLoading(false);
    };
    checkUser();
  }, []);

  return <div className="w-full h-full grow">{children}</div>;
};
