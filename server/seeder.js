const fs = require("fs");
const colors = require("colors");

const User = require("./models/user");
const Category = require("./models/category");
const Account = require("./models/account");
const Message = require("./models/message");
const Chatroom = require("./models/chatroom");
const connectDB = require("./config/DB");

const users = require("./data/accounts.json");
const categories = require("./data/accounts.json");
const accounts = require("./data/accounts.json");
const messages = require("./data/accounts.json");
const chatrooms = require("./data/accounts.json");

connectDB();

const importData = async () => {
  try {
    // await User.create(users);
    // await Category.create(categories);
    await Account.create(accounts);
    // await Message.create(messages);
    // await Chatroom.create(chatrooms);
    console.log("ogogdliig importloloo".green.inverse);
  } catch (err) {
    console.log(err);
  }
};

const deleteData = async () => {
  try {
    // await User.deleteMany();
    // await Category.deleteMany();
    await Account.deleteMany();
    // await Message.deleteMany();
    // await Chatroom.deleteMany();
    console.log("ogogdliig bvgdiig ustaglaa".green.inverse);
  } catch (err) {
    console.log(err);
  }
};

if (process.argv[2] === "-d") {
  deleteData();
} else if (process.argv[2] === "-i") {
  importData();
} else {
  console.log("error");
}
