const express = require("express");
const User = require("./users.model.js");
const server = express.Router();
server.post("/signup", async (req, res) => {
  let { name, email, password, pic } = req.body;
  try {
    let existinguser = await User.findOne({ email });
    if (existinguser) {
      res.status(404).send('we can"t able to create email alreay in use');
    } else {
      let user = await User.create({
        name,
        email,
        password,
        pic,
      });
      return res.status(201).send("User created successfully");
    }
  } catch (e) {
    res.status(404).send(e.message);
  }
});

server.post("/signin", async (req, res) => {
  let { password, email } = req.body;
  try {
    let user = await User.findOne({ email,password });
    if(user.email){
      return res.send(user);
    }
  } catch (e) {
    res.status(404).send(e.message);
  }
});

server.get("/", async (req, res) => {
  try {
    let users = await User.find();
    return res.status(200).send(users);
  } catch {
    res.status(404).send(e.message);
  }
});

server.patch("/:id", async (req, res) => {
  const { id } = req.params;
  const body = req.body;
  try {
    let updated = await User.updateOne({ _id: id }, { $set: body });
    return res.status(200).send(updated);
  } catch (e) {
    res.status(404).send(e.message);
  }
});

server.get("/:id", async (req, res) => {
  const { id } = req.params;
  try {
    let user = await User.findOne({ _id: id });
    if (user.email) {
      return res.status(200).send(user);
    } else {
      res.status(403).send("user not found");
    }
  } catch (e) {
    res.status(404).send(e.message);
  }
});

server.delete("/:id", async (req, res) => {
  const { id } = req.params;
  try {
    let Del = await User.deleteOne({ _id: id });
    return res.status(200).send(Del);
  } catch (e) {
    res.status(404).send(e.message);
  }
});
module.exports = server;
