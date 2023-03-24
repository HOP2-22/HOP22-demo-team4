import { useRouter } from "next/router";
import { createContext, useState } from "react";
import { createContext, useState, useEffect } from "react";
import axios from "axios";
import Cookies from "js-cookie";
export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const { push } = useRouter();
  const [loading, setLoading] = useState();





  // const [checkUser, setCheckUser] = useState(false);
  // const [checkEmail, setCheckEmail] = useState(false);
  // const [checkPass, setCheckPass] = useState(false);
  // const [value, setValue] = useState("");
  // const [arr, setArr] = useState();
  // const [info, setInfo] = useState();
  // const [userName, setuserName] = useState("");
  // const [userData, setUserData] = useState({
  //   name: "",
  //   email: "",
  //   password: "",
  // });
  // const [userinfo, setUserinfo] = useState({
  //   email: "",
  //   password: "",
  // });

  const [userName, setUserName] = useState("");

  const [checkUser, setCheckUser] = useState(false);
  const [checkEmail, setCheckEmail] = useState(false);
  const [checkPass, setCheckPass] = useState(false);
  const [value, setValue] = useState("");
  const [info, setInfo] = useState();
  const [match, setMatch] = useState(false);
  const [userData, setUserData] = useState({
    email: "",
    password: "",
  });
  const [userinfo, setUserinfo] = useState({
    name: "",
    email: "",
    password: "",
  });
  const [user, setUser] = useState({
    _id: "64267d8ff4fd40092d951238",
    name: "user3",
    email: "user3@gmail.com",
    role: "user",
    googleId: "Not google account",
    createdAt: "2023-03-31T06:28:31.416Z",
    __v: 3,
    userFavorite: ["64268191064657f4cce17512", "64268171064657f4cce17506"],
    purchasedAccounts: [
      {
        _id: "6426816f064657f4cce17502",
        title: "Mobile legends account 2",
        mainImage:
          "https://res.cloudinary.com/dymjjmeyc/image/upload/v1679909838/AccountTrader/images_fy6ibk.jpg",
        images: [],
        price: 550000,
        descriptions: [
          {
            title: "skin",
            desc: "64",
            _id: "6426816f064657f4cce17503",
          },
          {
            title: "hero",
            desc: "134",
            _id: "6426816f064657f4cce17504",
          },
        ],
        sold: true,
        category: {
          _id: "642680585e62d621f17e01b8",
          name: "Mobile legends",
          photo:
            "https://res.cloudinary.com/dymjjmeyc/image/upload/v1679901155/AccountTrader/EIcNw9wWkAAHMCV_v75t6u.jpg",
          owner: "64267d84f4fd40092d951234",
          type: "MOBA",
          createdAt: "2023-03-31T06:40:24.580Z",
          slugify: "mobile-legends",
          __v: 0,
          id: "642680585e62d621f17e01b8",
        },
        owner: "64267d8ff4fd40092d951238",
        createdAt: "2023-03-31T06:45:03.102Z",
        __v: 0,
      },
    ],
    publishedAccounts: [
      {
        _id: "6426816b064657f4cce174fe",
        title: "Mobile legends account 1",
        mainImage:
          "https://res.cloudinary.com/dymjjmeyc/image/upload/v1679909838/AccountTrader/images_fy6ibk.jpg",
        images: [],
        price: 550000,
        descriptions: [
          {
            title: "skin",
            desc: "64",
            _id: "6426816b064657f4cce174ff",
          },
          {
            title: "hero",
            desc: "134",
            _id: "6426816b064657f4cce17500",
          },
        ],
        sold: false,
        category: {
          _id: "642680585e62d621f17e01b8",
          name: "Mobile legends",
          photo:
            "https://res.cloudinary.com/dymjjmeyc/image/upload/v1679901155/AccountTrader/EIcNw9wWkAAHMCV_v75t6u.jpg",
          owner: "64267d84f4fd40092d951234",
          type: "MOBA",
          createdAt: "2023-03-31T06:40:24.580Z",
          slugify: "mobile-legends",
          __v: 0,
          id: "642680585e62d621f17e01b8",
        },
        owner: "64267d8ff4fd40092d951238",
        createdAt: "2023-03-31T06:44:59.327Z",
        __v: 0,
      },
      {
        _id: "6426816f064657f4cce17502",
        title: "Mobile legends account 2",
        mainImage:
          "https://res.cloudinary.com/dymjjmeyc/image/upload/v1679909838/AccountTrader/images_fy6ibk.jpg",
        images: [],
        price: 550000,
        descriptions: [
          {
            title: "skin",
            desc: "64",
            _id: "6426816f064657f4cce17503",
          },
          {
            title: "hero",
            desc: "134",
            _id: "6426816f064657f4cce17504",
          },
        ],
        sold: true,
        category: {
          _id: "642680585e62d621f17e01b8",
          name: "Mobile legends",
          photo:
            "https://res.cloudinary.com/dymjjmeyc/image/upload/v1679901155/AccountTrader/EIcNw9wWkAAHMCV_v75t6u.jpg",
          owner: "64267d84f4fd40092d951234",
          type: "MOBA",
          createdAt: "2023-03-31T06:40:24.580Z",
          slugify: "mobile-legends",
          __v: 0,
          id: "642680585e62d621f17e01b8",
        },
        owner: "64267d8ff4fd40092d951238",
        createdAt: "2023-03-31T06:45:03.102Z",
        __v: 0,
      },
      {
        _id: "64268171064657f4cce17506",
        title: "Mobile legends account 3",
        mainImage:
          "https://res.cloudinary.com/dymjjmeyc/image/upload/v1679909838/AccountTrader/images_fy6ibk.jpg",
        images: [],
        price: 550000,
        descriptions: [
          {
            title: "skin",
            desc: "64",
            _id: "64268171064657f4cce17507",
          },
          {
            title: "hero",
            desc: "134",
            _id: "64268171064657f4cce17508",
          },
        ],
        sold: false,
        category: {
          _id: "642680585e62d621f17e01b8",
          name: "Mobile legends",
          photo:
            "https://res.cloudinary.com/dymjjmeyc/image/upload/v1679901155/AccountTrader/EIcNw9wWkAAHMCV_v75t6u.jpg",
          owner: "64267d84f4fd40092d951234",
          type: "MOBA",
          createdAt: "2023-03-31T06:40:24.580Z",
          slugify: "mobile-legends",
          __v: 0,
          id: "642680585e62d621f17e01b8",
        },
        owner: "64267d8ff4fd40092d951238",
        createdAt: "2023-03-31T06:45:05.575Z",
        __v: 0,
      },
    ],
    id: "64267d8ff4fd40092d951238",
  });

  axios.interceptors.request.use(
    (config) => {
      const token = Cookies.get("token");
      config.headers.set("token", token);
      return config;
    },
    (error) => {
      console.log(error);
      return Promise.reject(error);
    }
  );

  const createUser = async () => {
    try {
      await axios.post("http://localhost:8000/api/v1/user/auth/signup", {
        name: userName.name,
        email: userData.email,
        password: userData.password,
      });
      navigate("/signin");
    } catch (error) {
      console.log(error);
    }
  };

  const login = async () => {
    if (userinfo.email.includes("@") && userinfo.email.includes(".")) {
      setCheckEmail(false);
      if (userinfo.password.length === 8) {
        setCheckPass(false);
        try {
          const { data } = await axios.post(
            "http://localhost:8000/api/v1/user/auth/login",
            {
              email: userinfo.email,
              password: userinfo.password,
            }
          );
          setInfo(data);
          if (data.match) {
            navigate("/");
            setMatch(true);
            Cookies.set("token", data.token, { expires: 1 });
            setCheckUser(false);
          } else {
            setCheckUser(true);
          }
        } catch (error) {
          console.log(error);
        }
      } else {
        setCheckPass(true);
      }
    } else {
      setCheckEmail(true);
    }
  };

  const logout = () => {
    setUser(null);
    push("/");
  };

  const handleToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <AuthContext.Provider
      value={{
        user,
        setUser,
        logout,
        userinfo: userinfo,
        userName: userName,
        info: info,
        value: value,
        userData: userData,
        checkEmail: checkEmail,
        checkPass: checkPass,
        checkUser: checkUser,
        setInfo: setInfo,
        setUserData: setUserData,
        setUserinfo: setUserinfo,
        setUserName: setUserName,
        handleToTop, user, setUser, logout, loading, setLoading
      }}
    >
      {children}
    </AuthContext.Provider>
  );
}

export default AuthProvider