const mongoose = require("mongoose");

const userSchema = mongoose.Schema(
  {
    name: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    pic: { type: String,default:"https://i.pinimg.com/originals/90/73/6c/90736c89822912ca93047c9be8765614.jpg" },
    user: { type: String, required: true, default: "user" },
  },
  {
    timestamps: true,
    versionKey: false,
  }
);

const User = mongoose.model("user", userSchema);
module.exports = User;
