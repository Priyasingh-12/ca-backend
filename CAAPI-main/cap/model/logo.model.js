const mongoose = require('mongoose');

// Define the schema for the Invoice collection
const LogoSchema = new mongoose.Schema({
    image: { type: String},
    business_name: {type: String},
    gstin: {type: Number},
    phone_no: {type: Number},
    ref_no : {type: Number}, 
    email: {type: String}, 
    business_address : {type: String},
    business_category: {type: String}, 
    business_category: {type: String}, 
    signature:{type: String},
    business_type: {type: String}, 
    state: {type: String}, 
    business_registration_type: {type: String}, 
});

// Create a model for the "invoices" collection
const Logo = mongoose.model('Logo', LogoSchema);

module.exports = Logo;
