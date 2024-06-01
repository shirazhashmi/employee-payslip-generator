// models/reimbursement.js
const mongoose = require('mongoose');

const reimbursementSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    amount: {
        type: Number,
        required: true
    }
});

module.exports = mongoose.model('Reimbursement', reimbursementSchema);
