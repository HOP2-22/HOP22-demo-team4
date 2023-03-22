const mongoose = require("mongoose");
const colors = require("colors");
const dotenv = require("dotenv");

const User = require("./models/user");

dotenv.config({ path: "./config/config.env" });

mongoose.connect(process.env.MONGODB_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

const deleteData = async () => {
  try {
    await User.deleteMany();
    console.log("ogogdliig bvgdiig ustaglaa".green.inverse);
  } catch (err) {
    console.log(err);
  }
};

if (process.argv[2] === "-d") {
  deleteData();
} else {
  console.log("error");
}
