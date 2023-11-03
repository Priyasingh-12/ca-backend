const mongoose = require('mongoose');

const transSchema = new mongoose.Schema({

    partyname: {
        type:String
    },
    date:  {
        type:Date
    },
    totalamount: {
        type:Number
    },
    dueamount: {
        type:Number
    },
    actions: {
        type:String
    }
});

const Tran= mongoose.model('Tran', transSchema);

module.exports = Tran;