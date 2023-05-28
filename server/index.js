const express = require("express");
const dotenv = require("dotenv");
const colors = require("colors");
const connectDB = require("./config/DB");
const cors = require("cors");

const user = require("./routes/user");
const category = require("./routes/category");
const account = require("./routes/account");
const message = require("./routes/message");
const chatroom = require("./routes/chatroom");
const bank = require("./routes/bank");
const errorHandler = require("./middleWare/error");

connectDB();

dotenv.config({ path: "./config/config.env" });

const app = express();

app.use(express.json());

let whitelist = [
  "http://localhost:3000",
  "https://swapzone.vercel.app",
  undefined,
];

let corsOptions = {
  origin: function (origin, callback) {
    if (whitelist.indexOf(origin) !== -1) {
      callback(null, true);
    } else {
      callback(new Error("Not allowed by CORS"));
    }
  },
  methods: "GET,POST,PUT,DELETE",
  credential: true,
};

app.use(cors(corsOptions));

app.use("/api/v1/user", user);
app.use("/api/v1/category", category);
app.use("/api/v1/account", account);
app.use("/api/v1/message", message);
app.use("/api/v1/room", chatroom);
app.use("/api/v1/payment", bank);

app.use(errorHandler);

app.listen(process.env.PORT, () => {
  console.log(`${process.env.PORT}-дээр ажиллаж эхэллээ`);
});

process.on("unhandledRejection", (err, promise) => {
  console.log(`aldaa garjee: ${err.message}`.red.underline);
  server.close(() => {
    process.exit(1);
  });
});
