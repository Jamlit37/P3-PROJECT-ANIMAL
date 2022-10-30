const mongoose = require('mongoose');

const { Schema } = mongoose;

const ticketSchema = new Schema({
  title: {
    type: String
  },
  ticketId: {
    type: String
  }
});

const Ticket = mongoose.model('Ticket', ticketSchema);

module.exports = Ticket;
