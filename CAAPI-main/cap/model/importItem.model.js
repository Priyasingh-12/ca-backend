const mongoose = require('mongoose');

// Define the schema for the Invoice collection
const ImportItemSchema = new mongoose.Schema({
    import_file: { type: String},
   
});

// Create a model for the "invoices" collection
const ImportItem = mongoose.model('ImportItem', ImportItemSchema );

module.exports = ImportItem;
