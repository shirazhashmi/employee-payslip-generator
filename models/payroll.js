// models/payroll.js
const mongoose = require('mongoose');
const companySchema = require('./company').schema;
const employeeSchema = require('./employee').schema;
const earningSchema = require('./earning').schema;
const deductionSchema = require('./deduction').schema;
const reimbursementSchema = require('./reimbursement').schema;

const payrollSchema = new mongoose.Schema({
    company: {
        type: companySchema,
        required: true
    },
    employee: {
        type: employeeSchema,
        required: true
    },
    earnings: [earningSchema],
    deductions: [deductionSchema],
    reimbursements: [reimbursementSchema]
});

module.exports = mongoose.model('Payroll', payrollSchema);
