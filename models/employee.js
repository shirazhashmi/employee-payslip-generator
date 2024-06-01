// models/employee.js
const mongoose = require('mongoose');

const employeeSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    id: {
        type: String,
        required: true,
        unique: true
    },
    position: {
        type: String,
        required: true
    },
    joiningDate: {
        type: Date,
        required: true
    },
    uan: {
        type: String,
        required: true
    },
    accountNumber: {
        type: String,
        required: true
    },
    pfAccountNumber: {
        type: String,
        required: true
    },
    paidDays: {
        type: Number,
        required: true
    },
    lopDays: {
        type: Number,
        required: true
    }
});

module.exports = mongoose.model('Employee', employeeSchema);
