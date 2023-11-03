const mongoose = require('mongoose');


const partySchema = new mongoose.Schema({
  partyName: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  gstNo: {
    type: String,
    required: true,
    unique: true,
  },
  gstType: {
    type: String,
    required: true,
  },
  phoneNumber: {
    type: String,
    required: true,
  },
  state: {
    type: String,
    required: true,
  },
  billingAddress: {
    streetAddress: String,
    city: String,
    zipCode: String,
  },
  shippingAddress: {
    streetAddress: String,
    city: String,
    zipCode: String,
  },
});

const Party = mongoose.model('Party', partySchema);

module.exports = Party;
