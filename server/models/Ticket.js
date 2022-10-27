const { Schema } = require('mongoose');


const ticketSchema = new Schema({
  purchaseDate: {
    type: Date,
    default: Date.now
  },
  products: [
    {
      type: Schema.Types.ObjectId,
      ref: 'Product'
    }
  ],

  ticketId: {
    type: String,
    required: true,
  },


});

module.exports = ticketSchema;
;
