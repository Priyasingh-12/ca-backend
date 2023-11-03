const mongoose = require('mongoose');


const additemSchema = new mongoose.Schema({
    item_name: {
        type: String,
        required: true
    },
    item_id: {
        type: String,
        unique: true,
        required: true
    },
    brand: String,
    unit: String,
    cost_price: Number,
    selling_price: Number,
    supplier_name: String,
    gst_rate: Number,
    manufacture_date: Date,
    expiry_date: Date,
    stock_quantity: Number,
    description: String
});


const Item = mongoose.model('Item', additemSchema);

module.exports = Item;
