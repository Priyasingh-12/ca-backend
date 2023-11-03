const mongoose = require('mongoose');

const purchaseorderSchema = new mongoose.Schema({
    partyname: {
        type:String,
    },
    advanced: {
        type:Number,
    },
    balance: {
        type:Number,
    },
    duedate:  {
        type:Date,
    },
    
    actions: {
        type:String,
    }
});

const Order= mongoose.model('Order', purchaseorderSchema);

module.exports = Order;