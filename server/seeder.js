const colors = require("colors");

const User = require("./models/user");
const Category = require("./models/category");
const Account = require("./models/account");
const connectDB = require("./config/DB");

connectDB();

const deleteData = async () => {
  try {
    // await User.deleteMany();
    // await Category.deleteMany();
    // await Account.deleteMany();
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
