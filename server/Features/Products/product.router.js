const express = require("express");
const server = express();
const Product = require("./product.model.js");

server.get("/", async (req, res) => {
  const { category, q, limit, brand, page, sort,min,max } = req.query;
  try {
    let temp = new RegExp(q, "i");
    if (category && limit && page) {
      if (sort) {
        if(min){
          let data = await Product.find({$and:[{ category: category},{price:min}]})
          .skip((page - 1) * limit)
          .limit(limit)
          .sort({ price: sort === "asc" ? 1 : -1 });
        console.log(sort === "asc" ? 1 : -1);
        res.send(data);
        }
        else if(max){
          let data = await Product.find({ category: category,price:max })
          .skip((page - 1) * limit)
          .limit(limit)
          .sort({ price: sort === "asc" ? 1 : -1 });
        console.log(sort === "asc" ? 1 : -1);
        res.send(data);
        }else{
          let data = await Product.find({ category: category })
          .skip((page - 1) * limit)
          .limit(limit)
          .sort({ price: sort === "asc" ? 1 : -1 });
        console.log(sort === "asc" ? 1 : -1);
        res.send(data);
        }
      } else {
        let data = await Product.find({ category: category })
          .skip((page - 1) * limit)
          .limit(limit);
        console.log(sort + "ew");

        res.send(data);
      }
    } else if (category) {
      if (sort) {
        let data = await Product.find({ category: category }).sort({
          price: sort === "asc" ? 1 : -1,
        });
        res.send(data);
      } else {
        let data = await Product.find({ category: category });
        res.send(data);
      }
    } else if (brand && limit && page) {
      if (sort) {
        let data = await Product.find({ brand: brand })
          .skip((page - 1) * limit)
          .limit(limit)
          .sort({ price: sort === "asc" ? 1 : -1 });
        res.send(data);
      } else {
        let data = await Product.find({ brand: brand })
          .skip((page - 1) * limit)
          .limit(limit);
        res.send(data);
      }
    } else if (brand) {
      if (sort) {
        let data = await Product.find({ brand: brand }).sort({
          price: sort === "asc" ? 1 : -1,
        });
        res.send(data);
      } else {
        let data = await Product.find({ brand: brand });
        res.send(data);
      }
    } else if (page && limit) {
      let data = await Product.find()
        .skip((page - 1) * limit)
        .limit(limit);
      res.send(data);
    } else if (sort) {
      let data = await Product.find().sort({ price: sort === "asc" ? 1 : -1 });
      res.send(data);
    } else {
      let data = await Product.find();
      res.send(data);
    }
  } catch (e) {
    res.status(404).send(e.message);
  }
});

server.post("/", async (req, res) => {
  let { blazer } = req.body;
  try {
    let product = await Product.create({
      blazer,
    });

    res.send(product);
  } catch (e) {
    res.status(404).send("Something wrong or Data Not Found");
  }
});

server.get("/:id", async (req, res) => {
  let id = req.params.id;
  try {
    let prod = await Product.findById({ _id: id });
    res.send(prod);
  } catch (error) {
    res.status(400).send(error.message);
  }
});

module.exports = server;
