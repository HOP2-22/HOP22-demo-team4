const express = require("express");
const dotenv = require("dotenv");
const colors = require("colors");
const connectDB = require("./config/DB");
const cors = require("cors");

const user = require("./routes/user");
const category = require("./routes/category");
const account = require("./routes/account");
const errorHandler = require("./middleWare/error");

//Google authenticate
// const passport = require("passport");
// const session = require("express-session");
// const cookieParser = require("cookie-parser");
//
// const authRoute = require("./routes/auth");
// require("./auth");

connectDB();

dotenv.config({ path: "./config/config.env" });

const app = express();

app.use(express.json());

let whitelist = [
  "http://localhost:3000",
  "https://accounts.google.com",
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

// app.use(cookieParser());
// app.use(session({ secret: "dog", resave: true, saveUninitialized: true }));
// app.use(passport.initialize());
// app.use(passport.session());
//
// app.get("/logout", function (req, res) {
//   req.logout();
//   res.redirect("http://localhost:3000/");
// });
//
// app.use("/auth", authRoute);

app.use("/api/v1/user", user);
app.use("/api/v1/category", category);
app.use("/api/v1/account", account);

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
