// models/deduction.js
const mongoose = require('mongoose');

const deductionSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    amount: {
        type: Number,
        required: true
    }
});

module.exports = mongoose.model('Deduction', deductionSchema);
