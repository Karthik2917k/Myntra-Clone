const express = require("express");
const server = express.Router();
let Admin = require("./admin.model");
let User = require("../Users/users.model.js");
server.post("/", async (req, res) => {
  const { totalTransactions, totalProducts, totalAmount } = req.body;
  try {
    let admin = await Admin.create({
      totalAmount,
      totalTransactions,
      totalProducts,
    });

    return res.status(201).json({ success: true, data: admin });
  } catch (err) {
    return res.status(404).json({ message: err.message });
  }
});

server.get("/", async (req, res) => {
  const { token } = req.headers;
  try {
    let user = await User.findOne({ email: token });
    if (user.user === "admin") {
      let total = await Admin.findOne({ _id: "63a8a1cc44a1b67e7d517285" });
      return res.status(200).json({total});
    }
  } catch (err) {
    return res.status(404).json({ message: err.message });
  }
});
module.exports = server;
