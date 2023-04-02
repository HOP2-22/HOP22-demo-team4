import { createContext, useState } from "react";

export const AuthContext = createContext();

export default function AuthProvider({ children }) {
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

  const logout = () => {
    setUser(null);
  };

  return (
    <AuthContext.Provider value={{ user, setUser, logout }}>
      {children}
    </AuthContext.Provider>
  );
}
