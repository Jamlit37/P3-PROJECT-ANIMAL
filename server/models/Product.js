const mongoose = require('mongoose');
const Ticket = require('./Ticket');

const { Schema } = mongoose;

const productSchema = new Schema({
  price: {
    type: Number,
    required: true,
    min: 0.99
  },
  quantity: {
    type: Number,
    min: 0,
    default: 0
  },
  productId: {
    type: String,
    required: true,
  }, 
 tickets: [Ticket.schema] 


});

const Product = mongoose.model('Product', productSchema);

module.exports = Product;