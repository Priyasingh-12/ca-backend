const mongoose = require('mongoose');

// Define the schema for the Invoice collection
const RecycleBinSchema = new mongoose.Schema({
    transction_date: { type: Date},
    ref_no: { type: Number},
    party_name: { type: String},
    tax_type: { type: String},
    payment_type: { type: String},
    amount: { type: Number},
    deleted_on: {type: Date}
    
});

// Create a model for the "invoices" collection
const RecycleBin = mongoose.model('RecycleBin', RecycleBinSchema);

module.exports = RecycleBin;
