// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

export default function handler(req, res) {
  res.status(200).json({
    success: true,
    data: [
      {
        _id: "6426803d5e62d621f17e01b4",
        name: "Dota 2",
        photo:
          "https://res.cloudinary.com/dymjjmeyc/image/upload/v1679901155/AccountTrader/EIcNw9wWkAAHMCV_v75t6u.jpg",
        owner: "64267d84f4fd40092d951234",
        type: "MOBA",
        createdAt: "2023-03-31T06:39:57.663Z",
        slugify: "dota-2",
        __v: 0,
        id: "6426803d5e62d621f17e01b4",
      },
      {
        _id: "6426804d5e62d621f17e01b6",
        name: "CS go",
        photo:
          "https://res.cloudinary.com/dymjjmeyc/image/upload/v1679901155/AccountTrader/EIcNw9wWkAAHMCV_v75t6u.jpg",
        owner: "64267d84f4fd40092d951234",
        type: "shooters",
        createdAt: "2023-03-31T06:40:13.068Z",
        slugify: "cs-go",
        __v: 0,
        id: "6426804d5e62d621f17e01b6",
      },
      {
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
      {
        _id: "6426805f5e62d621f17e01ba",
        name: "PUBG",
        photo:
          "https://res.cloudinary.com/dymjjmeyc/image/upload/v1679901155/AccountTrader/EIcNw9wWkAAHMCV_v75t6u.jpg",
        owner: "64267d84f4fd40092d951234",
        type: "AA",
        createdAt: "2023-03-31T06:40:31.894Z",
        slugify: "pubg",
        __v: 0,
        id: "6426805f5e62d621f17e01ba",
      },
    ],
  });
}
