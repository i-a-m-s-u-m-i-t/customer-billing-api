const mongoose = require("mongoose");

const productSchema = new mongoose.Schema({
  productName: String,
  quantity: Number,
  price: Number,
});

const billingSchema = new mongoose.Schema({
  customerName: String,
  email: String,
  phone: String,
  address: String,

  products: [productSchema],

  totalAmount: Number,
  paymentMethod: String,
  billingDate: {
    type: Date,
    default: Date.now,
  },
});

module.exports = mongoose.model("Billing", billingSchema);
