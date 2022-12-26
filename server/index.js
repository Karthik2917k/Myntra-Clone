const express = require("express");
const connect = require("./config/db.js");
const server = express();
const cors = require("cors");
server.use(express.json());
server.use(cors());

// Mens api route
const ProductRouter = require("./Features/Products/product.router.js");
server.use("/products", ProductRouter);
//User api routes
const UserRouter = require("./Features/Users/users.router.js");
server.use("/user",UserRouter); 
//cart 
const cartRouter = require("./Features/cart/cart.route.js");
server.use("/cart",cartRouter);
//admin
const adminRouter = require("./Features/admin/admin.route.js");
server.use("/admin", adminRouter);

server.get("/", (req, res) => {
  res.send("Welcome to Myntra");
});


server.listen(8080, async (req, res) => {
  try {
    await connect();
    console.log(`Database connected`);
  } catch (e) {
    console.log(e);
  }
  console.log(`server listening at port ${8080}`);
});
