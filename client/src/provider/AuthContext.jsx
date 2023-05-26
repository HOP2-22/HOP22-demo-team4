import { useRouter } from "next/router";
import { createContext, useEffect, useState } from "react";
import axios from "axios";
import Cookies from "js-cookie";
import { toast } from "react-hot-toast";

export const AuthContext = createContext();

export const AuthProvider = ({ children, hamburger, setHamburger }) => {
  const { push } = useRouter();
  const [loading, setLoading] = useState();

  const [user, setUser] = useState(null);

  const getUser = async () => {
    setLoading(true);

    try {
      const response = await axios.post(`${process.env.BASE_URL}/user/`);

      if (response.data.data.data.exp * 1000 <= Date.now()) {
        logout();
        return;
      }

      setUser(response.data.data.user);
    } catch (error) {
      setUser(null);
    }

    setLoading(false);
  };

  useEffect(() => {
    getUser();
  }, []);

  axios.interceptors.request.use(
    (config) => {
      const token = Cookies.get("token");
      if (token) {
        config.headers.set("token", token);
      }

      return config;
    },
    function (error) {
      return Promise.reject(error);
    }
  );

  const logout = () => {
    setUser(null);
    Cookies.remove("token");
    toast.success("Амжилттай гарлаа.");
    push("/");
  };

  const handleToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <AuthContext.Provider
      value={{
        loading,
        setLoading,

        user,
        setUser,
        logout,

        handleToTop,

        hamburger,
        setHamburger,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};
