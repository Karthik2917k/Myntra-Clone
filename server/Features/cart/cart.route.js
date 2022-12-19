const express = require("express");
const Cart = require("./cart.model.js");
const Product = require("../Products/product.model");
const server = express();
const cors = require("cors");
server.use(cors());
const Authmiddleware = async (req, res, next) => {
  let { token } = req.headers;
  let { user, product } = req.body;

  try {
    let cart = await Cart.find({ token, product });
    if (cart.length >= 1) {
      let prod = await Product.findOne({ _id: product });
      if (prod.quantity >= 1) {
        let qty = prod.quantity - 1;
        let update = await Product.updateOne(
          { _id: product },
          { $set: { quantity: qty } }
        );
        let cartQty = cart[0].qty + 1;
        let id = cart[0]._id;
        let qtyupdate = await Cart.updateOne(
          { _id: id },
          { $set: { qty: cartQty } }
        );
        console.log(qtyupdate);

        return res.status(200).send("Quantity Increased");
      } else {
        return res.status(403).send("Product is out of stock");
      }
    } else {
      next();
    }
  } catch (err) {
    res.status(404).send(err.message);
  }
};

const ProdQty = async (req, res, next) => {
  let { product } = req.body;
  try {
    let prod = await Product.findOne({ _id: product });
    if (prod.quantity >= 1) {
      next();
    } else {
      return res.status(403).send("Product is out of stock");
    }
  } catch (err) {
    res.status(404).send(err.message);
  }
};
server.post("/", Authmiddleware, ProdQty, async (req, res) => {
  let { token } = req.headers;
  let { user, product } = req.body;
  try {
    const newcart = { token, user, product };
    let cart = await Cart.create(newcart);
    let prod = await Product.findOne({ _id: product });
    let qty = prod.quantity - 1;
    let update = await Product.updateOne(
      { _id: product },
      { $set: { quantity: qty } }
    );
    console.log(update);
    res.status(201).json("Product added to cart");
  } catch (e) {
    res.status(404).send(e.message);
  }
});

server.get("/", async (req, res) => {
  try {
    let cart = await Cart.find().populate("product");
    res.send(cart);
  } catch (e) {
    res.status(404).send(e.message);
  }
});

server.get("/products", async (req, res) => {
  let { token } = req.headers;
  try {
    let cart = await Cart.find({ token }).populate("product");
    return res.status(200).send(cart);
  } catch (e) {
    return res.status(404).send(e.message);
  }
});

server.delete("/placeorder", async (req, res) => {
  const { token } = req.headers;
  try {
    let Delete = await Cart.deleteMany({ token });
    console.log(Delete);
    if(Delete.deletedCount>=1) return res.status(201).send("Products placed successfully");
    return res.status(201).send("Please add atleast one product");
    
  } catch (e) {
    return res.status(404).send(e.message);
  }
});

const Middleware = async (req, res, next) => {
  let { token } = req.headers;
  let { product } = req.body;

  try {
    let cart = await Cart.findOne({ token, product });
    let prod = await Product.findOne({ _id: product });
    let qty = prod.quantity + 1;
    if (cart.qty > 1) {
      let cartQty = cart.qty - 1;
      let update = await Product.updateOne(
        { _id: product },
        { $set: { quantity: qty } }
      );
      let qtyupdate = await Cart.updateOne(
        { _id: cart._id },
        { $set: { qty: cartQty } }
      );
      return res.status(201).send("Quatity Decresed Success");
    } else {
      let update = await Product.updateOne(
        { _id: product },
        { $set: { quantity: qty } }
      );
      let Delete = await Cart.deleteOne({ _id: cart._id });
      return res.status(200).send("Product removed from cart");
    }
  } catch (err) {
    res.status(404).send(err.message);
  }
};

server.post("/decrese", Middleware);

server.delete("/:id", async (req, res) => {
  const { id } = req.params;
  console.log(id);
  try {
    const prod = await Cart.findOne({ _id: id });
    const product = await Product.findOne({ _id: prod.product });
    let qty = product.quantity + prod.qty;
    let Delete = await Cart.deleteOne({ _id: id });
    let update = await Product.updateOne(
      { _id: product },
      { $set: { quantity: qty } }
    );
    res.status(200).send(`Item deleted successfully`);
  } catch (e) {
    res.status(401).send(e.message);
  }
});

module.exports = server;
