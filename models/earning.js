// models/earning.js
const mongoose = require('mongoose');

const earningSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    amount: {
        type: Number,
        required: true
    }
});

module.exports = mongoose.model('Earning', earningSchema);
