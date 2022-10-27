const mongoose = require('mongoose');

const { Schema } = mongoose;

const productSchema = new Schema({
  price: {
    type: String,
    required: true,
    min: 0.99
  },
  quantity: {
    type: String,
    min: 0,
    default: 0
  }, 
  purchasedAt:  {
    type: String,
    required: true,
  },
  productId: {
    type: String,
    required: true,
  }
});

module.exports = productSchema;
