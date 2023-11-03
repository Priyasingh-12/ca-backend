const mongoose = require('mongoose');

// Define the schema for the Invoice collection
const EstimateSchema = new mongoose.Schema({
    item: { type: String},
  quantity: {type: Number},
  amount: {
    type: Number,
  },
  tax: {
    type: Number
  },
  per_unit_price: {
    type: Number
  }
});

// Create a model for the "invoices" collection
const Estimate = mongoose.model('Estimate', EstimateSchema);

module.exports = Estimate;
