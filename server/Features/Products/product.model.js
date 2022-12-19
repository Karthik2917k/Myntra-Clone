const mongoose = require("mongoose");

const mensSchema = new mongoose.Schema(
  {
    category: { type: String },
    productname: { type: String },
    ratingsCount: { type: String },
    rating: { type: Number },
    strike: { type: String },
    image: { type: String },
    discountPercentage: { type: String },
    brand: { type: String },
    price: { type: Number },
    quantity: { type: Number }
  },
  {
    timestamps: true,
    versionKey: false,
  }
);

const Mens = mongoose.model("product", mensSchema);

module.exports = Mens;
