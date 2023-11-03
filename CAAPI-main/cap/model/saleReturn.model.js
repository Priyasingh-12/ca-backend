const mongoose = require('mongoose');

// Define the schema for the Invoice collection
const SaleReturnSchema = new mongoose.Schema({
    party_name: { type: String},
    category_name: {type: String},
    date: {
      type: Date
    },
    ref_no: {
      type: Number
    },
    recived: {
        type: Number
      },
      balance: {
        type: Number
      },
      total: {
        type: Number
      }

});

// Create a model for the "invoices" collection
const SaleReturn= mongoose.model('SaleReturn', SaleReturnSchema);

module.exports = SaleReturn;
