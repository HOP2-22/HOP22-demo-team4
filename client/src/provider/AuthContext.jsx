import { useRouter } from "next/router";
import { createContext, useState } from "react";
import axios from "axios";
import Cookies from "js-cookie";
export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const { push } = useRouter();
  const [loading, setLoading] = useState();

  const [user, setUser] = useState({});

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
    config.headers.remove("token");
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
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};
