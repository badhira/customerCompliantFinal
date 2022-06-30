const mongoose = require('mongoose');

const CustomerSchema = mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    mobileNo: {
        type: String,
        required: true
    },
    productId: {
        type: String,
        required: true
    },
    productType: {
        type: String,
        required: true
    },
    compliant: {
        type: String,
        required: true
    },
    invoiceUrl: {
        type: String,
        required: true
    }
});
const customer = mongoose.model('Customer', CustomerSchema);
module.exports = customer