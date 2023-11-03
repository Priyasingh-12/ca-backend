const mongoose = require('mongoose');

// Define the schema for the Invoice collection
const InvoiceSchema = new mongoose.Schema({
  invoice_no: {
    type: String,
    required: true,
  },
  date: {
    type: Date,
    required: true,
  },
  amount: {
    type: Number,
    required: true,
  },
  tax: {
    type: Number,
    required: true,
  },
  total_amount: {
    type: Number,
    required: true,
  },
  actions: [String],
});

// Create a model for the "invoices" collection
const Invoice = mongoose.model('Invoice', InvoiceSchema);

module.exports = Invoice;
