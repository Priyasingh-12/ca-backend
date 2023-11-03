const mongoose = require('mongoose');

// Define the schema for the Invoice collection
const ExporttoItemSchema = new mongoose.Schema({
    item_name: { type: String},
    item_code: { type: Number},
    category: { type: String},
    sale_price: { type: Number},
    purchase_price: { type: String},
    sale_discount: { type: Number},
    curent_stock: { type: Number},
    tax: { type: Number},
    tax_type: { type: String},
    base_unit: {type: String},
    secondary_unit: { type: String},
    convert_rate: { type: Number}
    
});

// Create a model for the "invoices" collection
const ExporttoItem = mongoose.model('ExporttoItem', ExporttoItemSchema);

module.exports = ExporttoItem;
