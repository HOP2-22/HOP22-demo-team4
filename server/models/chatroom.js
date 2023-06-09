const mongoose = require("mongoose");

const chatroomSchema = new mongoose.Schema(
  {
    name: {
      type: "string",
      required: true,
    },
    members: [
      {
        type: mongoose.Schema.ObjectId,
        ref: "users",
      },
    ],

    updatedUser: {
      type: mongoose.Schema.ObjectId,
      ref: "users",
      unique: false,
    },
  },
  { toJSON: { virtuals: true }, toObject: { virtuals: true } }
);

chatroomSchema.virtual("messages", {
  ref: "messages",
  localField: "_id",
  foreignField: "chatroom",
  justOne: false,
});

chatroomSchema.pre("remove", async function (next) {
  await this.model("messages").deleteMany({ Chatroom: this._id });
  next();
});

const Chatroom = mongoose.model("chatrooms", chatroomSchema);

module.exports = Chatroom;
