const mongoose = require("mongoose");

const cartSchema = mongoose.Schema(
  {
    totalAmount: {
      type: Number,
      required: true,
    },
    totalProducts: {
      type: Number,
      required: true,
    },
    totalTransactions: {
      type: Number,
      required: true,
    }
  },
  {
    timestamps: true,
    versionKey: false,
  }
);

const admin = mongoose.model("admin", cartSchema);
module.exports = admin;