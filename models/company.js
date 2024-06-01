// models/company.js
const mongoose = require('mongoose');

const companySchema = new mongoose.Schema({
    icon: {
        type: String,
        default: null
    },
    iconUrl: {
        type: String,
        default: ''
    },
    name: {
        type: String,
        required: true
    },
    address: {
        type: String,
        required: true
    }
});

module.exports = mongoose.model('Company', companySchema);
