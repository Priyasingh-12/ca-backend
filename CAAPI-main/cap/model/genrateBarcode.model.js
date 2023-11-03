const mongoose = require('mongoose');

// Define the schema for the Invoice collection
const BarcodeSchema = new mongoose.Schema({
    item: { type: String},
    item_code: { type: String},
    header: { type: String},
    Line1: { type: String},
    Line2: { type: String},
    action: { type: String},
    
});

// Create a model for the "invoices" collection
const Barcode = mongoose.model('Barcode', BarcodeSchema);

module.exports = Barcode;
