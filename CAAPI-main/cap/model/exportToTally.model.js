const mongoose = require('mongoose');

// Define the schema for the Invoice collection
const ExporttoTallySchema = new mongoose.Schema({
    date: { type: Date},
    invoice_no: { type: String},
    party_name: { type: String},
    traction_type: { type: String},
    payment_type: { type: String},
    amount: { type: Number},
    balance: { type: Number}
});

// Create a model for the "invoices" collection
const ExporttoTally = mongoose.model('ExporttoTally', ExporttoTallySchema);

module.exports = ExporttoTally;
