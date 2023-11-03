const mongoose = require('mongoose');

const productSchema = new mongoose.Schema({
    partyname: {
        type:String,
    },
    date:  {
        type:Date,
    },
    amount: {
        type:Number,
    },
    balance: {
        type:Number,
    },
    actions: {
        type:String,
    }
});

const Item= mongoose.model('Product',productSchema);

module.exports = Item;